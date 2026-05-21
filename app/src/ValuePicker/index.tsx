import fuzzysort from 'fuzzysort'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import style from './style.module.css'

const cycle = (array: any[], index: number, step: number = 1) => {
  const next = (index + step) % array.length
  return next < 0 ? array.length + next : next
}

function scrollIntoViewIfNeeded (element: HTMLElement, alignToTop: boolean) {
  const parent = element.offsetParent as HTMLElement
  if (!parent) return

  const scroll = parent.scrollTop
  const height = parent.offsetHeight
  const top = element.offsetTop
  const bottom = top + element.scrollHeight

  if (top < scroll || bottom > scroll + height) {
    element.scrollIntoView(alignToTop)
  }
}

interface Choice {
  code: string;
  description?: string;
  search?: any;
  [key: string]: any;
}

interface ValuePickerProps {
  target: HTMLElement;
  choices: Choice[];
  param: any;
  value: string | number | undefined;
  prompt: string;
  searchKey: string;
  searchThreshold?: number;
  showAllThreshold?: number;
  onCancel: () => void;
  onSelect: (choice: Choice) => void;
  isJp?: boolean;
}

function ValuePicker (props: ValuePickerProps) {
  const { value, prompt, choices, searchKey, searchThreshold = 10, showAllThreshold = 50, isJp } = props
  const { onCancel, onSelect } = props

  const dialogRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const [query, setQuery] = useState<string | null>(null)
  const [highlighted, setHighlighted] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const results = useMemo(() => {
    const options = { key: searchKey, limit: 30 }
    const filtered = fuzzysort.go(query || '', choices, options)

    if (showAll || searchThreshold > choices.length) {
      return choices
    } else if (!query) {
      return choices.slice(0, searchThreshold)
    }

    return filtered.map(result => ({
      ...result.obj,
      search: result
    }))
  }, [query, choices, searchKey, showAll, searchThreshold])

  const enableShowAllButton = useMemo(() => {
    return (
      !showAll &&
      choices.length > searchThreshold &&
      choices.length <= showAllThreshold
    )
  }, [showAll, choices, searchThreshold, showAllThreshold])

  const handleClickResult = useCallback((result: Choice) => {
    onSelect(result)
  }, [onSelect])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onCancel()
    }
  }, [onCancel])

  const handleSelectActive = useCallback(() => {
    if (results.length > 0 && highlighted !== null) {
      handleClickResult(results[highlighted])
    }
  }, [results, highlighted, handleClickResult])

  const setHighlightPosition = useCallback((initial: number, offset?: number) => {
    if (results.length === 0) {
      setHighlighted(null)
      return
    }
    if (offset === undefined) {
      setHighlighted(initial)
      return
    }

    const next = highlighted !== null
      ? cycle(results, highlighted, offset)
      : initial

    const selector = `li[data-result-index="${next}"]`
    const element = listRef.current?.querySelector(selector) as HTMLElement

    if (element) {
      scrollIntoViewIfNeeded(element, false)
    }
    setHighlighted(next)
  }, [results, highlighted, setHighlighted])

  const handleHighlightNext = useCallback(() => {
    setHighlightPosition(0, 1)
  }, [setHighlightPosition])

  const handleHightightPrev = useCallback(() => {
    setHighlightPosition(results.length - 1, -1)
  }, [setHighlightPosition, results])

  const handleKeyPress = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }, [setQuery])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    const mapping: Record<string, () => void> = {
      ArrowDown: handleHighlightNext,
      ArrowUp: handleHightightPrev,
      Enter: handleSelectActive,
      Escape: onCancel
    }

    const action = mapping[event.key]
    if (action) {
      event.stopPropagation()
      action()
    }
  }, [
    handleHighlightNext,
    handleHightightPrev,
    handleSelectActive,
    onCancel
  ])

  const focusSearch = useCallback((node: HTMLInputElement | null) => {
    if (node) {
      node.focus()
      node.select()
    }
  }, [])

  const stopPropagation = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
  }, [])

  useEffect(() => {
    document.body.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div className={style.dialog} ref={dialogRef} onKeyDown={handleKeyDown} onClick={stopPropagation}>
      <p>{prompt}</p>
      {choices.length > searchThreshold && (
        <input
          ref={focusSearch}
          type="text"
          value={query !== null ? query : (String(value || ''))}
          onChange={handleKeyPress}
        />
      )}
      <ul className={style.results} ref={listRef}>
        {results.map((result, i) => (
          <li
            key={`result-${i}`}
            className={highlighted === i ? style.highlighted : ''}
            title={result.description}
            data-result-index={i}
            onClick={() => handleClickResult(result)}
            onMouseOver={() => setHighlightPosition(i)}
          >
            {result.search ? (
              <span dangerouslySetInnerHTML={{
                __html: fuzzysort.highlight(result.search) || ''
              }} />
            ) : (
              <span>
                {result[searchKey]}
              </span>
            )}
            {result.symbol && result.symbol !== result[searchKey] && (
              <span className={style.symbol}>({result.symbol})</span>
            )}
            {result.description && (
              <span className={style.description}>- {result.description}</span>
            )}
          </li>
        ))}
      </ul>
      {choices.length > searchThreshold && (
        <div className={style['choices-counter']}>
          {isJp ? `選択肢の総数: ${choices.length}.` : `Total choices: ${choices.length}.`}
          {enableShowAllButton && (
            <button onClick={() => setShowAll(true)}>{isJp ? 'すべて表示' : 'Show all'}</button>
          )}
        </div>
      )}
    </div>
  )
}

export default ValuePicker
