/* eslint-disable */
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const zmk = $root.zmk = (() => {

    /**
     * Namespace zmk.
     * @exports zmk
     * @namespace
     */
    const zmk = {};

    zmk.behaviors = (function() {

        /**
         * Namespace behaviors.
         * @memberof zmk
         * @namespace
         */
        const behaviors = {};

        behaviors.Request = (function() {

            /**
             * Properties of a Request.
             * @typedef {Object} zmk.behaviors.Request.$Properties
             * @property {boolean|null} [listAllBehaviors] Request listAllBehaviors
             * @property {zmk.behaviors.GetBehaviorDetailsRequest.$Properties|null} [getBehaviorDetails] Request getBehaviorDetails
             * @property {"listAllBehaviors"|"getBehaviorDetails"} [requestType] Request requestType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Request.
             * @memberof zmk.behaviors
             * @interface IRequest
             * @augments zmk.behaviors.Request.$Properties
             * @deprecated Use zmk.behaviors.Request.$Properties instead.
             */

            /**
             * Narrowed shape of a Request.
             * @typedef {{
             *   listAllBehaviors?: boolean|null;
             *   getBehaviorDetails?: zmk.behaviors.GetBehaviorDetailsRequest.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ requestType?: undefined; listAllBehaviors?: null; getBehaviorDetails?: null }|{ requestType?: "listAllBehaviors"; listAllBehaviors: boolean; getBehaviorDetails?: null }|{ requestType?: "getBehaviorDetails"; listAllBehaviors?: null; getBehaviorDetails: zmk.behaviors.GetBehaviorDetailsRequest.$Shape })
             * )} zmk.behaviors.Request.$Shape
             */

            /**
             * Constructs a new Request.
             * @memberof zmk.behaviors
             * @classdesc Represents a Request.
             * @constructor
             * @param {zmk.behaviors.Request.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Request(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request listAllBehaviors.
             * @member {boolean|null|undefined} listAllBehaviors
             * @memberof zmk.behaviors.Request
             * @instance
             */
            Request.prototype.listAllBehaviors = null;

            /**
             * Request getBehaviorDetails.
             * @member {zmk.behaviors.GetBehaviorDetailsRequest.$Properties|null|undefined} getBehaviorDetails
             * @memberof zmk.behaviors.Request
             * @instance
             */
            Request.prototype.getBehaviorDetails = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Request requestType.
             * @member {"listAllBehaviors"|"getBehaviorDetails"|undefined} requestType
             * @memberof zmk.behaviors.Request
             * @instance
             */
            Object.defineProperty(Request.prototype, "requestType", {
                get: $util.oneOfGetter($oneOfFields = ["listAllBehaviors", "getBehaviorDetails"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.Request
             * @static
             * @param {zmk.behaviors.Request.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.Request} Request instance
             * @type {{
             *   (properties: zmk.behaviors.Request.$Shape): zmk.behaviors.Request & zmk.behaviors.Request.$Shape;
             *   (properties?: zmk.behaviors.Request.$Properties): zmk.behaviors.Request;
             * }}
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.behaviors.Request.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.Request
             * @static
             * @param {zmk.behaviors.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.listAllBehaviors != null && Object.hasOwnProperty.call(message, "listAllBehaviors"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.listAllBehaviors);
                if (message.getBehaviorDetails != null && Object.hasOwnProperty.call(message, "getBehaviorDetails"))
                    $root.zmk.behaviors.GetBehaviorDetailsRequest.encode(message.getBehaviorDetails, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.behaviors.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.Request
             * @static
             * @param {zmk.behaviors.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.Request & zmk.behaviors.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.Request();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.listAllBehaviors = reader.bool();
                            message.requestType = "listAllBehaviors";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.getBehaviorDetails = $root.zmk.behaviors.GetBehaviorDetailsRequest.decode(reader, reader.uint32(), undefined, _depth + 1, message.getBehaviorDetails);
                            message.requestType = "getBehaviorDetails";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.Request & zmk.behaviors.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Request message.
             * @function verify
             * @memberof zmk.behaviors.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.listAllBehaviors != null && message.hasOwnProperty("listAllBehaviors")) {
                    properties.requestType = 1;
                    if (typeof message.listAllBehaviors !== "boolean")
                        return "listAllBehaviors: boolean expected";
                }
                if (message.getBehaviorDetails != null && message.hasOwnProperty("getBehaviorDetails")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    {
                        let error = $root.zmk.behaviors.GetBehaviorDetailsRequest.verify(message.getBehaviorDetails, _depth + 1);
                        if (error)
                            return "getBehaviorDetails." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.Request} Request
             */
            Request.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.Request)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.Request();
                if (object.listAllBehaviors != null)
                    message.listAllBehaviors = Boolean(object.listAllBehaviors);
                if (object.getBehaviorDetails != null) {
                    if (typeof object.getBehaviorDetails !== "object")
                        throw TypeError(".zmk.behaviors.Request.getBehaviorDetails: object expected");
                    message.getBehaviorDetails = $root.zmk.behaviors.GetBehaviorDetailsRequest.fromObject(object.getBehaviorDetails, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.Request
             * @static
             * @param {zmk.behaviors.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.listAllBehaviors != null && message.hasOwnProperty("listAllBehaviors")) {
                    object.listAllBehaviors = message.listAllBehaviors;
                    if (options.oneofs)
                        object.requestType = "listAllBehaviors";
                }
                if (message.getBehaviorDetails != null && message.hasOwnProperty("getBehaviorDetails")) {
                    object.getBehaviorDetails = $root.zmk.behaviors.GetBehaviorDetailsRequest.toObject(message.getBehaviorDetails, options, _depth + 1);
                    if (options.oneofs)
                        object.requestType = "getBehaviorDetails";
                }
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Request
             * @function getTypeUrl
             * @memberof zmk.behaviors.Request
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Request.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.Request";
            };

            return Request;
        })();

        behaviors.GetBehaviorDetailsRequest = (function() {

            /**
             * Properties of a GetBehaviorDetailsRequest.
             * @typedef {Object} zmk.behaviors.GetBehaviorDetailsRequest.$Properties
             * @property {number|null} [behaviorId] GetBehaviorDetailsRequest behaviorId
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a GetBehaviorDetailsRequest.
             * @memberof zmk.behaviors
             * @interface IGetBehaviorDetailsRequest
             * @augments zmk.behaviors.GetBehaviorDetailsRequest.$Properties
             * @deprecated Use zmk.behaviors.GetBehaviorDetailsRequest.$Properties instead.
             */

            /**
             * Shape of a GetBehaviorDetailsRequest.
             * @typedef {zmk.behaviors.GetBehaviorDetailsRequest.$Properties} zmk.behaviors.GetBehaviorDetailsRequest.$Shape
             */

            /**
             * Constructs a new GetBehaviorDetailsRequest.
             * @memberof zmk.behaviors
             * @classdesc Represents a GetBehaviorDetailsRequest.
             * @constructor
             * @param {zmk.behaviors.GetBehaviorDetailsRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function GetBehaviorDetailsRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetBehaviorDetailsRequest behaviorId.
             * @member {number} behaviorId
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @instance
             */
            GetBehaviorDetailsRequest.prototype.behaviorId = 0;

            /**
             * Creates a new GetBehaviorDetailsRequest instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsRequest.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.GetBehaviorDetailsRequest} GetBehaviorDetailsRequest instance
             * @type {{
             *   (properties: zmk.behaviors.GetBehaviorDetailsRequest.$Shape): zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape;
             *   (properties?: zmk.behaviors.GetBehaviorDetailsRequest.$Properties): zmk.behaviors.GetBehaviorDetailsRequest;
             * }}
             */
            GetBehaviorDetailsRequest.create = function create(properties) {
                return new GetBehaviorDetailsRequest(properties);
            };

            /**
             * Encodes the specified GetBehaviorDetailsRequest message. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsRequest.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsRequest.$Properties} message GetBehaviorDetailsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBehaviorDetailsRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.behaviorId != null && Object.hasOwnProperty.call(message, "behaviorId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.behaviorId);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified GetBehaviorDetailsRequest message, length delimited. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsRequest.$Properties} message GetBehaviorDetailsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBehaviorDetailsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a GetBehaviorDetailsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape} GetBehaviorDetailsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBehaviorDetailsRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.GetBehaviorDetailsRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.behaviorId = value;
                            else
                                delete message.behaviorId;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a GetBehaviorDetailsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape} GetBehaviorDetailsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBehaviorDetailsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetBehaviorDetailsRequest message.
             * @function verify
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetBehaviorDetailsRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.behaviorId != null && message.hasOwnProperty("behaviorId"))
                    if (!$util.isInteger(message.behaviorId))
                        return "behaviorId: integer expected";
                return null;
            };

            /**
             * Creates a GetBehaviorDetailsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.GetBehaviorDetailsRequest} GetBehaviorDetailsRequest
             */
            GetBehaviorDetailsRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.GetBehaviorDetailsRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.GetBehaviorDetailsRequest();
                if (object.behaviorId != null)
                    if (Number(object.behaviorId) !== 0)
                        message.behaviorId = object.behaviorId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a GetBehaviorDetailsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsRequest} message GetBehaviorDetailsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetBehaviorDetailsRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.behaviorId = 0;
                if (message.behaviorId != null && message.hasOwnProperty("behaviorId"))
                    object.behaviorId = message.behaviorId;
                return object;
            };

            /**
             * Converts this GetBehaviorDetailsRequest to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetBehaviorDetailsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for GetBehaviorDetailsRequest
             * @function getTypeUrl
             * @memberof zmk.behaviors.GetBehaviorDetailsRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            GetBehaviorDetailsRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.GetBehaviorDetailsRequest";
            };

            return GetBehaviorDetailsRequest;
        })();

        behaviors.Response = (function() {

            /**
             * Properties of a Response.
             * @typedef {Object} zmk.behaviors.Response.$Properties
             * @property {zmk.behaviors.ListAllBehaviorsResponse.$Properties|null} [listAllBehaviors] Response listAllBehaviors
             * @property {zmk.behaviors.GetBehaviorDetailsResponse.$Properties|null} [getBehaviorDetails] Response getBehaviorDetails
             * @property {"listAllBehaviors"|"getBehaviorDetails"} [responseType] Response responseType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Response.
             * @memberof zmk.behaviors
             * @interface IResponse
             * @augments zmk.behaviors.Response.$Properties
             * @deprecated Use zmk.behaviors.Response.$Properties instead.
             */

            /**
             * Narrowed shape of a Response.
             * @typedef {{
             *   listAllBehaviors?: zmk.behaviors.ListAllBehaviorsResponse.$Shape|null;
             *   getBehaviorDetails?: zmk.behaviors.GetBehaviorDetailsResponse.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ responseType?: undefined; listAllBehaviors?: null; getBehaviorDetails?: null }|{ responseType?: "listAllBehaviors"; listAllBehaviors: zmk.behaviors.ListAllBehaviorsResponse.$Shape; getBehaviorDetails?: null }|{ responseType?: "getBehaviorDetails"; listAllBehaviors?: null; getBehaviorDetails: zmk.behaviors.GetBehaviorDetailsResponse.$Shape })
             * )} zmk.behaviors.Response.$Shape
             */

            /**
             * Constructs a new Response.
             * @memberof zmk.behaviors
             * @classdesc Represents a Response.
             * @constructor
             * @param {zmk.behaviors.Response.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Response(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response listAllBehaviors.
             * @member {zmk.behaviors.ListAllBehaviorsResponse.$Properties|null|undefined} listAllBehaviors
             * @memberof zmk.behaviors.Response
             * @instance
             */
            Response.prototype.listAllBehaviors = null;

            /**
             * Response getBehaviorDetails.
             * @member {zmk.behaviors.GetBehaviorDetailsResponse.$Properties|null|undefined} getBehaviorDetails
             * @memberof zmk.behaviors.Response
             * @instance
             */
            Response.prototype.getBehaviorDetails = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Response responseType.
             * @member {"listAllBehaviors"|"getBehaviorDetails"|undefined} responseType
             * @memberof zmk.behaviors.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "responseType", {
                get: $util.oneOfGetter($oneOfFields = ["listAllBehaviors", "getBehaviorDetails"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.Response
             * @static
             * @param {zmk.behaviors.Response.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.Response} Response instance
             * @type {{
             *   (properties: zmk.behaviors.Response.$Shape): zmk.behaviors.Response & zmk.behaviors.Response.$Shape;
             *   (properties?: zmk.behaviors.Response.$Properties): zmk.behaviors.Response;
             * }}
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.behaviors.Response.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.Response
             * @static
             * @param {zmk.behaviors.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.listAllBehaviors != null && Object.hasOwnProperty.call(message, "listAllBehaviors"))
                    $root.zmk.behaviors.ListAllBehaviorsResponse.encode(message.listAllBehaviors, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.getBehaviorDetails != null && Object.hasOwnProperty.call(message, "getBehaviorDetails"))
                    $root.zmk.behaviors.GetBehaviorDetailsResponse.encode(message.getBehaviorDetails, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.behaviors.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.Response
             * @static
             * @param {zmk.behaviors.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.Response & zmk.behaviors.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.Response();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.listAllBehaviors = $root.zmk.behaviors.ListAllBehaviorsResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.listAllBehaviors);
                            message.responseType = "listAllBehaviors";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.getBehaviorDetails = $root.zmk.behaviors.GetBehaviorDetailsResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.getBehaviorDetails);
                            message.responseType = "getBehaviorDetails";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.Response & zmk.behaviors.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Response message.
             * @function verify
             * @memberof zmk.behaviors.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.listAllBehaviors != null && message.hasOwnProperty("listAllBehaviors")) {
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.behaviors.ListAllBehaviorsResponse.verify(message.listAllBehaviors, _depth + 1);
                        if (error)
                            return "listAllBehaviors." + error;
                    }
                }
                if (message.getBehaviorDetails != null && message.hasOwnProperty("getBehaviorDetails")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.behaviors.GetBehaviorDetailsResponse.verify(message.getBehaviorDetails, _depth + 1);
                        if (error)
                            return "getBehaviorDetails." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.Response} Response
             */
            Response.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.Response)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.Response();
                if (object.listAllBehaviors != null) {
                    if (typeof object.listAllBehaviors !== "object")
                        throw TypeError(".zmk.behaviors.Response.listAllBehaviors: object expected");
                    message.listAllBehaviors = $root.zmk.behaviors.ListAllBehaviorsResponse.fromObject(object.listAllBehaviors, _depth + 1);
                }
                if (object.getBehaviorDetails != null) {
                    if (typeof object.getBehaviorDetails !== "object")
                        throw TypeError(".zmk.behaviors.Response.getBehaviorDetails: object expected");
                    message.getBehaviorDetails = $root.zmk.behaviors.GetBehaviorDetailsResponse.fromObject(object.getBehaviorDetails, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.Response
             * @static
             * @param {zmk.behaviors.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.listAllBehaviors != null && message.hasOwnProperty("listAllBehaviors")) {
                    object.listAllBehaviors = $root.zmk.behaviors.ListAllBehaviorsResponse.toObject(message.listAllBehaviors, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "listAllBehaviors";
                }
                if (message.getBehaviorDetails != null && message.hasOwnProperty("getBehaviorDetails")) {
                    object.getBehaviorDetails = $root.zmk.behaviors.GetBehaviorDetailsResponse.toObject(message.getBehaviorDetails, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "getBehaviorDetails";
                }
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Response
             * @function getTypeUrl
             * @memberof zmk.behaviors.Response
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Response.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.Response";
            };

            return Response;
        })();

        behaviors.ListAllBehaviorsResponse = (function() {

            /**
             * Properties of a ListAllBehaviorsResponse.
             * @typedef {Object} zmk.behaviors.ListAllBehaviorsResponse.$Properties
             * @property {Array.<number>|null} [behaviors] ListAllBehaviorsResponse behaviors
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a ListAllBehaviorsResponse.
             * @memberof zmk.behaviors
             * @interface IListAllBehaviorsResponse
             * @augments zmk.behaviors.ListAllBehaviorsResponse.$Properties
             * @deprecated Use zmk.behaviors.ListAllBehaviorsResponse.$Properties instead.
             */

            /**
             * Shape of a ListAllBehaviorsResponse.
             * @typedef {zmk.behaviors.ListAllBehaviorsResponse.$Properties} zmk.behaviors.ListAllBehaviorsResponse.$Shape
             */

            /**
             * Constructs a new ListAllBehaviorsResponse.
             * @memberof zmk.behaviors
             * @classdesc Represents a ListAllBehaviorsResponse.
             * @constructor
             * @param {zmk.behaviors.ListAllBehaviorsResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function ListAllBehaviorsResponse(properties) {
                this.behaviors = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListAllBehaviorsResponse behaviors.
             * @member {Array.<number>} behaviors
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @instance
             */
            ListAllBehaviorsResponse.prototype.behaviors = $util.emptyArray;

            /**
             * Creates a new ListAllBehaviorsResponse instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {zmk.behaviors.ListAllBehaviorsResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.ListAllBehaviorsResponse} ListAllBehaviorsResponse instance
             * @type {{
             *   (properties: zmk.behaviors.ListAllBehaviorsResponse.$Shape): zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape;
             *   (properties?: zmk.behaviors.ListAllBehaviorsResponse.$Properties): zmk.behaviors.ListAllBehaviorsResponse;
             * }}
             */
            ListAllBehaviorsResponse.create = function create(properties) {
                return new ListAllBehaviorsResponse(properties);
            };

            /**
             * Encodes the specified ListAllBehaviorsResponse message. Does not implicitly {@link zmk.behaviors.ListAllBehaviorsResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {zmk.behaviors.ListAllBehaviorsResponse.$Properties} message ListAllBehaviorsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListAllBehaviorsResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.behaviors != null && message.behaviors.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (let i = 0; i < message.behaviors.length; ++i)
                        writer.uint32(message.behaviors[i]);
                    writer.ldelim();
                }
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ListAllBehaviorsResponse message, length delimited. Does not implicitly {@link zmk.behaviors.ListAllBehaviorsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {zmk.behaviors.ListAllBehaviorsResponse.$Properties} message ListAllBehaviorsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListAllBehaviorsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a ListAllBehaviorsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape} ListAllBehaviorsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListAllBehaviorsResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.ListAllBehaviorsResponse();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType === 2) {
                                if (!(message.behaviors && message.behaviors.length))
                                    message.behaviors = [];
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.behaviors.push(reader.uint32());
                                continue;
                            }
                            if (wireType !== 0)
                                break;
                            if (!(message.behaviors && message.behaviors.length))
                                message.behaviors = [];
                            message.behaviors.push(reader.uint32());
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a ListAllBehaviorsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape} ListAllBehaviorsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListAllBehaviorsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListAllBehaviorsResponse message.
             * @function verify
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListAllBehaviorsResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.behaviors != null && message.hasOwnProperty("behaviors")) {
                    if (!Array.isArray(message.behaviors))
                        return "behaviors: array expected";
                    for (let i = 0; i < message.behaviors.length; ++i)
                        if (!$util.isInteger(message.behaviors[i]))
                            return "behaviors: integer[] expected";
                }
                return null;
            };

            /**
             * Creates a ListAllBehaviorsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.ListAllBehaviorsResponse} ListAllBehaviorsResponse
             */
            ListAllBehaviorsResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.ListAllBehaviorsResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.ListAllBehaviorsResponse();
                if (object.behaviors) {
                    if (!Array.isArray(object.behaviors))
                        throw TypeError(".zmk.behaviors.ListAllBehaviorsResponse.behaviors: array expected");
                    message.behaviors = Array(object.behaviors.length);
                    for (let i = 0; i < object.behaviors.length; ++i)
                        message.behaviors[i] = object.behaviors[i] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a ListAllBehaviorsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {zmk.behaviors.ListAllBehaviorsResponse} message ListAllBehaviorsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListAllBehaviorsResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.behaviors = [];
                if (message.behaviors && message.behaviors.length) {
                    object.behaviors = Array(message.behaviors.length);
                    for (let j = 0; j < message.behaviors.length; ++j)
                        object.behaviors[j] = message.behaviors[j];
                }
                return object;
            };

            /**
             * Converts this ListAllBehaviorsResponse to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListAllBehaviorsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ListAllBehaviorsResponse
             * @function getTypeUrl
             * @memberof zmk.behaviors.ListAllBehaviorsResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ListAllBehaviorsResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.ListAllBehaviorsResponse";
            };

            return ListAllBehaviorsResponse;
        })();

        behaviors.GetBehaviorDetailsResponse = (function() {

            /**
             * Properties of a GetBehaviorDetailsResponse.
             * @typedef {Object} zmk.behaviors.GetBehaviorDetailsResponse.$Properties
             * @property {number|null} [id] GetBehaviorDetailsResponse id
             * @property {string|null} [displayName] GetBehaviorDetailsResponse displayName
             * @property {Array.<zmk.behaviors.BehaviorBindingParametersSet.$Properties>|null} [metadata] GetBehaviorDetailsResponse metadata
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a GetBehaviorDetailsResponse.
             * @memberof zmk.behaviors
             * @interface IGetBehaviorDetailsResponse
             * @augments zmk.behaviors.GetBehaviorDetailsResponse.$Properties
             * @deprecated Use zmk.behaviors.GetBehaviorDetailsResponse.$Properties instead.
             */

            /**
             * Shape of a GetBehaviorDetailsResponse.
             * @typedef {{
             *   id?: number|null;
             *   displayName?: string|null;
             *   metadata?: Array.<zmk.behaviors.BehaviorBindingParametersSet.$Shape>|null;
             *   $unknowns?: Array.<Uint8Array>;
             * }} zmk.behaviors.GetBehaviorDetailsResponse.$Shape
             */

            /**
             * Constructs a new GetBehaviorDetailsResponse.
             * @memberof zmk.behaviors
             * @classdesc Represents a GetBehaviorDetailsResponse.
             * @constructor
             * @param {zmk.behaviors.GetBehaviorDetailsResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function GetBehaviorDetailsResponse(properties) {
                this.metadata = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetBehaviorDetailsResponse id.
             * @member {number} id
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @instance
             */
            GetBehaviorDetailsResponse.prototype.id = 0;

            /**
             * GetBehaviorDetailsResponse displayName.
             * @member {string} displayName
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @instance
             */
            GetBehaviorDetailsResponse.prototype.displayName = "";

            /**
             * GetBehaviorDetailsResponse metadata.
             * @member {Array.<zmk.behaviors.BehaviorBindingParametersSet.$Properties>} metadata
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @instance
             */
            GetBehaviorDetailsResponse.prototype.metadata = $util.emptyArray;

            /**
             * Creates a new GetBehaviorDetailsResponse instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.GetBehaviorDetailsResponse} GetBehaviorDetailsResponse instance
             * @type {{
             *   (properties: zmk.behaviors.GetBehaviorDetailsResponse.$Shape): zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape;
             *   (properties?: zmk.behaviors.GetBehaviorDetailsResponse.$Properties): zmk.behaviors.GetBehaviorDetailsResponse;
             * }}
             */
            GetBehaviorDetailsResponse.create = function create(properties) {
                return new GetBehaviorDetailsResponse(properties);
            };

            /**
             * Encodes the specified GetBehaviorDetailsResponse message. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsResponse.$Properties} message GetBehaviorDetailsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBehaviorDetailsResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
                if (message.metadata != null && message.metadata.length)
                    for (let i = 0; i < message.metadata.length; ++i)
                        $root.zmk.behaviors.BehaviorBindingParametersSet.encode(message.metadata[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified GetBehaviorDetailsResponse message, length delimited. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsResponse.$Properties} message GetBehaviorDetailsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetBehaviorDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a GetBehaviorDetailsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape} GetBehaviorDetailsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBehaviorDetailsResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.GetBehaviorDetailsResponse(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.displayName = value;
                            else
                                delete message.displayName;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.metadata && message.metadata.length))
                                message.metadata = [];
                            message.metadata.push($root.zmk.behaviors.BehaviorBindingParametersSet.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a GetBehaviorDetailsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape} GetBehaviorDetailsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetBehaviorDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetBehaviorDetailsResponse message.
             * @function verify
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetBehaviorDetailsResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    if (!$util.isString(message.displayName))
                        return "displayName: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    if (!Array.isArray(message.metadata))
                        return "metadata: array expected";
                    for (let i = 0; i < message.metadata.length; ++i) {
                        let error = $root.zmk.behaviors.BehaviorBindingParametersSet.verify(message.metadata[i], _depth + 1);
                        if (error)
                            return "metadata." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GetBehaviorDetailsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.GetBehaviorDetailsResponse} GetBehaviorDetailsResponse
             */
            GetBehaviorDetailsResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.GetBehaviorDetailsResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.GetBehaviorDetailsResponse();
                if (object.id != null)
                    if (Number(object.id) !== 0)
                        message.id = object.id >>> 0;
                if (object.displayName != null)
                    if (typeof object.displayName !== "string" || object.displayName.length)
                        message.displayName = String(object.displayName);
                if (object.metadata) {
                    if (!Array.isArray(object.metadata))
                        throw TypeError(".zmk.behaviors.GetBehaviorDetailsResponse.metadata: array expected");
                    message.metadata = Array(object.metadata.length);
                    for (let i = 0; i < object.metadata.length; ++i) {
                        if (typeof object.metadata[i] !== "object")
                            throw TypeError(".zmk.behaviors.GetBehaviorDetailsResponse.metadata: object expected");
                        message.metadata[i] = $root.zmk.behaviors.BehaviorBindingParametersSet.fromObject(object.metadata[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GetBehaviorDetailsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {zmk.behaviors.GetBehaviorDetailsResponse} message GetBehaviorDetailsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetBehaviorDetailsResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.metadata = [];
                if (options.defaults) {
                    object.id = 0;
                    object.displayName = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.metadata && message.metadata.length) {
                    object.metadata = Array(message.metadata.length);
                    for (let j = 0; j < message.metadata.length; ++j)
                        object.metadata[j] = $root.zmk.behaviors.BehaviorBindingParametersSet.toObject(message.metadata[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this GetBehaviorDetailsResponse to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetBehaviorDetailsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for GetBehaviorDetailsResponse
             * @function getTypeUrl
             * @memberof zmk.behaviors.GetBehaviorDetailsResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            GetBehaviorDetailsResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.GetBehaviorDetailsResponse";
            };

            return GetBehaviorDetailsResponse;
        })();

        behaviors.BehaviorBindingParametersSet = (function() {

            /**
             * Properties of a BehaviorBindingParametersSet.
             * @typedef {Object} zmk.behaviors.BehaviorBindingParametersSet.$Properties
             * @property {Array.<zmk.behaviors.BehaviorParameterValueDescription.$Properties>|null} [param1] BehaviorBindingParametersSet param1
             * @property {Array.<zmk.behaviors.BehaviorParameterValueDescription.$Properties>|null} [param2] BehaviorBindingParametersSet param2
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a BehaviorBindingParametersSet.
             * @memberof zmk.behaviors
             * @interface IBehaviorBindingParametersSet
             * @augments zmk.behaviors.BehaviorBindingParametersSet.$Properties
             * @deprecated Use zmk.behaviors.BehaviorBindingParametersSet.$Properties instead.
             */

            /**
             * Shape of a BehaviorBindingParametersSet.
             * @typedef {{
             *   param1?: Array.<zmk.behaviors.BehaviorParameterValueDescription.$Shape>|null;
             *   param2?: Array.<zmk.behaviors.BehaviorParameterValueDescription.$Shape>|null;
             *   $unknowns?: Array.<Uint8Array>;
             * }} zmk.behaviors.BehaviorBindingParametersSet.$Shape
             */

            /**
             * Constructs a new BehaviorBindingParametersSet.
             * @memberof zmk.behaviors
             * @classdesc Represents a BehaviorBindingParametersSet.
             * @constructor
             * @param {zmk.behaviors.BehaviorBindingParametersSet.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function BehaviorBindingParametersSet(properties) {
                this.param1 = [];
                this.param2 = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BehaviorBindingParametersSet param1.
             * @member {Array.<zmk.behaviors.BehaviorParameterValueDescription.$Properties>} param1
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @instance
             */
            BehaviorBindingParametersSet.prototype.param1 = $util.emptyArray;

            /**
             * BehaviorBindingParametersSet param2.
             * @member {Array.<zmk.behaviors.BehaviorParameterValueDescription.$Properties>} param2
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @instance
             */
            BehaviorBindingParametersSet.prototype.param2 = $util.emptyArray;

            /**
             * Creates a new BehaviorBindingParametersSet instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {zmk.behaviors.BehaviorBindingParametersSet.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.BehaviorBindingParametersSet} BehaviorBindingParametersSet instance
             * @type {{
             *   (properties: zmk.behaviors.BehaviorBindingParametersSet.$Shape): zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape;
             *   (properties?: zmk.behaviors.BehaviorBindingParametersSet.$Properties): zmk.behaviors.BehaviorBindingParametersSet;
             * }}
             */
            BehaviorBindingParametersSet.create = function create(properties) {
                return new BehaviorBindingParametersSet(properties);
            };

            /**
             * Encodes the specified BehaviorBindingParametersSet message. Does not implicitly {@link zmk.behaviors.BehaviorBindingParametersSet.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {zmk.behaviors.BehaviorBindingParametersSet.$Properties} message BehaviorBindingParametersSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorBindingParametersSet.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.param1 != null && message.param1.length)
                    for (let i = 0; i < message.param1.length; ++i)
                        $root.zmk.behaviors.BehaviorParameterValueDescription.encode(message.param1[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.param2 != null && message.param2.length)
                    for (let i = 0; i < message.param2.length; ++i)
                        $root.zmk.behaviors.BehaviorParameterValueDescription.encode(message.param2[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BehaviorBindingParametersSet message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorBindingParametersSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {zmk.behaviors.BehaviorBindingParametersSet.$Properties} message BehaviorBindingParametersSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorBindingParametersSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a BehaviorBindingParametersSet message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape} BehaviorBindingParametersSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorBindingParametersSet.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.BehaviorBindingParametersSet();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.param1 && message.param1.length))
                                message.param1 = [];
                            message.param1.push($root.zmk.behaviors.BehaviorParameterValueDescription.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.param2 && message.param2.length))
                                message.param2 = [];
                            message.param2.push($root.zmk.behaviors.BehaviorParameterValueDescription.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a BehaviorBindingParametersSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape} BehaviorBindingParametersSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorBindingParametersSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BehaviorBindingParametersSet message.
             * @function verify
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BehaviorBindingParametersSet.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.param1 != null && message.hasOwnProperty("param1")) {
                    if (!Array.isArray(message.param1))
                        return "param1: array expected";
                    for (let i = 0; i < message.param1.length; ++i) {
                        let error = $root.zmk.behaviors.BehaviorParameterValueDescription.verify(message.param1[i], _depth + 1);
                        if (error)
                            return "param1." + error;
                    }
                }
                if (message.param2 != null && message.hasOwnProperty("param2")) {
                    if (!Array.isArray(message.param2))
                        return "param2: array expected";
                    for (let i = 0; i < message.param2.length; ++i) {
                        let error = $root.zmk.behaviors.BehaviorParameterValueDescription.verify(message.param2[i], _depth + 1);
                        if (error)
                            return "param2." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BehaviorBindingParametersSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.BehaviorBindingParametersSet} BehaviorBindingParametersSet
             */
            BehaviorBindingParametersSet.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.BehaviorBindingParametersSet)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.BehaviorBindingParametersSet();
                if (object.param1) {
                    if (!Array.isArray(object.param1))
                        throw TypeError(".zmk.behaviors.BehaviorBindingParametersSet.param1: array expected");
                    message.param1 = Array(object.param1.length);
                    for (let i = 0; i < object.param1.length; ++i) {
                        if (typeof object.param1[i] !== "object")
                            throw TypeError(".zmk.behaviors.BehaviorBindingParametersSet.param1: object expected");
                        message.param1[i] = $root.zmk.behaviors.BehaviorParameterValueDescription.fromObject(object.param1[i], _depth + 1);
                    }
                }
                if (object.param2) {
                    if (!Array.isArray(object.param2))
                        throw TypeError(".zmk.behaviors.BehaviorBindingParametersSet.param2: array expected");
                    message.param2 = Array(object.param2.length);
                    for (let i = 0; i < object.param2.length; ++i) {
                        if (typeof object.param2[i] !== "object")
                            throw TypeError(".zmk.behaviors.BehaviorBindingParametersSet.param2: object expected");
                        message.param2[i] = $root.zmk.behaviors.BehaviorParameterValueDescription.fromObject(object.param2[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BehaviorBindingParametersSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {zmk.behaviors.BehaviorBindingParametersSet} message BehaviorBindingParametersSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BehaviorBindingParametersSet.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults) {
                    object.param1 = [];
                    object.param2 = [];
                }
                if (message.param1 && message.param1.length) {
                    object.param1 = Array(message.param1.length);
                    for (let j = 0; j < message.param1.length; ++j)
                        object.param1[j] = $root.zmk.behaviors.BehaviorParameterValueDescription.toObject(message.param1[j], options, _depth + 1);
                }
                if (message.param2 && message.param2.length) {
                    object.param2 = Array(message.param2.length);
                    for (let j = 0; j < message.param2.length; ++j)
                        object.param2[j] = $root.zmk.behaviors.BehaviorParameterValueDescription.toObject(message.param2[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this BehaviorBindingParametersSet to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BehaviorBindingParametersSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BehaviorBindingParametersSet
             * @function getTypeUrl
             * @memberof zmk.behaviors.BehaviorBindingParametersSet
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BehaviorBindingParametersSet.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.BehaviorBindingParametersSet";
            };

            return BehaviorBindingParametersSet;
        })();

        behaviors.BehaviorParameterValueDescriptionRange = (function() {

            /**
             * Properties of a BehaviorParameterValueDescriptionRange.
             * @typedef {Object} zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties
             * @property {number|null} [min] BehaviorParameterValueDescriptionRange min
             * @property {number|null} [max] BehaviorParameterValueDescriptionRange max
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a BehaviorParameterValueDescriptionRange.
             * @memberof zmk.behaviors
             * @interface IBehaviorParameterValueDescriptionRange
             * @augments zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties
             * @deprecated Use zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties instead.
             */

            /**
             * Shape of a BehaviorParameterValueDescriptionRange.
             * @typedef {zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties} zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape
             */

            /**
             * Constructs a new BehaviorParameterValueDescriptionRange.
             * @memberof zmk.behaviors
             * @classdesc Represents a BehaviorParameterValueDescriptionRange.
             * @constructor
             * @param {zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function BehaviorParameterValueDescriptionRange(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BehaviorParameterValueDescriptionRange min.
             * @member {number} min
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @instance
             */
            BehaviorParameterValueDescriptionRange.prototype.min = 0;

            /**
             * BehaviorParameterValueDescriptionRange max.
             * @member {number} max
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @instance
             */
            BehaviorParameterValueDescriptionRange.prototype.max = 0;

            /**
             * Creates a new BehaviorParameterValueDescriptionRange instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.BehaviorParameterValueDescriptionRange} BehaviorParameterValueDescriptionRange instance
             * @type {{
             *   (properties: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape): zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape;
             *   (properties?: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties): zmk.behaviors.BehaviorParameterValueDescriptionRange;
             * }}
             */
            BehaviorParameterValueDescriptionRange.create = function create(properties) {
                return new BehaviorParameterValueDescriptionRange(properties);
            };

            /**
             * Encodes the specified BehaviorParameterValueDescriptionRange message. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescriptionRange.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties} message BehaviorParameterValueDescriptionRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterValueDescriptionRange.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.min);
                if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.max);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BehaviorParameterValueDescriptionRange message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescriptionRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties} message BehaviorParameterValueDescriptionRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterValueDescriptionRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a BehaviorParameterValueDescriptionRange message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape} BehaviorParameterValueDescriptionRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterValueDescriptionRange.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.BehaviorParameterValueDescriptionRange(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.min = value;
                            else
                                delete message.min;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.max = value;
                            else
                                delete message.max;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a BehaviorParameterValueDescriptionRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape} BehaviorParameterValueDescriptionRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterValueDescriptionRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BehaviorParameterValueDescriptionRange message.
             * @function verify
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BehaviorParameterValueDescriptionRange.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.min != null && message.hasOwnProperty("min"))
                    if (!$util.isInteger(message.min))
                        return "min: integer expected";
                if (message.max != null && message.hasOwnProperty("max"))
                    if (!$util.isInteger(message.max))
                        return "max: integer expected";
                return null;
            };

            /**
             * Creates a BehaviorParameterValueDescriptionRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.BehaviorParameterValueDescriptionRange} BehaviorParameterValueDescriptionRange
             */
            BehaviorParameterValueDescriptionRange.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.BehaviorParameterValueDescriptionRange)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.BehaviorParameterValueDescriptionRange();
                if (object.min != null)
                    if (Number(object.min) !== 0)
                        message.min = object.min | 0;
                if (object.max != null)
                    if (Number(object.max) !== 0)
                        message.max = object.max | 0;
                return message;
            };

            /**
             * Creates a plain object from a BehaviorParameterValueDescriptionRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescriptionRange} message BehaviorParameterValueDescriptionRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BehaviorParameterValueDescriptionRange.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.min = 0;
                    object.max = 0;
                }
                if (message.min != null && message.hasOwnProperty("min"))
                    object.min = message.min;
                if (message.max != null && message.hasOwnProperty("max"))
                    object.max = message.max;
                return object;
            };

            /**
             * Converts this BehaviorParameterValueDescriptionRange to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BehaviorParameterValueDescriptionRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BehaviorParameterValueDescriptionRange
             * @function getTypeUrl
             * @memberof zmk.behaviors.BehaviorParameterValueDescriptionRange
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BehaviorParameterValueDescriptionRange.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.BehaviorParameterValueDescriptionRange";
            };

            return BehaviorParameterValueDescriptionRange;
        })();

        behaviors.BehaviorParameterNil = (function() {

            /**
             * Properties of a BehaviorParameterNil.
             * @typedef {Object} zmk.behaviors.BehaviorParameterNil.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a BehaviorParameterNil.
             * @memberof zmk.behaviors
             * @interface IBehaviorParameterNil
             * @augments zmk.behaviors.BehaviorParameterNil.$Properties
             * @deprecated Use zmk.behaviors.BehaviorParameterNil.$Properties instead.
             */

            /**
             * Shape of a BehaviorParameterNil.
             * @typedef {zmk.behaviors.BehaviorParameterNil.$Properties} zmk.behaviors.BehaviorParameterNil.$Shape
             */

            /**
             * Constructs a new BehaviorParameterNil.
             * @memberof zmk.behaviors
             * @classdesc Represents a BehaviorParameterNil.
             * @constructor
             * @param {zmk.behaviors.BehaviorParameterNil.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function BehaviorParameterNil(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new BehaviorParameterNil instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {zmk.behaviors.BehaviorParameterNil.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.BehaviorParameterNil} BehaviorParameterNil instance
             * @type {{
             *   (properties: zmk.behaviors.BehaviorParameterNil.$Shape): zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape;
             *   (properties?: zmk.behaviors.BehaviorParameterNil.$Properties): zmk.behaviors.BehaviorParameterNil;
             * }}
             */
            BehaviorParameterNil.create = function create(properties) {
                return new BehaviorParameterNil(properties);
            };

            /**
             * Encodes the specified BehaviorParameterNil message. Does not implicitly {@link zmk.behaviors.BehaviorParameterNil.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {zmk.behaviors.BehaviorParameterNil.$Properties} message BehaviorParameterNil message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterNil.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BehaviorParameterNil message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterNil.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {zmk.behaviors.BehaviorParameterNil.$Properties} message BehaviorParameterNil message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterNil.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a BehaviorParameterNil message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape} BehaviorParameterNil
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterNil.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.BehaviorParameterNil();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    reader.skipType(tag & 7, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a BehaviorParameterNil message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape} BehaviorParameterNil
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterNil.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BehaviorParameterNil message.
             * @function verify
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BehaviorParameterNil.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates a BehaviorParameterNil message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.BehaviorParameterNil} BehaviorParameterNil
             */
            BehaviorParameterNil.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.BehaviorParameterNil)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return new $root.zmk.behaviors.BehaviorParameterNil();
            };

            /**
             * Creates a plain object from a BehaviorParameterNil message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {zmk.behaviors.BehaviorParameterNil} message BehaviorParameterNil
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BehaviorParameterNil.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this BehaviorParameterNil to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BehaviorParameterNil.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BehaviorParameterNil
             * @function getTypeUrl
             * @memberof zmk.behaviors.BehaviorParameterNil
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BehaviorParameterNil.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.BehaviorParameterNil";
            };

            return BehaviorParameterNil;
        })();

        behaviors.BehaviorParameterLayerId = (function() {

            /**
             * Properties of a BehaviorParameterLayerId.
             * @typedef {Object} zmk.behaviors.BehaviorParameterLayerId.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a BehaviorParameterLayerId.
             * @memberof zmk.behaviors
             * @interface IBehaviorParameterLayerId
             * @augments zmk.behaviors.BehaviorParameterLayerId.$Properties
             * @deprecated Use zmk.behaviors.BehaviorParameterLayerId.$Properties instead.
             */

            /**
             * Shape of a BehaviorParameterLayerId.
             * @typedef {zmk.behaviors.BehaviorParameterLayerId.$Properties} zmk.behaviors.BehaviorParameterLayerId.$Shape
             */

            /**
             * Constructs a new BehaviorParameterLayerId.
             * @memberof zmk.behaviors
             * @classdesc Represents a BehaviorParameterLayerId.
             * @constructor
             * @param {zmk.behaviors.BehaviorParameterLayerId.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function BehaviorParameterLayerId(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new BehaviorParameterLayerId instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {zmk.behaviors.BehaviorParameterLayerId.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.BehaviorParameterLayerId} BehaviorParameterLayerId instance
             * @type {{
             *   (properties: zmk.behaviors.BehaviorParameterLayerId.$Shape): zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape;
             *   (properties?: zmk.behaviors.BehaviorParameterLayerId.$Properties): zmk.behaviors.BehaviorParameterLayerId;
             * }}
             */
            BehaviorParameterLayerId.create = function create(properties) {
                return new BehaviorParameterLayerId(properties);
            };

            /**
             * Encodes the specified BehaviorParameterLayerId message. Does not implicitly {@link zmk.behaviors.BehaviorParameterLayerId.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {zmk.behaviors.BehaviorParameterLayerId.$Properties} message BehaviorParameterLayerId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterLayerId.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BehaviorParameterLayerId message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterLayerId.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {zmk.behaviors.BehaviorParameterLayerId.$Properties} message BehaviorParameterLayerId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterLayerId.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a BehaviorParameterLayerId message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape} BehaviorParameterLayerId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterLayerId.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.BehaviorParameterLayerId();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    reader.skipType(tag & 7, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a BehaviorParameterLayerId message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape} BehaviorParameterLayerId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterLayerId.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BehaviorParameterLayerId message.
             * @function verify
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BehaviorParameterLayerId.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates a BehaviorParameterLayerId message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.BehaviorParameterLayerId} BehaviorParameterLayerId
             */
            BehaviorParameterLayerId.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.BehaviorParameterLayerId)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return new $root.zmk.behaviors.BehaviorParameterLayerId();
            };

            /**
             * Creates a plain object from a BehaviorParameterLayerId message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {zmk.behaviors.BehaviorParameterLayerId} message BehaviorParameterLayerId
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BehaviorParameterLayerId.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this BehaviorParameterLayerId to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BehaviorParameterLayerId.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BehaviorParameterLayerId
             * @function getTypeUrl
             * @memberof zmk.behaviors.BehaviorParameterLayerId
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BehaviorParameterLayerId.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.BehaviorParameterLayerId";
            };

            return BehaviorParameterLayerId;
        })();

        behaviors.BehaviorParameterHidUsage = (function() {

            /**
             * Properties of a BehaviorParameterHidUsage.
             * @typedef {Object} zmk.behaviors.BehaviorParameterHidUsage.$Properties
             * @property {number|null} [keyboardMax] BehaviorParameterHidUsage keyboardMax
             * @property {number|null} [consumerMax] BehaviorParameterHidUsage consumerMax
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a BehaviorParameterHidUsage.
             * @memberof zmk.behaviors
             * @interface IBehaviorParameterHidUsage
             * @augments zmk.behaviors.BehaviorParameterHidUsage.$Properties
             * @deprecated Use zmk.behaviors.BehaviorParameterHidUsage.$Properties instead.
             */

            /**
             * Shape of a BehaviorParameterHidUsage.
             * @typedef {zmk.behaviors.BehaviorParameterHidUsage.$Properties} zmk.behaviors.BehaviorParameterHidUsage.$Shape
             */

            /**
             * Constructs a new BehaviorParameterHidUsage.
             * @memberof zmk.behaviors
             * @classdesc Represents a BehaviorParameterHidUsage.
             * @constructor
             * @param {zmk.behaviors.BehaviorParameterHidUsage.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function BehaviorParameterHidUsage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BehaviorParameterHidUsage keyboardMax.
             * @member {number} keyboardMax
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @instance
             */
            BehaviorParameterHidUsage.prototype.keyboardMax = 0;

            /**
             * BehaviorParameterHidUsage consumerMax.
             * @member {number} consumerMax
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @instance
             */
            BehaviorParameterHidUsage.prototype.consumerMax = 0;

            /**
             * Creates a new BehaviorParameterHidUsage instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {zmk.behaviors.BehaviorParameterHidUsage.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.BehaviorParameterHidUsage} BehaviorParameterHidUsage instance
             * @type {{
             *   (properties: zmk.behaviors.BehaviorParameterHidUsage.$Shape): zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape;
             *   (properties?: zmk.behaviors.BehaviorParameterHidUsage.$Properties): zmk.behaviors.BehaviorParameterHidUsage;
             * }}
             */
            BehaviorParameterHidUsage.create = function create(properties) {
                return new BehaviorParameterHidUsage(properties);
            };

            /**
             * Encodes the specified BehaviorParameterHidUsage message. Does not implicitly {@link zmk.behaviors.BehaviorParameterHidUsage.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {zmk.behaviors.BehaviorParameterHidUsage.$Properties} message BehaviorParameterHidUsage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterHidUsage.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.keyboardMax != null && Object.hasOwnProperty.call(message, "keyboardMax"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.keyboardMax);
                if (message.consumerMax != null && Object.hasOwnProperty.call(message, "consumerMax"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.consumerMax);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BehaviorParameterHidUsage message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterHidUsage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {zmk.behaviors.BehaviorParameterHidUsage.$Properties} message BehaviorParameterHidUsage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterHidUsage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a BehaviorParameterHidUsage message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape} BehaviorParameterHidUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterHidUsage.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.BehaviorParameterHidUsage(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.keyboardMax = value;
                            else
                                delete message.keyboardMax;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.consumerMax = value;
                            else
                                delete message.consumerMax;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a BehaviorParameterHidUsage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape} BehaviorParameterHidUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterHidUsage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BehaviorParameterHidUsage message.
             * @function verify
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BehaviorParameterHidUsage.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.keyboardMax != null && message.hasOwnProperty("keyboardMax"))
                    if (!$util.isInteger(message.keyboardMax))
                        return "keyboardMax: integer expected";
                if (message.consumerMax != null && message.hasOwnProperty("consumerMax"))
                    if (!$util.isInteger(message.consumerMax))
                        return "consumerMax: integer expected";
                return null;
            };

            /**
             * Creates a BehaviorParameterHidUsage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.BehaviorParameterHidUsage} BehaviorParameterHidUsage
             */
            BehaviorParameterHidUsage.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.BehaviorParameterHidUsage)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.BehaviorParameterHidUsage();
                if (object.keyboardMax != null)
                    if (Number(object.keyboardMax) !== 0)
                        message.keyboardMax = object.keyboardMax >>> 0;
                if (object.consumerMax != null)
                    if (Number(object.consumerMax) !== 0)
                        message.consumerMax = object.consumerMax >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a BehaviorParameterHidUsage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {zmk.behaviors.BehaviorParameterHidUsage} message BehaviorParameterHidUsage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BehaviorParameterHidUsage.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.keyboardMax = 0;
                    object.consumerMax = 0;
                }
                if (message.keyboardMax != null && message.hasOwnProperty("keyboardMax"))
                    object.keyboardMax = message.keyboardMax;
                if (message.consumerMax != null && message.hasOwnProperty("consumerMax"))
                    object.consumerMax = message.consumerMax;
                return object;
            };

            /**
             * Converts this BehaviorParameterHidUsage to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BehaviorParameterHidUsage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BehaviorParameterHidUsage
             * @function getTypeUrl
             * @memberof zmk.behaviors.BehaviorParameterHidUsage
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BehaviorParameterHidUsage.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.BehaviorParameterHidUsage";
            };

            return BehaviorParameterHidUsage;
        })();

        behaviors.BehaviorParameterValueDescription = (function() {

            /**
             * Properties of a BehaviorParameterValueDescription.
             * @typedef {Object} zmk.behaviors.BehaviorParameterValueDescription.$Properties
             * @property {string|null} [name] BehaviorParameterValueDescription name
             * @property {zmk.behaviors.BehaviorParameterNil.$Properties|null} [nil] BehaviorParameterValueDescription nil
             * @property {number|null} [constant] BehaviorParameterValueDescription constant
             * @property {zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties|null} [range] BehaviorParameterValueDescription range
             * @property {zmk.behaviors.BehaviorParameterHidUsage.$Properties|null} [hidUsage] BehaviorParameterValueDescription hidUsage
             * @property {zmk.behaviors.BehaviorParameterLayerId.$Properties|null} [layerId] BehaviorParameterValueDescription layerId
             * @property {"nil"|"constant"|"range"|"hidUsage"|"layerId"} [valueType] BehaviorParameterValueDescription valueType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a BehaviorParameterValueDescription.
             * @memberof zmk.behaviors
             * @interface IBehaviorParameterValueDescription
             * @augments zmk.behaviors.BehaviorParameterValueDescription.$Properties
             * @deprecated Use zmk.behaviors.BehaviorParameterValueDescription.$Properties instead.
             */

            /**
             * Narrowed shape of a BehaviorParameterValueDescription.
             * @typedef {{
             *   name?: string|null;
             *   nil?: zmk.behaviors.BehaviorParameterNil.$Shape|null;
             *   constant?: number|null;
             *   range?: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape|null;
             *   hidUsage?: zmk.behaviors.BehaviorParameterHidUsage.$Shape|null;
             *   layerId?: zmk.behaviors.BehaviorParameterLayerId.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ valueType?: undefined; nil?: null; constant?: null; range?: null; hidUsage?: null; layerId?: null }|{ valueType?: "nil"; nil: zmk.behaviors.BehaviorParameterNil.$Shape; constant?: null; range?: null; hidUsage?: null; layerId?: null }|{ valueType?: "constant"; nil?: null; constant: number; range?: null; hidUsage?: null; layerId?: null }|{ valueType?: "range"; nil?: null; constant?: null; range: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape; hidUsage?: null; layerId?: null }|{ valueType?: "hidUsage"; nil?: null; constant?: null; range?: null; hidUsage: zmk.behaviors.BehaviorParameterHidUsage.$Shape; layerId?: null }|{ valueType?: "layerId"; nil?: null; constant?: null; range?: null; hidUsage?: null; layerId: zmk.behaviors.BehaviorParameterLayerId.$Shape })
             * )} zmk.behaviors.BehaviorParameterValueDescription.$Shape
             */

            /**
             * Constructs a new BehaviorParameterValueDescription.
             * @memberof zmk.behaviors
             * @classdesc Represents a BehaviorParameterValueDescription.
             * @constructor
             * @param {zmk.behaviors.BehaviorParameterValueDescription.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function BehaviorParameterValueDescription(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BehaviorParameterValueDescription name.
             * @member {string} name
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             */
            BehaviorParameterValueDescription.prototype.name = "";

            /**
             * BehaviorParameterValueDescription nil.
             * @member {zmk.behaviors.BehaviorParameterNil.$Properties|null|undefined} nil
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             */
            BehaviorParameterValueDescription.prototype.nil = null;

            /**
             * BehaviorParameterValueDescription constant.
             * @member {number|null|undefined} constant
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             */
            BehaviorParameterValueDescription.prototype.constant = null;

            /**
             * BehaviorParameterValueDescription range.
             * @member {zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties|null|undefined} range
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             */
            BehaviorParameterValueDescription.prototype.range = null;

            /**
             * BehaviorParameterValueDescription hidUsage.
             * @member {zmk.behaviors.BehaviorParameterHidUsage.$Properties|null|undefined} hidUsage
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             */
            BehaviorParameterValueDescription.prototype.hidUsage = null;

            /**
             * BehaviorParameterValueDescription layerId.
             * @member {zmk.behaviors.BehaviorParameterLayerId.$Properties|null|undefined} layerId
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             */
            BehaviorParameterValueDescription.prototype.layerId = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * BehaviorParameterValueDescription valueType.
             * @member {"nil"|"constant"|"range"|"hidUsage"|"layerId"|undefined} valueType
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             */
            Object.defineProperty(BehaviorParameterValueDescription.prototype, "valueType", {
                get: $util.oneOfGetter($oneOfFields = ["nil", "constant", "range", "hidUsage", "layerId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BehaviorParameterValueDescription instance using the specified properties.
             * @function create
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescription.$Properties=} [properties] Properties to set
             * @returns {zmk.behaviors.BehaviorParameterValueDescription} BehaviorParameterValueDescription instance
             * @type {{
             *   (properties: zmk.behaviors.BehaviorParameterValueDescription.$Shape): zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape;
             *   (properties?: zmk.behaviors.BehaviorParameterValueDescription.$Properties): zmk.behaviors.BehaviorParameterValueDescription;
             * }}
             */
            BehaviorParameterValueDescription.create = function create(properties) {
                return new BehaviorParameterValueDescription(properties);
            };

            /**
             * Encodes the specified BehaviorParameterValueDescription message. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescription.verify|verify} messages.
             * @function encode
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescription.$Properties} message BehaviorParameterValueDescription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterValueDescription.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.nil != null && Object.hasOwnProperty.call(message, "nil"))
                    $root.zmk.behaviors.BehaviorParameterNil.encode(message.nil, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.constant != null && Object.hasOwnProperty.call(message, "constant"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.constant);
                if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                    $root.zmk.behaviors.BehaviorParameterValueDescriptionRange.encode(message.range, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.hidUsage != null && Object.hasOwnProperty.call(message, "hidUsage"))
                    $root.zmk.behaviors.BehaviorParameterHidUsage.encode(message.hidUsage, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.layerId != null && Object.hasOwnProperty.call(message, "layerId"))
                    $root.zmk.behaviors.BehaviorParameterLayerId.encode(message.layerId, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BehaviorParameterValueDescription message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescription.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescription.$Properties} message BehaviorParameterValueDescription message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorParameterValueDescription.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a BehaviorParameterValueDescription message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape} BehaviorParameterValueDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterValueDescription.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.behaviors.BehaviorParameterValueDescription(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.nil = $root.zmk.behaviors.BehaviorParameterNil.decode(reader, reader.uint32(), undefined, _depth + 1, message.nil);
                            message.valueType = "nil";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.constant = reader.uint32();
                            message.valueType = "constant";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.range = $root.zmk.behaviors.BehaviorParameterValueDescriptionRange.decode(reader, reader.uint32(), undefined, _depth + 1, message.range);
                            message.valueType = "range";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.hidUsage = $root.zmk.behaviors.BehaviorParameterHidUsage.decode(reader, reader.uint32(), undefined, _depth + 1, message.hidUsage);
                            message.valueType = "hidUsage";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.layerId = $root.zmk.behaviors.BehaviorParameterLayerId.decode(reader, reader.uint32(), undefined, _depth + 1, message.layerId);
                            message.valueType = "layerId";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a BehaviorParameterValueDescription message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape} BehaviorParameterValueDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorParameterValueDescription.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BehaviorParameterValueDescription message.
             * @function verify
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BehaviorParameterValueDescription.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.nil != null && message.hasOwnProperty("nil")) {
                    properties.valueType = 1;
                    {
                        let error = $root.zmk.behaviors.BehaviorParameterNil.verify(message.nil, _depth + 1);
                        if (error)
                            return "nil." + error;
                    }
                }
                if (message.constant != null && message.hasOwnProperty("constant")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    if (!$util.isInteger(message.constant))
                        return "constant: integer expected";
                }
                if (message.range != null && message.hasOwnProperty("range")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    {
                        let error = $root.zmk.behaviors.BehaviorParameterValueDescriptionRange.verify(message.range, _depth + 1);
                        if (error)
                            return "range." + error;
                    }
                }
                if (message.hidUsage != null && message.hasOwnProperty("hidUsage")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    {
                        let error = $root.zmk.behaviors.BehaviorParameterHidUsage.verify(message.hidUsage, _depth + 1);
                        if (error)
                            return "hidUsage." + error;
                    }
                }
                if (message.layerId != null && message.hasOwnProperty("layerId")) {
                    if (properties.valueType === 1)
                        return "valueType: multiple values";
                    properties.valueType = 1;
                    {
                        let error = $root.zmk.behaviors.BehaviorParameterLayerId.verify(message.layerId, _depth + 1);
                        if (error)
                            return "layerId." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BehaviorParameterValueDescription message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.behaviors.BehaviorParameterValueDescription} BehaviorParameterValueDescription
             */
            BehaviorParameterValueDescription.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.behaviors.BehaviorParameterValueDescription)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.behaviors.BehaviorParameterValueDescription();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.nil != null) {
                    if (typeof object.nil !== "object")
                        throw TypeError(".zmk.behaviors.BehaviorParameterValueDescription.nil: object expected");
                    message.nil = $root.zmk.behaviors.BehaviorParameterNil.fromObject(object.nil, _depth + 1);
                }
                if (object.constant != null)
                    message.constant = object.constant >>> 0;
                if (object.range != null) {
                    if (typeof object.range !== "object")
                        throw TypeError(".zmk.behaviors.BehaviorParameterValueDescription.range: object expected");
                    message.range = $root.zmk.behaviors.BehaviorParameterValueDescriptionRange.fromObject(object.range, _depth + 1);
                }
                if (object.hidUsage != null) {
                    if (typeof object.hidUsage !== "object")
                        throw TypeError(".zmk.behaviors.BehaviorParameterValueDescription.hidUsage: object expected");
                    message.hidUsage = $root.zmk.behaviors.BehaviorParameterHidUsage.fromObject(object.hidUsage, _depth + 1);
                }
                if (object.layerId != null) {
                    if (typeof object.layerId !== "object")
                        throw TypeError(".zmk.behaviors.BehaviorParameterValueDescription.layerId: object expected");
                    message.layerId = $root.zmk.behaviors.BehaviorParameterLayerId.fromObject(object.layerId, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a BehaviorParameterValueDescription message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {zmk.behaviors.BehaviorParameterValueDescription} message BehaviorParameterValueDescription
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BehaviorParameterValueDescription.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.nil != null && message.hasOwnProperty("nil")) {
                    object.nil = $root.zmk.behaviors.BehaviorParameterNil.toObject(message.nil, options, _depth + 1);
                    if (options.oneofs)
                        object.valueType = "nil";
                }
                if (message.constant != null && message.hasOwnProperty("constant")) {
                    object.constant = message.constant;
                    if (options.oneofs)
                        object.valueType = "constant";
                }
                if (message.range != null && message.hasOwnProperty("range")) {
                    object.range = $root.zmk.behaviors.BehaviorParameterValueDescriptionRange.toObject(message.range, options, _depth + 1);
                    if (options.oneofs)
                        object.valueType = "range";
                }
                if (message.hidUsage != null && message.hasOwnProperty("hidUsage")) {
                    object.hidUsage = $root.zmk.behaviors.BehaviorParameterHidUsage.toObject(message.hidUsage, options, _depth + 1);
                    if (options.oneofs)
                        object.valueType = "hidUsage";
                }
                if (message.layerId != null && message.hasOwnProperty("layerId")) {
                    object.layerId = $root.zmk.behaviors.BehaviorParameterLayerId.toObject(message.layerId, options, _depth + 1);
                    if (options.oneofs)
                        object.valueType = "layerId";
                }
                return object;
            };

            /**
             * Converts this BehaviorParameterValueDescription to JSON.
             * @function toJSON
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BehaviorParameterValueDescription.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BehaviorParameterValueDescription
             * @function getTypeUrl
             * @memberof zmk.behaviors.BehaviorParameterValueDescription
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BehaviorParameterValueDescription.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.behaviors.BehaviorParameterValueDescription";
            };

            return BehaviorParameterValueDescription;
        })();

        return behaviors;
    })();

    zmk.core = (function() {

        /**
         * Namespace core.
         * @memberof zmk
         * @namespace
         */
        const core = {};

        /**
         * LockState enum.
         * @name zmk.core.LockState
         * @enum {number}
         * @property {number} ZMK_STUDIO_CORE_LOCK_STATE_LOCKED=0 ZMK_STUDIO_CORE_LOCK_STATE_LOCKED value
         * @property {number} ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED=1 ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED value
         */
        core.LockState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ZMK_STUDIO_CORE_LOCK_STATE_LOCKED"] = 0;
            values[valuesById[1] = "ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED"] = 1;
            return values;
        })();

        core.Request = (function() {

            /**
             * Properties of a Request.
             * @typedef {Object} zmk.core.Request.$Properties
             * @property {boolean|null} [getDeviceInfo] Request getDeviceInfo
             * @property {boolean|null} [getLockState] Request getLockState
             * @property {boolean|null} [lock] Request lock
             * @property {boolean|null} [resetSettings] Request resetSettings
             * @property {"getDeviceInfo"|"getLockState"|"lock"|"resetSettings"} [requestType] Request requestType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Request.
             * @memberof zmk.core
             * @interface IRequest
             * @augments zmk.core.Request.$Properties
             * @deprecated Use zmk.core.Request.$Properties instead.
             */

            /**
             * Narrowed shape of a Request.
             * @typedef {{
             *   getDeviceInfo?: boolean|null;
             *   getLockState?: boolean|null;
             *   lock?: boolean|null;
             *   resetSettings?: boolean|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ requestType?: undefined; getDeviceInfo?: null; getLockState?: null; lock?: null; resetSettings?: null }|{ requestType?: "getDeviceInfo"; getDeviceInfo: boolean; getLockState?: null; lock?: null; resetSettings?: null }|{ requestType?: "getLockState"; getDeviceInfo?: null; getLockState: boolean; lock?: null; resetSettings?: null }|{ requestType?: "lock"; getDeviceInfo?: null; getLockState?: null; lock: boolean; resetSettings?: null }|{ requestType?: "resetSettings"; getDeviceInfo?: null; getLockState?: null; lock?: null; resetSettings: boolean })
             * )} zmk.core.Request.$Shape
             */

            /**
             * Constructs a new Request.
             * @memberof zmk.core
             * @classdesc Represents a Request.
             * @constructor
             * @param {zmk.core.Request.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Request(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request getDeviceInfo.
             * @member {boolean|null|undefined} getDeviceInfo
             * @memberof zmk.core.Request
             * @instance
             */
            Request.prototype.getDeviceInfo = null;

            /**
             * Request getLockState.
             * @member {boolean|null|undefined} getLockState
             * @memberof zmk.core.Request
             * @instance
             */
            Request.prototype.getLockState = null;

            /**
             * Request lock.
             * @member {boolean|null|undefined} lock
             * @memberof zmk.core.Request
             * @instance
             */
            Request.prototype.lock = null;

            /**
             * Request resetSettings.
             * @member {boolean|null|undefined} resetSettings
             * @memberof zmk.core.Request
             * @instance
             */
            Request.prototype.resetSettings = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Request requestType.
             * @member {"getDeviceInfo"|"getLockState"|"lock"|"resetSettings"|undefined} requestType
             * @memberof zmk.core.Request
             * @instance
             */
            Object.defineProperty(Request.prototype, "requestType", {
                get: $util.oneOfGetter($oneOfFields = ["getDeviceInfo", "getLockState", "lock", "resetSettings"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof zmk.core.Request
             * @static
             * @param {zmk.core.Request.$Properties=} [properties] Properties to set
             * @returns {zmk.core.Request} Request instance
             * @type {{
             *   (properties: zmk.core.Request.$Shape): zmk.core.Request & zmk.core.Request.$Shape;
             *   (properties?: zmk.core.Request.$Properties): zmk.core.Request;
             * }}
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.core.Request.verify|verify} messages.
             * @function encode
             * @memberof zmk.core.Request
             * @static
             * @param {zmk.core.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.getDeviceInfo != null && Object.hasOwnProperty.call(message, "getDeviceInfo"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.getDeviceInfo);
                if (message.getLockState != null && Object.hasOwnProperty.call(message, "getLockState"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.getLockState);
                if (message.lock != null && Object.hasOwnProperty.call(message, "lock"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.lock);
                if (message.resetSettings != null && Object.hasOwnProperty.call(message, "resetSettings"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.resetSettings);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.core.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.core.Request
             * @static
             * @param {zmk.core.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.core.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.core.Request & zmk.core.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.core.Request();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.getDeviceInfo = reader.bool();
                            message.requestType = "getDeviceInfo";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.getLockState = reader.bool();
                            message.requestType = "getLockState";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.lock = reader.bool();
                            message.requestType = "lock";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.resetSettings = reader.bool();
                            message.requestType = "resetSettings";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.core.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.core.Request & zmk.core.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Request message.
             * @function verify
             * @memberof zmk.core.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.getDeviceInfo != null && message.hasOwnProperty("getDeviceInfo")) {
                    properties.requestType = 1;
                    if (typeof message.getDeviceInfo !== "boolean")
                        return "getDeviceInfo: boolean expected";
                }
                if (message.getLockState != null && message.hasOwnProperty("getLockState")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (typeof message.getLockState !== "boolean")
                        return "getLockState: boolean expected";
                }
                if (message.lock != null && message.hasOwnProperty("lock")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (typeof message.lock !== "boolean")
                        return "lock: boolean expected";
                }
                if (message.resetSettings != null && message.hasOwnProperty("resetSettings")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (typeof message.resetSettings !== "boolean")
                        return "resetSettings: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.core.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.core.Request} Request
             */
            Request.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.core.Request)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.core.Request();
                if (object.getDeviceInfo != null)
                    message.getDeviceInfo = Boolean(object.getDeviceInfo);
                if (object.getLockState != null)
                    message.getLockState = Boolean(object.getLockState);
                if (object.lock != null)
                    message.lock = Boolean(object.lock);
                if (object.resetSettings != null)
                    message.resetSettings = Boolean(object.resetSettings);
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.core.Request
             * @static
             * @param {zmk.core.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.getDeviceInfo != null && message.hasOwnProperty("getDeviceInfo")) {
                    object.getDeviceInfo = message.getDeviceInfo;
                    if (options.oneofs)
                        object.requestType = "getDeviceInfo";
                }
                if (message.getLockState != null && message.hasOwnProperty("getLockState")) {
                    object.getLockState = message.getLockState;
                    if (options.oneofs)
                        object.requestType = "getLockState";
                }
                if (message.lock != null && message.hasOwnProperty("lock")) {
                    object.lock = message.lock;
                    if (options.oneofs)
                        object.requestType = "lock";
                }
                if (message.resetSettings != null && message.hasOwnProperty("resetSettings")) {
                    object.resetSettings = message.resetSettings;
                    if (options.oneofs)
                        object.requestType = "resetSettings";
                }
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof zmk.core.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Request
             * @function getTypeUrl
             * @memberof zmk.core.Request
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Request.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.core.Request";
            };

            return Request;
        })();

        core.Response = (function() {

            /**
             * Properties of a Response.
             * @typedef {Object} zmk.core.Response.$Properties
             * @property {zmk.core.GetDeviceInfoResponse.$Properties|null} [getDeviceInfo] Response getDeviceInfo
             * @property {zmk.core.LockState|null} [getLockState] Response getLockState
             * @property {boolean|null} [resetSettings] Response resetSettings
             * @property {"getDeviceInfo"|"getLockState"|"resetSettings"} [responseType] Response responseType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Response.
             * @memberof zmk.core
             * @interface IResponse
             * @augments zmk.core.Response.$Properties
             * @deprecated Use zmk.core.Response.$Properties instead.
             */

            /**
             * Narrowed shape of a Response.
             * @typedef {{
             *   getDeviceInfo?: zmk.core.GetDeviceInfoResponse.$Shape|null;
             *   getLockState?: zmk.core.LockState|null;
             *   resetSettings?: boolean|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ responseType?: undefined; getDeviceInfo?: null; getLockState?: null; resetSettings?: null }|{ responseType?: "getDeviceInfo"; getDeviceInfo: zmk.core.GetDeviceInfoResponse.$Shape; getLockState?: null; resetSettings?: null }|{ responseType?: "getLockState"; getDeviceInfo?: null; getLockState: zmk.core.LockState; resetSettings?: null }|{ responseType?: "resetSettings"; getDeviceInfo?: null; getLockState?: null; resetSettings: boolean })
             * )} zmk.core.Response.$Shape
             */

            /**
             * Constructs a new Response.
             * @memberof zmk.core
             * @classdesc Represents a Response.
             * @constructor
             * @param {zmk.core.Response.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Response(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response getDeviceInfo.
             * @member {zmk.core.GetDeviceInfoResponse.$Properties|null|undefined} getDeviceInfo
             * @memberof zmk.core.Response
             * @instance
             */
            Response.prototype.getDeviceInfo = null;

            /**
             * Response getLockState.
             * @member {zmk.core.LockState|null|undefined} getLockState
             * @memberof zmk.core.Response
             * @instance
             */
            Response.prototype.getLockState = null;

            /**
             * Response resetSettings.
             * @member {boolean|null|undefined} resetSettings
             * @memberof zmk.core.Response
             * @instance
             */
            Response.prototype.resetSettings = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Response responseType.
             * @member {"getDeviceInfo"|"getLockState"|"resetSettings"|undefined} responseType
             * @memberof zmk.core.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "responseType", {
                get: $util.oneOfGetter($oneOfFields = ["getDeviceInfo", "getLockState", "resetSettings"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof zmk.core.Response
             * @static
             * @param {zmk.core.Response.$Properties=} [properties] Properties to set
             * @returns {zmk.core.Response} Response instance
             * @type {{
             *   (properties: zmk.core.Response.$Shape): zmk.core.Response & zmk.core.Response.$Shape;
             *   (properties?: zmk.core.Response.$Properties): zmk.core.Response;
             * }}
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.core.Response.verify|verify} messages.
             * @function encode
             * @memberof zmk.core.Response
             * @static
             * @param {zmk.core.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.getDeviceInfo != null && Object.hasOwnProperty.call(message, "getDeviceInfo"))
                    $root.zmk.core.GetDeviceInfoResponse.encode(message.getDeviceInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.getLockState != null && Object.hasOwnProperty.call(message, "getLockState"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.getLockState);
                if (message.resetSettings != null && Object.hasOwnProperty.call(message, "resetSettings"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.resetSettings);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.core.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.core.Response
             * @static
             * @param {zmk.core.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.core.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.core.Response & zmk.core.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.core.Response();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.getDeviceInfo = $root.zmk.core.GetDeviceInfoResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.getDeviceInfo);
                            message.responseType = "getDeviceInfo";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.getLockState = reader.int32();
                            message.responseType = "getLockState";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.resetSettings = reader.bool();
                            message.responseType = "resetSettings";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.core.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.core.Response & zmk.core.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Response message.
             * @function verify
             * @memberof zmk.core.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.getDeviceInfo != null && message.hasOwnProperty("getDeviceInfo")) {
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.core.GetDeviceInfoResponse.verify(message.getDeviceInfo, _depth + 1);
                        if (error)
                            return "getDeviceInfo." + error;
                    }
                }
                if (message.getLockState != null && message.hasOwnProperty("getLockState")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    switch (message.getLockState) {
                    default:
                        return "getLockState: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                }
                if (message.resetSettings != null && message.hasOwnProperty("resetSettings")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    if (typeof message.resetSettings !== "boolean")
                        return "resetSettings: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.core.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.core.Response} Response
             */
            Response.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.core.Response)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.core.Response();
                if (object.getDeviceInfo != null) {
                    if (typeof object.getDeviceInfo !== "object")
                        throw TypeError(".zmk.core.Response.getDeviceInfo: object expected");
                    message.getDeviceInfo = $root.zmk.core.GetDeviceInfoResponse.fromObject(object.getDeviceInfo, _depth + 1);
                }
                switch (object.getLockState) {
                default:
                    if (typeof object.getLockState === "number") {
                        message.getLockState = object.getLockState;
                        break;
                    }
                    break;
                case "ZMK_STUDIO_CORE_LOCK_STATE_LOCKED":
                case 0:
                    message.getLockState = 0;
                    break;
                case "ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED":
                case 1:
                    message.getLockState = 1;
                    break;
                }
                if (object.resetSettings != null)
                    message.resetSettings = Boolean(object.resetSettings);
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.core.Response
             * @static
             * @param {zmk.core.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.getDeviceInfo != null && message.hasOwnProperty("getDeviceInfo")) {
                    object.getDeviceInfo = $root.zmk.core.GetDeviceInfoResponse.toObject(message.getDeviceInfo, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "getDeviceInfo";
                }
                if (message.getLockState != null && message.hasOwnProperty("getLockState")) {
                    object.getLockState = options.enums === String ? $root.zmk.core.LockState[message.getLockState] === undefined ? message.getLockState : $root.zmk.core.LockState[message.getLockState] : message.getLockState;
                    if (options.oneofs)
                        object.responseType = "getLockState";
                }
                if (message.resetSettings != null && message.hasOwnProperty("resetSettings")) {
                    object.resetSettings = message.resetSettings;
                    if (options.oneofs)
                        object.responseType = "resetSettings";
                }
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof zmk.core.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Response
             * @function getTypeUrl
             * @memberof zmk.core.Response
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Response.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.core.Response";
            };

            return Response;
        })();

        core.GetDeviceInfoResponse = (function() {

            /**
             * Properties of a GetDeviceInfoResponse.
             * @typedef {Object} zmk.core.GetDeviceInfoResponse.$Properties
             * @property {string|null} [name] GetDeviceInfoResponse name
             * @property {Uint8Array|null} [serialNumber] GetDeviceInfoResponse serialNumber
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a GetDeviceInfoResponse.
             * @memberof zmk.core
             * @interface IGetDeviceInfoResponse
             * @augments zmk.core.GetDeviceInfoResponse.$Properties
             * @deprecated Use zmk.core.GetDeviceInfoResponse.$Properties instead.
             */

            /**
             * Shape of a GetDeviceInfoResponse.
             * @typedef {zmk.core.GetDeviceInfoResponse.$Properties} zmk.core.GetDeviceInfoResponse.$Shape
             */

            /**
             * Constructs a new GetDeviceInfoResponse.
             * @memberof zmk.core
             * @classdesc Represents a GetDeviceInfoResponse.
             * @constructor
             * @param {zmk.core.GetDeviceInfoResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function GetDeviceInfoResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetDeviceInfoResponse name.
             * @member {string} name
             * @memberof zmk.core.GetDeviceInfoResponse
             * @instance
             */
            GetDeviceInfoResponse.prototype.name = "";

            /**
             * GetDeviceInfoResponse serialNumber.
             * @member {Uint8Array} serialNumber
             * @memberof zmk.core.GetDeviceInfoResponse
             * @instance
             */
            GetDeviceInfoResponse.prototype.serialNumber = $util.newBuffer([]);

            /**
             * Creates a new GetDeviceInfoResponse instance using the specified properties.
             * @function create
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {zmk.core.GetDeviceInfoResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.core.GetDeviceInfoResponse} GetDeviceInfoResponse instance
             * @type {{
             *   (properties: zmk.core.GetDeviceInfoResponse.$Shape): zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape;
             *   (properties?: zmk.core.GetDeviceInfoResponse.$Properties): zmk.core.GetDeviceInfoResponse;
             * }}
             */
            GetDeviceInfoResponse.create = function create(properties) {
                return new GetDeviceInfoResponse(properties);
            };

            /**
             * Encodes the specified GetDeviceInfoResponse message. Does not implicitly {@link zmk.core.GetDeviceInfoResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {zmk.core.GetDeviceInfoResponse.$Properties} message GetDeviceInfoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetDeviceInfoResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.serialNumber);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified GetDeviceInfoResponse message, length delimited. Does not implicitly {@link zmk.core.GetDeviceInfoResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {zmk.core.GetDeviceInfoResponse.$Properties} message GetDeviceInfoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetDeviceInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a GetDeviceInfoResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape} GetDeviceInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetDeviceInfoResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.core.GetDeviceInfoResponse(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.bytes()).length)
                                message.serialNumber = value;
                            else
                                delete message.serialNumber;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a GetDeviceInfoResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape} GetDeviceInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetDeviceInfoResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetDeviceInfoResponse message.
             * @function verify
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetDeviceInfoResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                    if (!(message.serialNumber && typeof message.serialNumber.length === "number" || $util.isString(message.serialNumber)))
                        return "serialNumber: buffer expected";
                return null;
            };

            /**
             * Creates a GetDeviceInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.core.GetDeviceInfoResponse} GetDeviceInfoResponse
             */
            GetDeviceInfoResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.core.GetDeviceInfoResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.core.GetDeviceInfoResponse();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.serialNumber != null)
                    if (object.serialNumber.length)
                        if (typeof object.serialNumber === "string")
                            $util.base64.decode(object.serialNumber, message.serialNumber = $util.newBuffer($util.base64.length(object.serialNumber)), 0);
                        else if (object.serialNumber.length >= 0)
                            message.serialNumber = object.serialNumber;
                return message;
            };

            /**
             * Creates a plain object from a GetDeviceInfoResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {zmk.core.GetDeviceInfoResponse} message GetDeviceInfoResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetDeviceInfoResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    if (options.bytes === String)
                        object.serialNumber = "";
                    else {
                        object.serialNumber = [];
                        if (options.bytes !== Array)
                            object.serialNumber = $util.newBuffer(object.serialNumber);
                    }
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                    object.serialNumber = options.bytes === String ? $util.base64.encode(message.serialNumber, 0, message.serialNumber.length) : options.bytes === Array ? Array.prototype.slice.call(message.serialNumber) : message.serialNumber;
                return object;
            };

            /**
             * Converts this GetDeviceInfoResponse to JSON.
             * @function toJSON
             * @memberof zmk.core.GetDeviceInfoResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetDeviceInfoResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for GetDeviceInfoResponse
             * @function getTypeUrl
             * @memberof zmk.core.GetDeviceInfoResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            GetDeviceInfoResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.core.GetDeviceInfoResponse";
            };

            return GetDeviceInfoResponse;
        })();

        core.Notification = (function() {

            /**
             * Properties of a Notification.
             * @typedef {Object} zmk.core.Notification.$Properties
             * @property {zmk.core.LockState|null} [lockStateChanged] Notification lockStateChanged
             * @property {"lockStateChanged"} [notificationType] Notification notificationType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Notification.
             * @memberof zmk.core
             * @interface INotification
             * @augments zmk.core.Notification.$Properties
             * @deprecated Use zmk.core.Notification.$Properties instead.
             */

            /**
             * Narrowed shape of a Notification.
             * @typedef {{
             *   lockStateChanged?: zmk.core.LockState|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ notificationType?: undefined; lockStateChanged?: null }|{ notificationType?: "lockStateChanged"; lockStateChanged: zmk.core.LockState })
             * )} zmk.core.Notification.$Shape
             */

            /**
             * Constructs a new Notification.
             * @memberof zmk.core
             * @classdesc Represents a Notification.
             * @constructor
             * @param {zmk.core.Notification.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Notification(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Notification lockStateChanged.
             * @member {zmk.core.LockState|null|undefined} lockStateChanged
             * @memberof zmk.core.Notification
             * @instance
             */
            Notification.prototype.lockStateChanged = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Notification notificationType.
             * @member {"lockStateChanged"|undefined} notificationType
             * @memberof zmk.core.Notification
             * @instance
             */
            Object.defineProperty(Notification.prototype, "notificationType", {
                get: $util.oneOfGetter($oneOfFields = ["lockStateChanged"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Notification instance using the specified properties.
             * @function create
             * @memberof zmk.core.Notification
             * @static
             * @param {zmk.core.Notification.$Properties=} [properties] Properties to set
             * @returns {zmk.core.Notification} Notification instance
             * @type {{
             *   (properties: zmk.core.Notification.$Shape): zmk.core.Notification & zmk.core.Notification.$Shape;
             *   (properties?: zmk.core.Notification.$Properties): zmk.core.Notification;
             * }}
             */
            Notification.create = function create(properties) {
                return new Notification(properties);
            };

            /**
             * Encodes the specified Notification message. Does not implicitly {@link zmk.core.Notification.verify|verify} messages.
             * @function encode
             * @memberof zmk.core.Notification
             * @static
             * @param {zmk.core.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.lockStateChanged != null && Object.hasOwnProperty.call(message, "lockStateChanged"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lockStateChanged);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link zmk.core.Notification.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.core.Notification
             * @static
             * @param {zmk.core.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.core.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.core.Notification & zmk.core.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.core.Notification();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.lockStateChanged = reader.int32();
                            message.notificationType = "lockStateChanged";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.core.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.core.Notification & zmk.core.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Notification message.
             * @function verify
             * @memberof zmk.core.Notification
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Notification.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.lockStateChanged != null && message.hasOwnProperty("lockStateChanged")) {
                    properties.notificationType = 1;
                    switch (message.lockStateChanged) {
                    default:
                        return "lockStateChanged: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.core.Notification
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.core.Notification} Notification
             */
            Notification.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.core.Notification)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.core.Notification();
                switch (object.lockStateChanged) {
                default:
                    if (typeof object.lockStateChanged === "number") {
                        message.lockStateChanged = object.lockStateChanged;
                        break;
                    }
                    break;
                case "ZMK_STUDIO_CORE_LOCK_STATE_LOCKED":
                case 0:
                    message.lockStateChanged = 0;
                    break;
                case "ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED":
                case 1:
                    message.lockStateChanged = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.core.Notification
             * @static
             * @param {zmk.core.Notification} message Notification
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Notification.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.lockStateChanged != null && message.hasOwnProperty("lockStateChanged")) {
                    object.lockStateChanged = options.enums === String ? $root.zmk.core.LockState[message.lockStateChanged] === undefined ? message.lockStateChanged : $root.zmk.core.LockState[message.lockStateChanged] : message.lockStateChanged;
                    if (options.oneofs)
                        object.notificationType = "lockStateChanged";
                }
                return object;
            };

            /**
             * Converts this Notification to JSON.
             * @function toJSON
             * @memberof zmk.core.Notification
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Notification.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Notification
             * @function getTypeUrl
             * @memberof zmk.core.Notification
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Notification.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.core.Notification";
            };

            return Notification;
        })();

        return core;
    })();

    zmk.keymap = (function() {

        /**
         * Namespace keymap.
         * @memberof zmk
         * @namespace
         */
        const keymap = {};

        keymap.Request = (function() {

            /**
             * Properties of a Request.
             * @typedef {Object} zmk.keymap.Request.$Properties
             * @property {boolean|null} [getKeymap] Request getKeymap
             * @property {zmk.keymap.SetLayerBindingRequest.$Properties|null} [setLayerBinding] Request setLayerBinding
             * @property {boolean|null} [checkUnsavedChanges] Request checkUnsavedChanges
             * @property {boolean|null} [saveChanges] Request saveChanges
             * @property {boolean|null} [discardChanges] Request discardChanges
             * @property {boolean|null} [getPhysicalLayouts] Request getPhysicalLayouts
             * @property {number|null} [setActivePhysicalLayout] Request setActivePhysicalLayout
             * @property {zmk.keymap.MoveLayerRequest.$Properties|null} [moveLayer] Request moveLayer
             * @property {zmk.keymap.AddLayerRequest.$Properties|null} [addLayer] Request addLayer
             * @property {zmk.keymap.RemoveLayerRequest.$Properties|null} [removeLayer] Request removeLayer
             * @property {zmk.keymap.RestoreLayerRequest.$Properties|null} [restoreLayer] Request restoreLayer
             * @property {zmk.keymap.SetLayerPropsRequest.$Properties|null} [setLayerProps] Request setLayerProps
             * @property {"getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps"} [requestType] Request requestType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Request.
             * @memberof zmk.keymap
             * @interface IRequest
             * @augments zmk.keymap.Request.$Properties
             * @deprecated Use zmk.keymap.Request.$Properties instead.
             */

            /**
             * Narrowed shape of a Request.
             * @typedef {{
             *   getKeymap?: boolean|null;
             *   setLayerBinding?: zmk.keymap.SetLayerBindingRequest.$Shape|null;
             *   checkUnsavedChanges?: boolean|null;
             *   saveChanges?: boolean|null;
             *   discardChanges?: boolean|null;
             *   getPhysicalLayouts?: boolean|null;
             *   setActivePhysicalLayout?: number|null;
             *   moveLayer?: zmk.keymap.MoveLayerRequest.$Shape|null;
             *   addLayer?: zmk.keymap.AddLayerRequest.$Shape|null;
             *   removeLayer?: zmk.keymap.RemoveLayerRequest.$Shape|null;
             *   restoreLayer?: zmk.keymap.RestoreLayerRequest.$Shape|null;
             *   setLayerProps?: zmk.keymap.SetLayerPropsRequest.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ requestType?: undefined; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "getKeymap"; getKeymap: boolean; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "setLayerBinding"; getKeymap?: null; setLayerBinding: zmk.keymap.SetLayerBindingRequest.$Shape; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "checkUnsavedChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges: boolean; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "saveChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges: boolean; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "discardChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges: boolean; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "getPhysicalLayouts"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts: boolean; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "setActivePhysicalLayout"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout: number; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "moveLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer: zmk.keymap.MoveLayerRequest.$Shape; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "addLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer: zmk.keymap.AddLayerRequest.$Shape; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "removeLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer: zmk.keymap.RemoveLayerRequest.$Shape; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "restoreLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer: zmk.keymap.RestoreLayerRequest.$Shape; setLayerProps?: null }|{ requestType?: "setLayerProps"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps: zmk.keymap.SetLayerPropsRequest.$Shape })
             * )} zmk.keymap.Request.$Shape
             */

            /**
             * Constructs a new Request.
             * @memberof zmk.keymap
             * @classdesc Represents a Request.
             * @constructor
             * @param {zmk.keymap.Request.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Request(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request getKeymap.
             * @member {boolean|null|undefined} getKeymap
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.getKeymap = null;

            /**
             * Request setLayerBinding.
             * @member {zmk.keymap.SetLayerBindingRequest.$Properties|null|undefined} setLayerBinding
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.setLayerBinding = null;

            /**
             * Request checkUnsavedChanges.
             * @member {boolean|null|undefined} checkUnsavedChanges
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.checkUnsavedChanges = null;

            /**
             * Request saveChanges.
             * @member {boolean|null|undefined} saveChanges
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.saveChanges = null;

            /**
             * Request discardChanges.
             * @member {boolean|null|undefined} discardChanges
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.discardChanges = null;

            /**
             * Request getPhysicalLayouts.
             * @member {boolean|null|undefined} getPhysicalLayouts
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.getPhysicalLayouts = null;

            /**
             * Request setActivePhysicalLayout.
             * @member {number|null|undefined} setActivePhysicalLayout
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.setActivePhysicalLayout = null;

            /**
             * Request moveLayer.
             * @member {zmk.keymap.MoveLayerRequest.$Properties|null|undefined} moveLayer
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.moveLayer = null;

            /**
             * Request addLayer.
             * @member {zmk.keymap.AddLayerRequest.$Properties|null|undefined} addLayer
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.addLayer = null;

            /**
             * Request removeLayer.
             * @member {zmk.keymap.RemoveLayerRequest.$Properties|null|undefined} removeLayer
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.removeLayer = null;

            /**
             * Request restoreLayer.
             * @member {zmk.keymap.RestoreLayerRequest.$Properties|null|undefined} restoreLayer
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.restoreLayer = null;

            /**
             * Request setLayerProps.
             * @member {zmk.keymap.SetLayerPropsRequest.$Properties|null|undefined} setLayerProps
             * @memberof zmk.keymap.Request
             * @instance
             */
            Request.prototype.setLayerProps = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Request requestType.
             * @member {"getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps"|undefined} requestType
             * @memberof zmk.keymap.Request
             * @instance
             */
            Object.defineProperty(Request.prototype, "requestType", {
                get: $util.oneOfGetter($oneOfFields = ["getKeymap", "setLayerBinding", "checkUnsavedChanges", "saveChanges", "discardChanges", "getPhysicalLayouts", "setActivePhysicalLayout", "moveLayer", "addLayer", "removeLayer", "restoreLayer", "setLayerProps"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.Request
             * @static
             * @param {zmk.keymap.Request.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.Request} Request instance
             * @type {{
             *   (properties: zmk.keymap.Request.$Shape): zmk.keymap.Request & zmk.keymap.Request.$Shape;
             *   (properties?: zmk.keymap.Request.$Properties): zmk.keymap.Request;
             * }}
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.keymap.Request.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.Request
             * @static
             * @param {zmk.keymap.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.getKeymap != null && Object.hasOwnProperty.call(message, "getKeymap"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.getKeymap);
                if (message.setLayerBinding != null && Object.hasOwnProperty.call(message, "setLayerBinding"))
                    $root.zmk.keymap.SetLayerBindingRequest.encode(message.setLayerBinding, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.checkUnsavedChanges != null && Object.hasOwnProperty.call(message, "checkUnsavedChanges"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.checkUnsavedChanges);
                if (message.saveChanges != null && Object.hasOwnProperty.call(message, "saveChanges"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.saveChanges);
                if (message.discardChanges != null && Object.hasOwnProperty.call(message, "discardChanges"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.discardChanges);
                if (message.getPhysicalLayouts != null && Object.hasOwnProperty.call(message, "getPhysicalLayouts"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.getPhysicalLayouts);
                if (message.setActivePhysicalLayout != null && Object.hasOwnProperty.call(message, "setActivePhysicalLayout"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.setActivePhysicalLayout);
                if (message.moveLayer != null && Object.hasOwnProperty.call(message, "moveLayer"))
                    $root.zmk.keymap.MoveLayerRequest.encode(message.moveLayer, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.addLayer != null && Object.hasOwnProperty.call(message, "addLayer"))
                    $root.zmk.keymap.AddLayerRequest.encode(message.addLayer, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                if (message.removeLayer != null && Object.hasOwnProperty.call(message, "removeLayer"))
                    $root.zmk.keymap.RemoveLayerRequest.encode(message.removeLayer, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
                if (message.restoreLayer != null && Object.hasOwnProperty.call(message, "restoreLayer"))
                    $root.zmk.keymap.RestoreLayerRequest.encode(message.restoreLayer, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                if (message.setLayerProps != null && Object.hasOwnProperty.call(message, "setLayerProps"))
                    $root.zmk.keymap.SetLayerPropsRequest.encode(message.setLayerProps, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.keymap.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.Request
             * @static
             * @param {zmk.keymap.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.Request & zmk.keymap.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.Request();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.getKeymap = reader.bool();
                            message.requestType = "getKeymap";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.setLayerBinding = $root.zmk.keymap.SetLayerBindingRequest.decode(reader, reader.uint32(), undefined, _depth + 1, message.setLayerBinding);
                            message.requestType = "setLayerBinding";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.checkUnsavedChanges = reader.bool();
                            message.requestType = "checkUnsavedChanges";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.saveChanges = reader.bool();
                            message.requestType = "saveChanges";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.discardChanges = reader.bool();
                            message.requestType = "discardChanges";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.getPhysicalLayouts = reader.bool();
                            message.requestType = "getPhysicalLayouts";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            message.setActivePhysicalLayout = reader.uint32();
                            message.requestType = "setActivePhysicalLayout";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.moveLayer = $root.zmk.keymap.MoveLayerRequest.decode(reader, reader.uint32(), undefined, _depth + 1, message.moveLayer);
                            message.requestType = "moveLayer";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.addLayer = $root.zmk.keymap.AddLayerRequest.decode(reader, reader.uint32(), undefined, _depth + 1, message.addLayer);
                            message.requestType = "addLayer";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.removeLayer = $root.zmk.keymap.RemoveLayerRequest.decode(reader, reader.uint32(), undefined, _depth + 1, message.removeLayer);
                            message.requestType = "removeLayer";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.restoreLayer = $root.zmk.keymap.RestoreLayerRequest.decode(reader, reader.uint32(), undefined, _depth + 1, message.restoreLayer);
                            message.requestType = "restoreLayer";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.setLayerProps = $root.zmk.keymap.SetLayerPropsRequest.decode(reader, reader.uint32(), undefined, _depth + 1, message.setLayerProps);
                            message.requestType = "setLayerProps";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.Request & zmk.keymap.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Request message.
             * @function verify
             * @memberof zmk.keymap.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.getKeymap != null && message.hasOwnProperty("getKeymap")) {
                    properties.requestType = 1;
                    if (typeof message.getKeymap !== "boolean")
                        return "getKeymap: boolean expected";
                }
                if (message.setLayerBinding != null && message.hasOwnProperty("setLayerBinding")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    {
                        let error = $root.zmk.keymap.SetLayerBindingRequest.verify(message.setLayerBinding, _depth + 1);
                        if (error)
                            return "setLayerBinding." + error;
                    }
                }
                if (message.checkUnsavedChanges != null && message.hasOwnProperty("checkUnsavedChanges")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (typeof message.checkUnsavedChanges !== "boolean")
                        return "checkUnsavedChanges: boolean expected";
                }
                if (message.saveChanges != null && message.hasOwnProperty("saveChanges")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (typeof message.saveChanges !== "boolean")
                        return "saveChanges: boolean expected";
                }
                if (message.discardChanges != null && message.hasOwnProperty("discardChanges")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (typeof message.discardChanges !== "boolean")
                        return "discardChanges: boolean expected";
                }
                if (message.getPhysicalLayouts != null && message.hasOwnProperty("getPhysicalLayouts")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (typeof message.getPhysicalLayouts !== "boolean")
                        return "getPhysicalLayouts: boolean expected";
                }
                if (message.setActivePhysicalLayout != null && message.hasOwnProperty("setActivePhysicalLayout")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    if (!$util.isInteger(message.setActivePhysicalLayout))
                        return "setActivePhysicalLayout: integer expected";
                }
                if (message.moveLayer != null && message.hasOwnProperty("moveLayer")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    {
                        let error = $root.zmk.keymap.MoveLayerRequest.verify(message.moveLayer, _depth + 1);
                        if (error)
                            return "moveLayer." + error;
                    }
                }
                if (message.addLayer != null && message.hasOwnProperty("addLayer")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    {
                        let error = $root.zmk.keymap.AddLayerRequest.verify(message.addLayer, _depth + 1);
                        if (error)
                            return "addLayer." + error;
                    }
                }
                if (message.removeLayer != null && message.hasOwnProperty("removeLayer")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    {
                        let error = $root.zmk.keymap.RemoveLayerRequest.verify(message.removeLayer, _depth + 1);
                        if (error)
                            return "removeLayer." + error;
                    }
                }
                if (message.restoreLayer != null && message.hasOwnProperty("restoreLayer")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    {
                        let error = $root.zmk.keymap.RestoreLayerRequest.verify(message.restoreLayer, _depth + 1);
                        if (error)
                            return "restoreLayer." + error;
                    }
                }
                if (message.setLayerProps != null && message.hasOwnProperty("setLayerProps")) {
                    if (properties.requestType === 1)
                        return "requestType: multiple values";
                    properties.requestType = 1;
                    {
                        let error = $root.zmk.keymap.SetLayerPropsRequest.verify(message.setLayerProps, _depth + 1);
                        if (error)
                            return "setLayerProps." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.Request} Request
             */
            Request.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.Request)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.Request();
                if (object.getKeymap != null)
                    message.getKeymap = Boolean(object.getKeymap);
                if (object.setLayerBinding != null) {
                    if (typeof object.setLayerBinding !== "object")
                        throw TypeError(".zmk.keymap.Request.setLayerBinding: object expected");
                    message.setLayerBinding = $root.zmk.keymap.SetLayerBindingRequest.fromObject(object.setLayerBinding, _depth + 1);
                }
                if (object.checkUnsavedChanges != null)
                    message.checkUnsavedChanges = Boolean(object.checkUnsavedChanges);
                if (object.saveChanges != null)
                    message.saveChanges = Boolean(object.saveChanges);
                if (object.discardChanges != null)
                    message.discardChanges = Boolean(object.discardChanges);
                if (object.getPhysicalLayouts != null)
                    message.getPhysicalLayouts = Boolean(object.getPhysicalLayouts);
                if (object.setActivePhysicalLayout != null)
                    message.setActivePhysicalLayout = object.setActivePhysicalLayout >>> 0;
                if (object.moveLayer != null) {
                    if (typeof object.moveLayer !== "object")
                        throw TypeError(".zmk.keymap.Request.moveLayer: object expected");
                    message.moveLayer = $root.zmk.keymap.MoveLayerRequest.fromObject(object.moveLayer, _depth + 1);
                }
                if (object.addLayer != null) {
                    if (typeof object.addLayer !== "object")
                        throw TypeError(".zmk.keymap.Request.addLayer: object expected");
                    message.addLayer = $root.zmk.keymap.AddLayerRequest.fromObject(object.addLayer, _depth + 1);
                }
                if (object.removeLayer != null) {
                    if (typeof object.removeLayer !== "object")
                        throw TypeError(".zmk.keymap.Request.removeLayer: object expected");
                    message.removeLayer = $root.zmk.keymap.RemoveLayerRequest.fromObject(object.removeLayer, _depth + 1);
                }
                if (object.restoreLayer != null) {
                    if (typeof object.restoreLayer !== "object")
                        throw TypeError(".zmk.keymap.Request.restoreLayer: object expected");
                    message.restoreLayer = $root.zmk.keymap.RestoreLayerRequest.fromObject(object.restoreLayer, _depth + 1);
                }
                if (object.setLayerProps != null) {
                    if (typeof object.setLayerProps !== "object")
                        throw TypeError(".zmk.keymap.Request.setLayerProps: object expected");
                    message.setLayerProps = $root.zmk.keymap.SetLayerPropsRequest.fromObject(object.setLayerProps, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.Request
             * @static
             * @param {zmk.keymap.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.getKeymap != null && message.hasOwnProperty("getKeymap")) {
                    object.getKeymap = message.getKeymap;
                    if (options.oneofs)
                        object.requestType = "getKeymap";
                }
                if (message.setLayerBinding != null && message.hasOwnProperty("setLayerBinding")) {
                    object.setLayerBinding = $root.zmk.keymap.SetLayerBindingRequest.toObject(message.setLayerBinding, options, _depth + 1);
                    if (options.oneofs)
                        object.requestType = "setLayerBinding";
                }
                if (message.checkUnsavedChanges != null && message.hasOwnProperty("checkUnsavedChanges")) {
                    object.checkUnsavedChanges = message.checkUnsavedChanges;
                    if (options.oneofs)
                        object.requestType = "checkUnsavedChanges";
                }
                if (message.saveChanges != null && message.hasOwnProperty("saveChanges")) {
                    object.saveChanges = message.saveChanges;
                    if (options.oneofs)
                        object.requestType = "saveChanges";
                }
                if (message.discardChanges != null && message.hasOwnProperty("discardChanges")) {
                    object.discardChanges = message.discardChanges;
                    if (options.oneofs)
                        object.requestType = "discardChanges";
                }
                if (message.getPhysicalLayouts != null && message.hasOwnProperty("getPhysicalLayouts")) {
                    object.getPhysicalLayouts = message.getPhysicalLayouts;
                    if (options.oneofs)
                        object.requestType = "getPhysicalLayouts";
                }
                if (message.setActivePhysicalLayout != null && message.hasOwnProperty("setActivePhysicalLayout")) {
                    object.setActivePhysicalLayout = message.setActivePhysicalLayout;
                    if (options.oneofs)
                        object.requestType = "setActivePhysicalLayout";
                }
                if (message.moveLayer != null && message.hasOwnProperty("moveLayer")) {
                    object.moveLayer = $root.zmk.keymap.MoveLayerRequest.toObject(message.moveLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.requestType = "moveLayer";
                }
                if (message.addLayer != null && message.hasOwnProperty("addLayer")) {
                    object.addLayer = $root.zmk.keymap.AddLayerRequest.toObject(message.addLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.requestType = "addLayer";
                }
                if (message.removeLayer != null && message.hasOwnProperty("removeLayer")) {
                    object.removeLayer = $root.zmk.keymap.RemoveLayerRequest.toObject(message.removeLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.requestType = "removeLayer";
                }
                if (message.restoreLayer != null && message.hasOwnProperty("restoreLayer")) {
                    object.restoreLayer = $root.zmk.keymap.RestoreLayerRequest.toObject(message.restoreLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.requestType = "restoreLayer";
                }
                if (message.setLayerProps != null && message.hasOwnProperty("setLayerProps")) {
                    object.setLayerProps = $root.zmk.keymap.SetLayerPropsRequest.toObject(message.setLayerProps, options, _depth + 1);
                    if (options.oneofs)
                        object.requestType = "setLayerProps";
                }
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof zmk.keymap.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Request
             * @function getTypeUrl
             * @memberof zmk.keymap.Request
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Request.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.Request";
            };

            return Request;
        })();

        keymap.Response = (function() {

            /**
             * Properties of a Response.
             * @typedef {Object} zmk.keymap.Response.$Properties
             * @property {zmk.keymap.Keymap.$Properties|null} [getKeymap] Response getKeymap
             * @property {zmk.keymap.SetLayerBindingResponse|null} [setLayerBinding] Response setLayerBinding
             * @property {boolean|null} [checkUnsavedChanges] Response checkUnsavedChanges
             * @property {zmk.keymap.SaveChangesResponse.$Properties|null} [saveChanges] Response saveChanges
             * @property {boolean|null} [discardChanges] Response discardChanges
             * @property {zmk.keymap.PhysicalLayouts.$Properties|null} [getPhysicalLayouts] Response getPhysicalLayouts
             * @property {zmk.keymap.SetActivePhysicalLayoutResponse.$Properties|null} [setActivePhysicalLayout] Response setActivePhysicalLayout
             * @property {zmk.keymap.MoveLayerResponse.$Properties|null} [moveLayer] Response moveLayer
             * @property {zmk.keymap.AddLayerResponse.$Properties|null} [addLayer] Response addLayer
             * @property {zmk.keymap.RemoveLayerResponse.$Properties|null} [removeLayer] Response removeLayer
             * @property {zmk.keymap.RestoreLayerResponse.$Properties|null} [restoreLayer] Response restoreLayer
             * @property {zmk.keymap.SetLayerPropsResponse|null} [setLayerProps] Response setLayerProps
             * @property {"getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps"} [responseType] Response responseType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Response.
             * @memberof zmk.keymap
             * @interface IResponse
             * @augments zmk.keymap.Response.$Properties
             * @deprecated Use zmk.keymap.Response.$Properties instead.
             */

            /**
             * Narrowed shape of a Response.
             * @typedef {{
             *   getKeymap?: zmk.keymap.Keymap.$Shape|null;
             *   setLayerBinding?: zmk.keymap.SetLayerBindingResponse|null;
             *   checkUnsavedChanges?: boolean|null;
             *   saveChanges?: zmk.keymap.SaveChangesResponse.$Shape|null;
             *   discardChanges?: boolean|null;
             *   getPhysicalLayouts?: zmk.keymap.PhysicalLayouts.$Shape|null;
             *   setActivePhysicalLayout?: zmk.keymap.SetActivePhysicalLayoutResponse.$Shape|null;
             *   moveLayer?: zmk.keymap.MoveLayerResponse.$Shape|null;
             *   addLayer?: zmk.keymap.AddLayerResponse.$Shape|null;
             *   removeLayer?: zmk.keymap.RemoveLayerResponse.$Shape|null;
             *   restoreLayer?: zmk.keymap.RestoreLayerResponse.$Shape|null;
             *   setLayerProps?: zmk.keymap.SetLayerPropsResponse|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ responseType?: undefined; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "getKeymap"; getKeymap: zmk.keymap.Keymap.$Shape; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "setLayerBinding"; getKeymap?: null; setLayerBinding: zmk.keymap.SetLayerBindingResponse; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "checkUnsavedChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges: boolean; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "saveChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges: zmk.keymap.SaveChangesResponse.$Shape; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "discardChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges: boolean; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "getPhysicalLayouts"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts: zmk.keymap.PhysicalLayouts.$Shape; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "setActivePhysicalLayout"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout: zmk.keymap.SetActivePhysicalLayoutResponse.$Shape; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "moveLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer: zmk.keymap.MoveLayerResponse.$Shape; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "addLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer: zmk.keymap.AddLayerResponse.$Shape; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "removeLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer: zmk.keymap.RemoveLayerResponse.$Shape; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "restoreLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer: zmk.keymap.RestoreLayerResponse.$Shape; setLayerProps?: null }|{ responseType?: "setLayerProps"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps: zmk.keymap.SetLayerPropsResponse })
             * )} zmk.keymap.Response.$Shape
             */

            /**
             * Constructs a new Response.
             * @memberof zmk.keymap
             * @classdesc Represents a Response.
             * @constructor
             * @param {zmk.keymap.Response.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Response(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response getKeymap.
             * @member {zmk.keymap.Keymap.$Properties|null|undefined} getKeymap
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.getKeymap = null;

            /**
             * Response setLayerBinding.
             * @member {zmk.keymap.SetLayerBindingResponse|null|undefined} setLayerBinding
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.setLayerBinding = null;

            /**
             * Response checkUnsavedChanges.
             * @member {boolean|null|undefined} checkUnsavedChanges
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.checkUnsavedChanges = null;

            /**
             * Response saveChanges.
             * @member {zmk.keymap.SaveChangesResponse.$Properties|null|undefined} saveChanges
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.saveChanges = null;

            /**
             * Response discardChanges.
             * @member {boolean|null|undefined} discardChanges
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.discardChanges = null;

            /**
             * Response getPhysicalLayouts.
             * @member {zmk.keymap.PhysicalLayouts.$Properties|null|undefined} getPhysicalLayouts
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.getPhysicalLayouts = null;

            /**
             * Response setActivePhysicalLayout.
             * @member {zmk.keymap.SetActivePhysicalLayoutResponse.$Properties|null|undefined} setActivePhysicalLayout
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.setActivePhysicalLayout = null;

            /**
             * Response moveLayer.
             * @member {zmk.keymap.MoveLayerResponse.$Properties|null|undefined} moveLayer
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.moveLayer = null;

            /**
             * Response addLayer.
             * @member {zmk.keymap.AddLayerResponse.$Properties|null|undefined} addLayer
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.addLayer = null;

            /**
             * Response removeLayer.
             * @member {zmk.keymap.RemoveLayerResponse.$Properties|null|undefined} removeLayer
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.removeLayer = null;

            /**
             * Response restoreLayer.
             * @member {zmk.keymap.RestoreLayerResponse.$Properties|null|undefined} restoreLayer
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.restoreLayer = null;

            /**
             * Response setLayerProps.
             * @member {zmk.keymap.SetLayerPropsResponse|null|undefined} setLayerProps
             * @memberof zmk.keymap.Response
             * @instance
             */
            Response.prototype.setLayerProps = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Response responseType.
             * @member {"getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps"|undefined} responseType
             * @memberof zmk.keymap.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "responseType", {
                get: $util.oneOfGetter($oneOfFields = ["getKeymap", "setLayerBinding", "checkUnsavedChanges", "saveChanges", "discardChanges", "getPhysicalLayouts", "setActivePhysicalLayout", "moveLayer", "addLayer", "removeLayer", "restoreLayer", "setLayerProps"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.Response
             * @static
             * @param {zmk.keymap.Response.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.Response} Response instance
             * @type {{
             *   (properties: zmk.keymap.Response.$Shape): zmk.keymap.Response & zmk.keymap.Response.$Shape;
             *   (properties?: zmk.keymap.Response.$Properties): zmk.keymap.Response;
             * }}
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.keymap.Response.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.Response
             * @static
             * @param {zmk.keymap.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.getKeymap != null && Object.hasOwnProperty.call(message, "getKeymap"))
                    $root.zmk.keymap.Keymap.encode(message.getKeymap, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.setLayerBinding != null && Object.hasOwnProperty.call(message, "setLayerBinding"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.setLayerBinding);
                if (message.checkUnsavedChanges != null && Object.hasOwnProperty.call(message, "checkUnsavedChanges"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.checkUnsavedChanges);
                if (message.saveChanges != null && Object.hasOwnProperty.call(message, "saveChanges"))
                    $root.zmk.keymap.SaveChangesResponse.encode(message.saveChanges, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.discardChanges != null && Object.hasOwnProperty.call(message, "discardChanges"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.discardChanges);
                if (message.getPhysicalLayouts != null && Object.hasOwnProperty.call(message, "getPhysicalLayouts"))
                    $root.zmk.keymap.PhysicalLayouts.encode(message.getPhysicalLayouts, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
                if (message.setActivePhysicalLayout != null && Object.hasOwnProperty.call(message, "setActivePhysicalLayout"))
                    $root.zmk.keymap.SetActivePhysicalLayoutResponse.encode(message.setActivePhysicalLayout, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
                if (message.moveLayer != null && Object.hasOwnProperty.call(message, "moveLayer"))
                    $root.zmk.keymap.MoveLayerResponse.encode(message.moveLayer, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.addLayer != null && Object.hasOwnProperty.call(message, "addLayer"))
                    $root.zmk.keymap.AddLayerResponse.encode(message.addLayer, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
                if (message.removeLayer != null && Object.hasOwnProperty.call(message, "removeLayer"))
                    $root.zmk.keymap.RemoveLayerResponse.encode(message.removeLayer, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
                if (message.restoreLayer != null && Object.hasOwnProperty.call(message, "restoreLayer"))
                    $root.zmk.keymap.RestoreLayerResponse.encode(message.restoreLayer, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
                if (message.setLayerProps != null && Object.hasOwnProperty.call(message, "setLayerProps"))
                    writer.uint32(/* id 12, wireType 0 =*/96).int32(message.setLayerProps);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.keymap.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.Response
             * @static
             * @param {zmk.keymap.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.Response & zmk.keymap.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.Response();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.getKeymap = $root.zmk.keymap.Keymap.decode(reader, reader.uint32(), undefined, _depth + 1, message.getKeymap);
                            message.responseType = "getKeymap";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.setLayerBinding = reader.int32();
                            message.responseType = "setLayerBinding";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.checkUnsavedChanges = reader.bool();
                            message.responseType = "checkUnsavedChanges";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.saveChanges = $root.zmk.keymap.SaveChangesResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.saveChanges);
                            message.responseType = "saveChanges";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.discardChanges = reader.bool();
                            message.responseType = "discardChanges";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.getPhysicalLayouts = $root.zmk.keymap.PhysicalLayouts.decode(reader, reader.uint32(), undefined, _depth + 1, message.getPhysicalLayouts);
                            message.responseType = "getPhysicalLayouts";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.setActivePhysicalLayout = $root.zmk.keymap.SetActivePhysicalLayoutResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.setActivePhysicalLayout);
                            message.responseType = "setActivePhysicalLayout";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.moveLayer = $root.zmk.keymap.MoveLayerResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.moveLayer);
                            message.responseType = "moveLayer";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.addLayer = $root.zmk.keymap.AddLayerResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.addLayer);
                            message.responseType = "addLayer";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.removeLayer = $root.zmk.keymap.RemoveLayerResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.removeLayer);
                            message.responseType = "removeLayer";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.restoreLayer = $root.zmk.keymap.RestoreLayerResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.restoreLayer);
                            message.responseType = "restoreLayer";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 0)
                                break;
                            message.setLayerProps = reader.int32();
                            message.responseType = "setLayerProps";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.Response & zmk.keymap.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Response message.
             * @function verify
             * @memberof zmk.keymap.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.getKeymap != null && message.hasOwnProperty("getKeymap")) {
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.Keymap.verify(message.getKeymap, _depth + 1);
                        if (error)
                            return "getKeymap." + error;
                    }
                }
                if (message.setLayerBinding != null && message.hasOwnProperty("setLayerBinding")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    switch (message.setLayerBinding) {
                    default:
                        return "setLayerBinding: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                if (message.checkUnsavedChanges != null && message.hasOwnProperty("checkUnsavedChanges")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    if (typeof message.checkUnsavedChanges !== "boolean")
                        return "checkUnsavedChanges: boolean expected";
                }
                if (message.saveChanges != null && message.hasOwnProperty("saveChanges")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.SaveChangesResponse.verify(message.saveChanges, _depth + 1);
                        if (error)
                            return "saveChanges." + error;
                    }
                }
                if (message.discardChanges != null && message.hasOwnProperty("discardChanges")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    if (typeof message.discardChanges !== "boolean")
                        return "discardChanges: boolean expected";
                }
                if (message.getPhysicalLayouts != null && message.hasOwnProperty("getPhysicalLayouts")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.PhysicalLayouts.verify(message.getPhysicalLayouts, _depth + 1);
                        if (error)
                            return "getPhysicalLayouts." + error;
                    }
                }
                if (message.setActivePhysicalLayout != null && message.hasOwnProperty("setActivePhysicalLayout")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.SetActivePhysicalLayoutResponse.verify(message.setActivePhysicalLayout, _depth + 1);
                        if (error)
                            return "setActivePhysicalLayout." + error;
                    }
                }
                if (message.moveLayer != null && message.hasOwnProperty("moveLayer")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.MoveLayerResponse.verify(message.moveLayer, _depth + 1);
                        if (error)
                            return "moveLayer." + error;
                    }
                }
                if (message.addLayer != null && message.hasOwnProperty("addLayer")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.AddLayerResponse.verify(message.addLayer, _depth + 1);
                        if (error)
                            return "addLayer." + error;
                    }
                }
                if (message.removeLayer != null && message.hasOwnProperty("removeLayer")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.RemoveLayerResponse.verify(message.removeLayer, _depth + 1);
                        if (error)
                            return "removeLayer." + error;
                    }
                }
                if (message.restoreLayer != null && message.hasOwnProperty("restoreLayer")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    {
                        let error = $root.zmk.keymap.RestoreLayerResponse.verify(message.restoreLayer, _depth + 1);
                        if (error)
                            return "restoreLayer." + error;
                    }
                }
                if (message.setLayerProps != null && message.hasOwnProperty("setLayerProps")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    switch (message.setLayerProps) {
                    default:
                        return "setLayerProps: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.Response} Response
             */
            Response.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.Response)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.Response();
                if (object.getKeymap != null) {
                    if (typeof object.getKeymap !== "object")
                        throw TypeError(".zmk.keymap.Response.getKeymap: object expected");
                    message.getKeymap = $root.zmk.keymap.Keymap.fromObject(object.getKeymap, _depth + 1);
                }
                switch (object.setLayerBinding) {
                default:
                    if (typeof object.setLayerBinding === "number") {
                        message.setLayerBinding = object.setLayerBinding;
                        break;
                    }
                    break;
                case "SET_LAYER_BINDING_RESP_OK":
                case 0:
                    message.setLayerBinding = 0;
                    break;
                case "SET_LAYER_BINDING_RESP_INVALID_LOCATION":
                case 1:
                    message.setLayerBinding = 1;
                    break;
                case "SET_LAYER_BINDING_RESP_INVALID_BEHAVIOR":
                case 2:
                    message.setLayerBinding = 2;
                    break;
                case "SET_LAYER_BINDING_RESP_INVALID_PARAMETERS":
                case 3:
                    message.setLayerBinding = 3;
                    break;
                }
                if (object.checkUnsavedChanges != null)
                    message.checkUnsavedChanges = Boolean(object.checkUnsavedChanges);
                if (object.saveChanges != null) {
                    if (typeof object.saveChanges !== "object")
                        throw TypeError(".zmk.keymap.Response.saveChanges: object expected");
                    message.saveChanges = $root.zmk.keymap.SaveChangesResponse.fromObject(object.saveChanges, _depth + 1);
                }
                if (object.discardChanges != null)
                    message.discardChanges = Boolean(object.discardChanges);
                if (object.getPhysicalLayouts != null) {
                    if (typeof object.getPhysicalLayouts !== "object")
                        throw TypeError(".zmk.keymap.Response.getPhysicalLayouts: object expected");
                    message.getPhysicalLayouts = $root.zmk.keymap.PhysicalLayouts.fromObject(object.getPhysicalLayouts, _depth + 1);
                }
                if (object.setActivePhysicalLayout != null) {
                    if (typeof object.setActivePhysicalLayout !== "object")
                        throw TypeError(".zmk.keymap.Response.setActivePhysicalLayout: object expected");
                    message.setActivePhysicalLayout = $root.zmk.keymap.SetActivePhysicalLayoutResponse.fromObject(object.setActivePhysicalLayout, _depth + 1);
                }
                if (object.moveLayer != null) {
                    if (typeof object.moveLayer !== "object")
                        throw TypeError(".zmk.keymap.Response.moveLayer: object expected");
                    message.moveLayer = $root.zmk.keymap.MoveLayerResponse.fromObject(object.moveLayer, _depth + 1);
                }
                if (object.addLayer != null) {
                    if (typeof object.addLayer !== "object")
                        throw TypeError(".zmk.keymap.Response.addLayer: object expected");
                    message.addLayer = $root.zmk.keymap.AddLayerResponse.fromObject(object.addLayer, _depth + 1);
                }
                if (object.removeLayer != null) {
                    if (typeof object.removeLayer !== "object")
                        throw TypeError(".zmk.keymap.Response.removeLayer: object expected");
                    message.removeLayer = $root.zmk.keymap.RemoveLayerResponse.fromObject(object.removeLayer, _depth + 1);
                }
                if (object.restoreLayer != null) {
                    if (typeof object.restoreLayer !== "object")
                        throw TypeError(".zmk.keymap.Response.restoreLayer: object expected");
                    message.restoreLayer = $root.zmk.keymap.RestoreLayerResponse.fromObject(object.restoreLayer, _depth + 1);
                }
                switch (object.setLayerProps) {
                default:
                    if (typeof object.setLayerProps === "number") {
                        message.setLayerProps = object.setLayerProps;
                        break;
                    }
                    break;
                case "SET_LAYER_PROPS_RESP_OK":
                case 0:
                    message.setLayerProps = 0;
                    break;
                case "SET_LAYER_PROPS_RESP_ERR_GENERIC":
                case 1:
                    message.setLayerProps = 1;
                    break;
                case "SET_LAYER_PROPS_RESP_ERR_INVALID_ID":
                case 2:
                    message.setLayerProps = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.Response
             * @static
             * @param {zmk.keymap.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.getKeymap != null && message.hasOwnProperty("getKeymap")) {
                    object.getKeymap = $root.zmk.keymap.Keymap.toObject(message.getKeymap, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "getKeymap";
                }
                if (message.setLayerBinding != null && message.hasOwnProperty("setLayerBinding")) {
                    object.setLayerBinding = options.enums === String ? $root.zmk.keymap.SetLayerBindingResponse[message.setLayerBinding] === undefined ? message.setLayerBinding : $root.zmk.keymap.SetLayerBindingResponse[message.setLayerBinding] : message.setLayerBinding;
                    if (options.oneofs)
                        object.responseType = "setLayerBinding";
                }
                if (message.checkUnsavedChanges != null && message.hasOwnProperty("checkUnsavedChanges")) {
                    object.checkUnsavedChanges = message.checkUnsavedChanges;
                    if (options.oneofs)
                        object.responseType = "checkUnsavedChanges";
                }
                if (message.saveChanges != null && message.hasOwnProperty("saveChanges")) {
                    object.saveChanges = $root.zmk.keymap.SaveChangesResponse.toObject(message.saveChanges, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "saveChanges";
                }
                if (message.discardChanges != null && message.hasOwnProperty("discardChanges")) {
                    object.discardChanges = message.discardChanges;
                    if (options.oneofs)
                        object.responseType = "discardChanges";
                }
                if (message.getPhysicalLayouts != null && message.hasOwnProperty("getPhysicalLayouts")) {
                    object.getPhysicalLayouts = $root.zmk.keymap.PhysicalLayouts.toObject(message.getPhysicalLayouts, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "getPhysicalLayouts";
                }
                if (message.setActivePhysicalLayout != null && message.hasOwnProperty("setActivePhysicalLayout")) {
                    object.setActivePhysicalLayout = $root.zmk.keymap.SetActivePhysicalLayoutResponse.toObject(message.setActivePhysicalLayout, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "setActivePhysicalLayout";
                }
                if (message.moveLayer != null && message.hasOwnProperty("moveLayer")) {
                    object.moveLayer = $root.zmk.keymap.MoveLayerResponse.toObject(message.moveLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "moveLayer";
                }
                if (message.addLayer != null && message.hasOwnProperty("addLayer")) {
                    object.addLayer = $root.zmk.keymap.AddLayerResponse.toObject(message.addLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "addLayer";
                }
                if (message.removeLayer != null && message.hasOwnProperty("removeLayer")) {
                    object.removeLayer = $root.zmk.keymap.RemoveLayerResponse.toObject(message.removeLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "removeLayer";
                }
                if (message.restoreLayer != null && message.hasOwnProperty("restoreLayer")) {
                    object.restoreLayer = $root.zmk.keymap.RestoreLayerResponse.toObject(message.restoreLayer, options, _depth + 1);
                    if (options.oneofs)
                        object.responseType = "restoreLayer";
                }
                if (message.setLayerProps != null && message.hasOwnProperty("setLayerProps")) {
                    object.setLayerProps = options.enums === String ? $root.zmk.keymap.SetLayerPropsResponse[message.setLayerProps] === undefined ? message.setLayerProps : $root.zmk.keymap.SetLayerPropsResponse[message.setLayerProps] : message.setLayerProps;
                    if (options.oneofs)
                        object.responseType = "setLayerProps";
                }
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof zmk.keymap.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Response
             * @function getTypeUrl
             * @memberof zmk.keymap.Response
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Response.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.Response";
            };

            return Response;
        })();

        keymap.Notification = (function() {

            /**
             * Properties of a Notification.
             * @typedef {Object} zmk.keymap.Notification.$Properties
             * @property {boolean|null} [unsavedChangesStatusChanged] Notification unsavedChangesStatusChanged
             * @property {"unsavedChangesStatusChanged"} [notificationType] Notification notificationType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Notification.
             * @memberof zmk.keymap
             * @interface INotification
             * @augments zmk.keymap.Notification.$Properties
             * @deprecated Use zmk.keymap.Notification.$Properties instead.
             */

            /**
             * Narrowed shape of a Notification.
             * @typedef {{
             *   unsavedChangesStatusChanged?: boolean|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ notificationType?: undefined; unsavedChangesStatusChanged?: null }|{ notificationType?: "unsavedChangesStatusChanged"; unsavedChangesStatusChanged: boolean })
             * )} zmk.keymap.Notification.$Shape
             */

            /**
             * Constructs a new Notification.
             * @memberof zmk.keymap
             * @classdesc Represents a Notification.
             * @constructor
             * @param {zmk.keymap.Notification.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Notification(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Notification unsavedChangesStatusChanged.
             * @member {boolean|null|undefined} unsavedChangesStatusChanged
             * @memberof zmk.keymap.Notification
             * @instance
             */
            Notification.prototype.unsavedChangesStatusChanged = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Notification notificationType.
             * @member {"unsavedChangesStatusChanged"|undefined} notificationType
             * @memberof zmk.keymap.Notification
             * @instance
             */
            Object.defineProperty(Notification.prototype, "notificationType", {
                get: $util.oneOfGetter($oneOfFields = ["unsavedChangesStatusChanged"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Notification instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.Notification
             * @static
             * @param {zmk.keymap.Notification.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.Notification} Notification instance
             * @type {{
             *   (properties: zmk.keymap.Notification.$Shape): zmk.keymap.Notification & zmk.keymap.Notification.$Shape;
             *   (properties?: zmk.keymap.Notification.$Properties): zmk.keymap.Notification;
             * }}
             */
            Notification.create = function create(properties) {
                return new Notification(properties);
            };

            /**
             * Encodes the specified Notification message. Does not implicitly {@link zmk.keymap.Notification.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.Notification
             * @static
             * @param {zmk.keymap.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.unsavedChangesStatusChanged != null && Object.hasOwnProperty.call(message, "unsavedChangesStatusChanged"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.unsavedChangesStatusChanged);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link zmk.keymap.Notification.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.Notification
             * @static
             * @param {zmk.keymap.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.Notification & zmk.keymap.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.Notification();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.unsavedChangesStatusChanged = reader.bool();
                            message.notificationType = "unsavedChangesStatusChanged";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.Notification & zmk.keymap.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Notification message.
             * @function verify
             * @memberof zmk.keymap.Notification
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Notification.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.unsavedChangesStatusChanged != null && message.hasOwnProperty("unsavedChangesStatusChanged")) {
                    properties.notificationType = 1;
                    if (typeof message.unsavedChangesStatusChanged !== "boolean")
                        return "unsavedChangesStatusChanged: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.Notification
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.Notification} Notification
             */
            Notification.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.Notification)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.Notification();
                if (object.unsavedChangesStatusChanged != null)
                    message.unsavedChangesStatusChanged = Boolean(object.unsavedChangesStatusChanged);
                return message;
            };

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.Notification
             * @static
             * @param {zmk.keymap.Notification} message Notification
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Notification.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.unsavedChangesStatusChanged != null && message.hasOwnProperty("unsavedChangesStatusChanged")) {
                    object.unsavedChangesStatusChanged = message.unsavedChangesStatusChanged;
                    if (options.oneofs)
                        object.notificationType = "unsavedChangesStatusChanged";
                }
                return object;
            };

            /**
             * Converts this Notification to JSON.
             * @function toJSON
             * @memberof zmk.keymap.Notification
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Notification.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Notification
             * @function getTypeUrl
             * @memberof zmk.keymap.Notification
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Notification.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.Notification";
            };

            return Notification;
        })();

        keymap.SaveChangesResponse = (function() {

            /**
             * Properties of a SaveChangesResponse.
             * @typedef {Object} zmk.keymap.SaveChangesResponse.$Properties
             * @property {boolean|null} [ok] SaveChangesResponse ok
             * @property {zmk.keymap.SaveChangesErrorCode|null} [err] SaveChangesResponse err
             * @property {"ok"|"err"} [result] SaveChangesResponse result
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a SaveChangesResponse.
             * @memberof zmk.keymap
             * @interface ISaveChangesResponse
             * @augments zmk.keymap.SaveChangesResponse.$Properties
             * @deprecated Use zmk.keymap.SaveChangesResponse.$Properties instead.
             */

            /**
             * Narrowed shape of a SaveChangesResponse.
             * @typedef {{
             *   ok?: boolean|null;
             *   err?: zmk.keymap.SaveChangesErrorCode|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: boolean; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.SaveChangesErrorCode })
             * )} zmk.keymap.SaveChangesResponse.$Shape
             */

            /**
             * Constructs a new SaveChangesResponse.
             * @memberof zmk.keymap
             * @classdesc Represents a SaveChangesResponse.
             * @constructor
             * @param {zmk.keymap.SaveChangesResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function SaveChangesResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SaveChangesResponse ok.
             * @member {boolean|null|undefined} ok
             * @memberof zmk.keymap.SaveChangesResponse
             * @instance
             */
            SaveChangesResponse.prototype.ok = null;

            /**
             * SaveChangesResponse err.
             * @member {zmk.keymap.SaveChangesErrorCode|null|undefined} err
             * @memberof zmk.keymap.SaveChangesResponse
             * @instance
             */
            SaveChangesResponse.prototype.err = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * SaveChangesResponse result.
             * @member {"ok"|"err"|undefined} result
             * @memberof zmk.keymap.SaveChangesResponse
             * @instance
             */
            Object.defineProperty(SaveChangesResponse.prototype, "result", {
                get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SaveChangesResponse instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {zmk.keymap.SaveChangesResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.SaveChangesResponse} SaveChangesResponse instance
             * @type {{
             *   (properties: zmk.keymap.SaveChangesResponse.$Shape): zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape;
             *   (properties?: zmk.keymap.SaveChangesResponse.$Properties): zmk.keymap.SaveChangesResponse;
             * }}
             */
            SaveChangesResponse.create = function create(properties) {
                return new SaveChangesResponse(properties);
            };

            /**
             * Encodes the specified SaveChangesResponse message. Does not implicitly {@link zmk.keymap.SaveChangesResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {zmk.keymap.SaveChangesResponse.$Properties} message SaveChangesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaveChangesResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
                if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.err);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SaveChangesResponse message, length delimited. Does not implicitly {@link zmk.keymap.SaveChangesResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {zmk.keymap.SaveChangesResponse.$Properties} message SaveChangesResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SaveChangesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SaveChangesResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape} SaveChangesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaveChangesResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.SaveChangesResponse();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.ok = reader.bool();
                            message.result = "ok";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.err = reader.int32();
                            message.result = "err";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a SaveChangesResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape} SaveChangesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SaveChangesResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SaveChangesResponse message.
             * @function verify
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SaveChangesResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    properties.result = 1;
                    if (typeof message.ok !== "boolean")
                        return "ok: boolean expected";
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    if (properties.result === 1)
                        return "result: multiple values";
                    properties.result = 1;
                    switch (message.err) {
                    default:
                        return "err: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a SaveChangesResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.SaveChangesResponse} SaveChangesResponse
             */
            SaveChangesResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.SaveChangesResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.SaveChangesResponse();
                if (object.ok != null)
                    message.ok = Boolean(object.ok);
                switch (object.err) {
                default:
                    if (typeof object.err === "number") {
                        message.err = object.err;
                        break;
                    }
                    break;
                case "SAVE_CHANGES_ERR_OK":
                case 0:
                    message.err = 0;
                    break;
                case "SAVE_CHANGES_ERR_GENERIC":
                case 1:
                    message.err = 1;
                    break;
                case "SAVE_CHANGES_ERR_NOT_SUPPORTED":
                case 2:
                    message.err = 2;
                    break;
                case "SAVE_CHANGES_ERR_NO_SPACE":
                case 3:
                    message.err = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a SaveChangesResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {zmk.keymap.SaveChangesResponse} message SaveChangesResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SaveChangesResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    object.ok = message.ok;
                    if (options.oneofs)
                        object.result = "ok";
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    object.err = options.enums === String ? $root.zmk.keymap.SaveChangesErrorCode[message.err] === undefined ? message.err : $root.zmk.keymap.SaveChangesErrorCode[message.err] : message.err;
                    if (options.oneofs)
                        object.result = "err";
                }
                return object;
            };

            /**
             * Converts this SaveChangesResponse to JSON.
             * @function toJSON
             * @memberof zmk.keymap.SaveChangesResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SaveChangesResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SaveChangesResponse
             * @function getTypeUrl
             * @memberof zmk.keymap.SaveChangesResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SaveChangesResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.SaveChangesResponse";
            };

            return SaveChangesResponse;
        })();

        /**
         * SaveChangesErrorCode enum.
         * @name zmk.keymap.SaveChangesErrorCode
         * @enum {number}
         * @property {number} SAVE_CHANGES_ERR_OK=0 SAVE_CHANGES_ERR_OK value
         * @property {number} SAVE_CHANGES_ERR_GENERIC=1 SAVE_CHANGES_ERR_GENERIC value
         * @property {number} SAVE_CHANGES_ERR_NOT_SUPPORTED=2 SAVE_CHANGES_ERR_NOT_SUPPORTED value
         * @property {number} SAVE_CHANGES_ERR_NO_SPACE=3 SAVE_CHANGES_ERR_NO_SPACE value
         */
        keymap.SaveChangesErrorCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SAVE_CHANGES_ERR_OK"] = 0;
            values[valuesById[1] = "SAVE_CHANGES_ERR_GENERIC"] = 1;
            values[valuesById[2] = "SAVE_CHANGES_ERR_NOT_SUPPORTED"] = 2;
            values[valuesById[3] = "SAVE_CHANGES_ERR_NO_SPACE"] = 3;
            return values;
        })();

        /**
         * SetLayerBindingResponse enum.
         * @name zmk.keymap.SetLayerBindingResponse
         * @enum {number}
         * @property {number} SET_LAYER_BINDING_RESP_OK=0 SET_LAYER_BINDING_RESP_OK value
         * @property {number} SET_LAYER_BINDING_RESP_INVALID_LOCATION=1 SET_LAYER_BINDING_RESP_INVALID_LOCATION value
         * @property {number} SET_LAYER_BINDING_RESP_INVALID_BEHAVIOR=2 SET_LAYER_BINDING_RESP_INVALID_BEHAVIOR value
         * @property {number} SET_LAYER_BINDING_RESP_INVALID_PARAMETERS=3 SET_LAYER_BINDING_RESP_INVALID_PARAMETERS value
         */
        keymap.SetLayerBindingResponse = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET_LAYER_BINDING_RESP_OK"] = 0;
            values[valuesById[1] = "SET_LAYER_BINDING_RESP_INVALID_LOCATION"] = 1;
            values[valuesById[2] = "SET_LAYER_BINDING_RESP_INVALID_BEHAVIOR"] = 2;
            values[valuesById[3] = "SET_LAYER_BINDING_RESP_INVALID_PARAMETERS"] = 3;
            return values;
        })();

        keymap.SetActivePhysicalLayoutResponse = (function() {

            /**
             * Properties of a SetActivePhysicalLayoutResponse.
             * @typedef {Object} zmk.keymap.SetActivePhysicalLayoutResponse.$Properties
             * @property {zmk.keymap.Keymap.$Properties|null} [ok] SetActivePhysicalLayoutResponse ok
             * @property {zmk.keymap.SetActivePhysicalLayoutErrorCode|null} [err] SetActivePhysicalLayoutResponse err
             * @property {"ok"|"err"} [result] SetActivePhysicalLayoutResponse result
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a SetActivePhysicalLayoutResponse.
             * @memberof zmk.keymap
             * @interface ISetActivePhysicalLayoutResponse
             * @augments zmk.keymap.SetActivePhysicalLayoutResponse.$Properties
             * @deprecated Use zmk.keymap.SetActivePhysicalLayoutResponse.$Properties instead.
             */

            /**
             * Narrowed shape of a SetActivePhysicalLayoutResponse.
             * @typedef {{
             *   ok?: zmk.keymap.Keymap.$Shape|null;
             *   err?: zmk.keymap.SetActivePhysicalLayoutErrorCode|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.Keymap.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.SetActivePhysicalLayoutErrorCode })
             * )} zmk.keymap.SetActivePhysicalLayoutResponse.$Shape
             */

            /**
             * Constructs a new SetActivePhysicalLayoutResponse.
             * @memberof zmk.keymap
             * @classdesc Represents a SetActivePhysicalLayoutResponse.
             * @constructor
             * @param {zmk.keymap.SetActivePhysicalLayoutResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function SetActivePhysicalLayoutResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetActivePhysicalLayoutResponse ok.
             * @member {zmk.keymap.Keymap.$Properties|null|undefined} ok
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @instance
             */
            SetActivePhysicalLayoutResponse.prototype.ok = null;

            /**
             * SetActivePhysicalLayoutResponse err.
             * @member {zmk.keymap.SetActivePhysicalLayoutErrorCode|null|undefined} err
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @instance
             */
            SetActivePhysicalLayoutResponse.prototype.err = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * SetActivePhysicalLayoutResponse result.
             * @member {"ok"|"err"|undefined} result
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @instance
             */
            Object.defineProperty(SetActivePhysicalLayoutResponse.prototype, "result", {
                get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SetActivePhysicalLayoutResponse instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {zmk.keymap.SetActivePhysicalLayoutResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.SetActivePhysicalLayoutResponse} SetActivePhysicalLayoutResponse instance
             * @type {{
             *   (properties: zmk.keymap.SetActivePhysicalLayoutResponse.$Shape): zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape;
             *   (properties?: zmk.keymap.SetActivePhysicalLayoutResponse.$Properties): zmk.keymap.SetActivePhysicalLayoutResponse;
             * }}
             */
            SetActivePhysicalLayoutResponse.create = function create(properties) {
                return new SetActivePhysicalLayoutResponse(properties);
            };

            /**
             * Encodes the specified SetActivePhysicalLayoutResponse message. Does not implicitly {@link zmk.keymap.SetActivePhysicalLayoutResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {zmk.keymap.SetActivePhysicalLayoutResponse.$Properties} message SetActivePhysicalLayoutResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetActivePhysicalLayoutResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    $root.zmk.keymap.Keymap.encode(message.ok, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.err);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SetActivePhysicalLayoutResponse message, length delimited. Does not implicitly {@link zmk.keymap.SetActivePhysicalLayoutResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {zmk.keymap.SetActivePhysicalLayoutResponse.$Properties} message SetActivePhysicalLayoutResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetActivePhysicalLayoutResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SetActivePhysicalLayoutResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape} SetActivePhysicalLayoutResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetActivePhysicalLayoutResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.SetActivePhysicalLayoutResponse();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.ok = $root.zmk.keymap.Keymap.decode(reader, reader.uint32(), undefined, _depth + 1, message.ok);
                            message.result = "ok";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.err = reader.int32();
                            message.result = "err";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a SetActivePhysicalLayoutResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape} SetActivePhysicalLayoutResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetActivePhysicalLayoutResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetActivePhysicalLayoutResponse message.
             * @function verify
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetActivePhysicalLayoutResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    properties.result = 1;
                    {
                        let error = $root.zmk.keymap.Keymap.verify(message.ok, _depth + 1);
                        if (error)
                            return "ok." + error;
                    }
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    if (properties.result === 1)
                        return "result: multiple values";
                    properties.result = 1;
                    switch (message.err) {
                    default:
                        return "err: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a SetActivePhysicalLayoutResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.SetActivePhysicalLayoutResponse} SetActivePhysicalLayoutResponse
             */
            SetActivePhysicalLayoutResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.SetActivePhysicalLayoutResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.SetActivePhysicalLayoutResponse();
                if (object.ok != null) {
                    if (typeof object.ok !== "object")
                        throw TypeError(".zmk.keymap.SetActivePhysicalLayoutResponse.ok: object expected");
                    message.ok = $root.zmk.keymap.Keymap.fromObject(object.ok, _depth + 1);
                }
                switch (object.err) {
                default:
                    if (typeof object.err === "number") {
                        message.err = object.err;
                        break;
                    }
                    break;
                case "SET_ACTIVE_PHYSICAL_LAYOUT_ERR_OK":
                case 0:
                    message.err = 0;
                    break;
                case "SET_ACTIVE_PHYSICAL_LAYOUT_ERR_GENERIC":
                case 1:
                    message.err = 1;
                    break;
                case "SET_ACTIVE_PHYSICAL_LAYOUT_ERR_INVALID_LAYOUT_INDEX":
                case 2:
                    message.err = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a SetActivePhysicalLayoutResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {zmk.keymap.SetActivePhysicalLayoutResponse} message SetActivePhysicalLayoutResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetActivePhysicalLayoutResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    object.ok = $root.zmk.keymap.Keymap.toObject(message.ok, options, _depth + 1);
                    if (options.oneofs)
                        object.result = "ok";
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    object.err = options.enums === String ? $root.zmk.keymap.SetActivePhysicalLayoutErrorCode[message.err] === undefined ? message.err : $root.zmk.keymap.SetActivePhysicalLayoutErrorCode[message.err] : message.err;
                    if (options.oneofs)
                        object.result = "err";
                }
                return object;
            };

            /**
             * Converts this SetActivePhysicalLayoutResponse to JSON.
             * @function toJSON
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetActivePhysicalLayoutResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SetActivePhysicalLayoutResponse
             * @function getTypeUrl
             * @memberof zmk.keymap.SetActivePhysicalLayoutResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SetActivePhysicalLayoutResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.SetActivePhysicalLayoutResponse";
            };

            return SetActivePhysicalLayoutResponse;
        })();

        /**
         * MoveLayerErrorCode enum.
         * @name zmk.keymap.MoveLayerErrorCode
         * @enum {number}
         * @property {number} MOVE_LAYER_ERR_OK=0 MOVE_LAYER_ERR_OK value
         * @property {number} MOVE_LAYER_ERR_GENERIC=1 MOVE_LAYER_ERR_GENERIC value
         * @property {number} MOVE_LAYER_ERR_INVALID_LAYER=2 MOVE_LAYER_ERR_INVALID_LAYER value
         * @property {number} MOVE_LAYER_ERR_INVALID_DESTINATION=3 MOVE_LAYER_ERR_INVALID_DESTINATION value
         */
        keymap.MoveLayerErrorCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MOVE_LAYER_ERR_OK"] = 0;
            values[valuesById[1] = "MOVE_LAYER_ERR_GENERIC"] = 1;
            values[valuesById[2] = "MOVE_LAYER_ERR_INVALID_LAYER"] = 2;
            values[valuesById[3] = "MOVE_LAYER_ERR_INVALID_DESTINATION"] = 3;
            return values;
        })();

        keymap.MoveLayerResponse = (function() {

            /**
             * Properties of a MoveLayerResponse.
             * @typedef {Object} zmk.keymap.MoveLayerResponse.$Properties
             * @property {zmk.keymap.Keymap.$Properties|null} [ok] MoveLayerResponse ok
             * @property {zmk.keymap.MoveLayerErrorCode|null} [err] MoveLayerResponse err
             * @property {"ok"|"err"} [result] MoveLayerResponse result
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a MoveLayerResponse.
             * @memberof zmk.keymap
             * @interface IMoveLayerResponse
             * @augments zmk.keymap.MoveLayerResponse.$Properties
             * @deprecated Use zmk.keymap.MoveLayerResponse.$Properties instead.
             */

            /**
             * Narrowed shape of a MoveLayerResponse.
             * @typedef {{
             *   ok?: zmk.keymap.Keymap.$Shape|null;
             *   err?: zmk.keymap.MoveLayerErrorCode|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.Keymap.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.MoveLayerErrorCode })
             * )} zmk.keymap.MoveLayerResponse.$Shape
             */

            /**
             * Constructs a new MoveLayerResponse.
             * @memberof zmk.keymap
             * @classdesc Represents a MoveLayerResponse.
             * @constructor
             * @param {zmk.keymap.MoveLayerResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function MoveLayerResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MoveLayerResponse ok.
             * @member {zmk.keymap.Keymap.$Properties|null|undefined} ok
             * @memberof zmk.keymap.MoveLayerResponse
             * @instance
             */
            MoveLayerResponse.prototype.ok = null;

            /**
             * MoveLayerResponse err.
             * @member {zmk.keymap.MoveLayerErrorCode|null|undefined} err
             * @memberof zmk.keymap.MoveLayerResponse
             * @instance
             */
            MoveLayerResponse.prototype.err = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * MoveLayerResponse result.
             * @member {"ok"|"err"|undefined} result
             * @memberof zmk.keymap.MoveLayerResponse
             * @instance
             */
            Object.defineProperty(MoveLayerResponse.prototype, "result", {
                get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new MoveLayerResponse instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {zmk.keymap.MoveLayerResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.MoveLayerResponse} MoveLayerResponse instance
             * @type {{
             *   (properties: zmk.keymap.MoveLayerResponse.$Shape): zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape;
             *   (properties?: zmk.keymap.MoveLayerResponse.$Properties): zmk.keymap.MoveLayerResponse;
             * }}
             */
            MoveLayerResponse.create = function create(properties) {
                return new MoveLayerResponse(properties);
            };

            /**
             * Encodes the specified MoveLayerResponse message. Does not implicitly {@link zmk.keymap.MoveLayerResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {zmk.keymap.MoveLayerResponse.$Properties} message MoveLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoveLayerResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    $root.zmk.keymap.Keymap.encode(message.ok, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.err);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MoveLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.MoveLayerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {zmk.keymap.MoveLayerResponse.$Properties} message MoveLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoveLayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a MoveLayerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape} MoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoveLayerResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.MoveLayerResponse();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.ok = $root.zmk.keymap.Keymap.decode(reader, reader.uint32(), undefined, _depth + 1, message.ok);
                            message.result = "ok";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.err = reader.int32();
                            message.result = "err";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a MoveLayerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape} MoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoveLayerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MoveLayerResponse message.
             * @function verify
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MoveLayerResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    properties.result = 1;
                    {
                        let error = $root.zmk.keymap.Keymap.verify(message.ok, _depth + 1);
                        if (error)
                            return "ok." + error;
                    }
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    if (properties.result === 1)
                        return "result: multiple values";
                    properties.result = 1;
                    switch (message.err) {
                    default:
                        return "err: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a MoveLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.MoveLayerResponse} MoveLayerResponse
             */
            MoveLayerResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.MoveLayerResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.MoveLayerResponse();
                if (object.ok != null) {
                    if (typeof object.ok !== "object")
                        throw TypeError(".zmk.keymap.MoveLayerResponse.ok: object expected");
                    message.ok = $root.zmk.keymap.Keymap.fromObject(object.ok, _depth + 1);
                }
                switch (object.err) {
                default:
                    if (typeof object.err === "number") {
                        message.err = object.err;
                        break;
                    }
                    break;
                case "MOVE_LAYER_ERR_OK":
                case 0:
                    message.err = 0;
                    break;
                case "MOVE_LAYER_ERR_GENERIC":
                case 1:
                    message.err = 1;
                    break;
                case "MOVE_LAYER_ERR_INVALID_LAYER":
                case 2:
                    message.err = 2;
                    break;
                case "MOVE_LAYER_ERR_INVALID_DESTINATION":
                case 3:
                    message.err = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MoveLayerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {zmk.keymap.MoveLayerResponse} message MoveLayerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MoveLayerResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    object.ok = $root.zmk.keymap.Keymap.toObject(message.ok, options, _depth + 1);
                    if (options.oneofs)
                        object.result = "ok";
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    object.err = options.enums === String ? $root.zmk.keymap.MoveLayerErrorCode[message.err] === undefined ? message.err : $root.zmk.keymap.MoveLayerErrorCode[message.err] : message.err;
                    if (options.oneofs)
                        object.result = "err";
                }
                return object;
            };

            /**
             * Converts this MoveLayerResponse to JSON.
             * @function toJSON
             * @memberof zmk.keymap.MoveLayerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MoveLayerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MoveLayerResponse
             * @function getTypeUrl
             * @memberof zmk.keymap.MoveLayerResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MoveLayerResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.MoveLayerResponse";
            };

            return MoveLayerResponse;
        })();

        keymap.AddLayerResponse = (function() {

            /**
             * Properties of an AddLayerResponse.
             * @typedef {Object} zmk.keymap.AddLayerResponse.$Properties
             * @property {zmk.keymap.AddLayerResponseDetails.$Properties|null} [ok] AddLayerResponse ok
             * @property {zmk.keymap.AddLayerErrorCode|null} [err] AddLayerResponse err
             * @property {"ok"|"err"} [result] AddLayerResponse result
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of an AddLayerResponse.
             * @memberof zmk.keymap
             * @interface IAddLayerResponse
             * @augments zmk.keymap.AddLayerResponse.$Properties
             * @deprecated Use zmk.keymap.AddLayerResponse.$Properties instead.
             */

            /**
             * Narrowed shape of an AddLayerResponse.
             * @typedef {{
             *   ok?: zmk.keymap.AddLayerResponseDetails.$Shape|null;
             *   err?: zmk.keymap.AddLayerErrorCode|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.AddLayerResponseDetails.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.AddLayerErrorCode })
             * )} zmk.keymap.AddLayerResponse.$Shape
             */

            /**
             * Constructs a new AddLayerResponse.
             * @memberof zmk.keymap
             * @classdesc Represents an AddLayerResponse.
             * @constructor
             * @param {zmk.keymap.AddLayerResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function AddLayerResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddLayerResponse ok.
             * @member {zmk.keymap.AddLayerResponseDetails.$Properties|null|undefined} ok
             * @memberof zmk.keymap.AddLayerResponse
             * @instance
             */
            AddLayerResponse.prototype.ok = null;

            /**
             * AddLayerResponse err.
             * @member {zmk.keymap.AddLayerErrorCode|null|undefined} err
             * @memberof zmk.keymap.AddLayerResponse
             * @instance
             */
            AddLayerResponse.prototype.err = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * AddLayerResponse result.
             * @member {"ok"|"err"|undefined} result
             * @memberof zmk.keymap.AddLayerResponse
             * @instance
             */
            Object.defineProperty(AddLayerResponse.prototype, "result", {
                get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AddLayerResponse instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {zmk.keymap.AddLayerResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.AddLayerResponse} AddLayerResponse instance
             * @type {{
             *   (properties: zmk.keymap.AddLayerResponse.$Shape): zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape;
             *   (properties?: zmk.keymap.AddLayerResponse.$Properties): zmk.keymap.AddLayerResponse;
             * }}
             */
            AddLayerResponse.create = function create(properties) {
                return new AddLayerResponse(properties);
            };

            /**
             * Encodes the specified AddLayerResponse message. Does not implicitly {@link zmk.keymap.AddLayerResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {zmk.keymap.AddLayerResponse.$Properties} message AddLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddLayerResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    $root.zmk.keymap.AddLayerResponseDetails.encode(message.ok, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.err);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AddLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.AddLayerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {zmk.keymap.AddLayerResponse.$Properties} message AddLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddLayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an AddLayerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape} AddLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddLayerResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.AddLayerResponse();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.ok = $root.zmk.keymap.AddLayerResponseDetails.decode(reader, reader.uint32(), undefined, _depth + 1, message.ok);
                            message.result = "ok";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.err = reader.int32();
                            message.result = "err";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes an AddLayerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape} AddLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddLayerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddLayerResponse message.
             * @function verify
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddLayerResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    properties.result = 1;
                    {
                        let error = $root.zmk.keymap.AddLayerResponseDetails.verify(message.ok, _depth + 1);
                        if (error)
                            return "ok." + error;
                    }
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    if (properties.result === 1)
                        return "result: multiple values";
                    properties.result = 1;
                    switch (message.err) {
                    default:
                        return "err: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates an AddLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.AddLayerResponse} AddLayerResponse
             */
            AddLayerResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.AddLayerResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.AddLayerResponse();
                if (object.ok != null) {
                    if (typeof object.ok !== "object")
                        throw TypeError(".zmk.keymap.AddLayerResponse.ok: object expected");
                    message.ok = $root.zmk.keymap.AddLayerResponseDetails.fromObject(object.ok, _depth + 1);
                }
                switch (object.err) {
                default:
                    if (typeof object.err === "number") {
                        message.err = object.err;
                        break;
                    }
                    break;
                case "ADD_LAYER_ERR_OK":
                case 0:
                    message.err = 0;
                    break;
                case "ADD_LAYER_ERR_GENERIC":
                case 1:
                    message.err = 1;
                    break;
                case "ADD_LAYER_ERR_NO_SPACE":
                case 2:
                    message.err = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an AddLayerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {zmk.keymap.AddLayerResponse} message AddLayerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddLayerResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    object.ok = $root.zmk.keymap.AddLayerResponseDetails.toObject(message.ok, options, _depth + 1);
                    if (options.oneofs)
                        object.result = "ok";
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    object.err = options.enums === String ? $root.zmk.keymap.AddLayerErrorCode[message.err] === undefined ? message.err : $root.zmk.keymap.AddLayerErrorCode[message.err] : message.err;
                    if (options.oneofs)
                        object.result = "err";
                }
                return object;
            };

            /**
             * Converts this AddLayerResponse to JSON.
             * @function toJSON
             * @memberof zmk.keymap.AddLayerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddLayerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AddLayerResponse
             * @function getTypeUrl
             * @memberof zmk.keymap.AddLayerResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AddLayerResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.AddLayerResponse";
            };

            return AddLayerResponse;
        })();

        /**
         * AddLayerErrorCode enum.
         * @name zmk.keymap.AddLayerErrorCode
         * @enum {number}
         * @property {number} ADD_LAYER_ERR_OK=0 ADD_LAYER_ERR_OK value
         * @property {number} ADD_LAYER_ERR_GENERIC=1 ADD_LAYER_ERR_GENERIC value
         * @property {number} ADD_LAYER_ERR_NO_SPACE=2 ADD_LAYER_ERR_NO_SPACE value
         */
        keymap.AddLayerErrorCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ADD_LAYER_ERR_OK"] = 0;
            values[valuesById[1] = "ADD_LAYER_ERR_GENERIC"] = 1;
            values[valuesById[2] = "ADD_LAYER_ERR_NO_SPACE"] = 2;
            return values;
        })();

        keymap.AddLayerResponseDetails = (function() {

            /**
             * Properties of an AddLayerResponseDetails.
             * @typedef {Object} zmk.keymap.AddLayerResponseDetails.$Properties
             * @property {number|null} [index] AddLayerResponseDetails index
             * @property {zmk.keymap.Layer.$Properties|null} [layer] AddLayerResponseDetails layer
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of an AddLayerResponseDetails.
             * @memberof zmk.keymap
             * @interface IAddLayerResponseDetails
             * @augments zmk.keymap.AddLayerResponseDetails.$Properties
             * @deprecated Use zmk.keymap.AddLayerResponseDetails.$Properties instead.
             */

            /**
             * Shape of an AddLayerResponseDetails.
             * @typedef {zmk.keymap.AddLayerResponseDetails.$Properties} zmk.keymap.AddLayerResponseDetails.$Shape
             */

            /**
             * Constructs a new AddLayerResponseDetails.
             * @memberof zmk.keymap
             * @classdesc Represents an AddLayerResponseDetails.
             * @constructor
             * @param {zmk.keymap.AddLayerResponseDetails.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function AddLayerResponseDetails(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AddLayerResponseDetails index.
             * @member {number} index
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @instance
             */
            AddLayerResponseDetails.prototype.index = 0;

            /**
             * AddLayerResponseDetails layer.
             * @member {zmk.keymap.Layer.$Properties|null|undefined} layer
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @instance
             */
            AddLayerResponseDetails.prototype.layer = null;

            /**
             * Creates a new AddLayerResponseDetails instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {zmk.keymap.AddLayerResponseDetails.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.AddLayerResponseDetails} AddLayerResponseDetails instance
             * @type {{
             *   (properties: zmk.keymap.AddLayerResponseDetails.$Shape): zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape;
             *   (properties?: zmk.keymap.AddLayerResponseDetails.$Properties): zmk.keymap.AddLayerResponseDetails;
             * }}
             */
            AddLayerResponseDetails.create = function create(properties) {
                return new AddLayerResponseDetails(properties);
            };

            /**
             * Encodes the specified AddLayerResponseDetails message. Does not implicitly {@link zmk.keymap.AddLayerResponseDetails.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {zmk.keymap.AddLayerResponseDetails.$Properties} message AddLayerResponseDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddLayerResponseDetails.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                if (message.layer != null && Object.hasOwnProperty.call(message, "layer"))
                    $root.zmk.keymap.Layer.encode(message.layer, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AddLayerResponseDetails message, length delimited. Does not implicitly {@link zmk.keymap.AddLayerResponseDetails.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {zmk.keymap.AddLayerResponseDetails.$Properties} message AddLayerResponseDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddLayerResponseDetails.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an AddLayerResponseDetails message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape} AddLayerResponseDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddLayerResponseDetails.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.AddLayerResponseDetails(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.index = value;
                            else
                                delete message.index;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.layer = $root.zmk.keymap.Layer.decode(reader, reader.uint32(), undefined, _depth + 1, message.layer);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes an AddLayerResponseDetails message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape} AddLayerResponseDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddLayerResponseDetails.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddLayerResponseDetails message.
             * @function verify
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddLayerResponseDetails.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                if (message.layer != null && message.hasOwnProperty("layer")) {
                    let error = $root.zmk.keymap.Layer.verify(message.layer, _depth + 1);
                    if (error)
                        return "layer." + error;
                }
                return null;
            };

            /**
             * Creates an AddLayerResponseDetails message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.AddLayerResponseDetails} AddLayerResponseDetails
             */
            AddLayerResponseDetails.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.AddLayerResponseDetails)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.AddLayerResponseDetails();
                if (object.index != null)
                    if (Number(object.index) !== 0)
                        message.index = object.index >>> 0;
                if (object.layer != null) {
                    if (typeof object.layer !== "object")
                        throw TypeError(".zmk.keymap.AddLayerResponseDetails.layer: object expected");
                    message.layer = $root.zmk.keymap.Layer.fromObject(object.layer, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from an AddLayerResponseDetails message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {zmk.keymap.AddLayerResponseDetails} message AddLayerResponseDetails
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddLayerResponseDetails.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.index = 0;
                    object.layer = null;
                }
                if (message.index != null && message.hasOwnProperty("index"))
                    object.index = message.index;
                if (message.layer != null && message.hasOwnProperty("layer"))
                    object.layer = $root.zmk.keymap.Layer.toObject(message.layer, options, _depth + 1);
                return object;
            };

            /**
             * Converts this AddLayerResponseDetails to JSON.
             * @function toJSON
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddLayerResponseDetails.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AddLayerResponseDetails
             * @function getTypeUrl
             * @memberof zmk.keymap.AddLayerResponseDetails
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AddLayerResponseDetails.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.AddLayerResponseDetails";
            };

            return AddLayerResponseDetails;
        })();

        keymap.RemoveLayerResponse = (function() {

            /**
             * Properties of a RemoveLayerResponse.
             * @typedef {Object} zmk.keymap.RemoveLayerResponse.$Properties
             * @property {zmk.keymap.RemoveLayerOk.$Properties|null} [ok] RemoveLayerResponse ok
             * @property {zmk.keymap.RemoveLayerErrorCode|null} [err] RemoveLayerResponse err
             * @property {"ok"|"err"} [result] RemoveLayerResponse result
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RemoveLayerResponse.
             * @memberof zmk.keymap
             * @interface IRemoveLayerResponse
             * @augments zmk.keymap.RemoveLayerResponse.$Properties
             * @deprecated Use zmk.keymap.RemoveLayerResponse.$Properties instead.
             */

            /**
             * Narrowed shape of a RemoveLayerResponse.
             * @typedef {{
             *   ok?: zmk.keymap.RemoveLayerOk.$Shape|null;
             *   err?: zmk.keymap.RemoveLayerErrorCode|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.RemoveLayerOk.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.RemoveLayerErrorCode })
             * )} zmk.keymap.RemoveLayerResponse.$Shape
             */

            /**
             * Constructs a new RemoveLayerResponse.
             * @memberof zmk.keymap
             * @classdesc Represents a RemoveLayerResponse.
             * @constructor
             * @param {zmk.keymap.RemoveLayerResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RemoveLayerResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RemoveLayerResponse ok.
             * @member {zmk.keymap.RemoveLayerOk.$Properties|null|undefined} ok
             * @memberof zmk.keymap.RemoveLayerResponse
             * @instance
             */
            RemoveLayerResponse.prototype.ok = null;

            /**
             * RemoveLayerResponse err.
             * @member {zmk.keymap.RemoveLayerErrorCode|null|undefined} err
             * @memberof zmk.keymap.RemoveLayerResponse
             * @instance
             */
            RemoveLayerResponse.prototype.err = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * RemoveLayerResponse result.
             * @member {"ok"|"err"|undefined} result
             * @memberof zmk.keymap.RemoveLayerResponse
             * @instance
             */
            Object.defineProperty(RemoveLayerResponse.prototype, "result", {
                get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RemoveLayerResponse instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {zmk.keymap.RemoveLayerResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.RemoveLayerResponse} RemoveLayerResponse instance
             * @type {{
             *   (properties: zmk.keymap.RemoveLayerResponse.$Shape): zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape;
             *   (properties?: zmk.keymap.RemoveLayerResponse.$Properties): zmk.keymap.RemoveLayerResponse;
             * }}
             */
            RemoveLayerResponse.create = function create(properties) {
                return new RemoveLayerResponse(properties);
            };

            /**
             * Encodes the specified RemoveLayerResponse message. Does not implicitly {@link zmk.keymap.RemoveLayerResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {zmk.keymap.RemoveLayerResponse.$Properties} message RemoveLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveLayerResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    $root.zmk.keymap.RemoveLayerOk.encode(message.ok, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.err);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RemoveLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.RemoveLayerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {zmk.keymap.RemoveLayerResponse.$Properties} message RemoveLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveLayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RemoveLayerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape} RemoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveLayerResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.RemoveLayerResponse();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.ok = $root.zmk.keymap.RemoveLayerOk.decode(reader, reader.uint32(), undefined, _depth + 1, message.ok);
                            message.result = "ok";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.err = reader.int32();
                            message.result = "err";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RemoveLayerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape} RemoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveLayerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RemoveLayerResponse message.
             * @function verify
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoveLayerResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    properties.result = 1;
                    {
                        let error = $root.zmk.keymap.RemoveLayerOk.verify(message.ok, _depth + 1);
                        if (error)
                            return "ok." + error;
                    }
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    if (properties.result === 1)
                        return "result: multiple values";
                    properties.result = 1;
                    switch (message.err) {
                    default:
                        return "err: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a RemoveLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.RemoveLayerResponse} RemoveLayerResponse
             */
            RemoveLayerResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.RemoveLayerResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.RemoveLayerResponse();
                if (object.ok != null) {
                    if (typeof object.ok !== "object")
                        throw TypeError(".zmk.keymap.RemoveLayerResponse.ok: object expected");
                    message.ok = $root.zmk.keymap.RemoveLayerOk.fromObject(object.ok, _depth + 1);
                }
                switch (object.err) {
                default:
                    if (typeof object.err === "number") {
                        message.err = object.err;
                        break;
                    }
                    break;
                case "REMOVE_LAYER_ERR_OK":
                case 0:
                    message.err = 0;
                    break;
                case "REMOVE_LAYER_ERR_GENERIC":
                case 1:
                    message.err = 1;
                    break;
                case "REMOVE_LAYER_ERR_INVALID_INDEX":
                case 2:
                    message.err = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a RemoveLayerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {zmk.keymap.RemoveLayerResponse} message RemoveLayerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RemoveLayerResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    object.ok = $root.zmk.keymap.RemoveLayerOk.toObject(message.ok, options, _depth + 1);
                    if (options.oneofs)
                        object.result = "ok";
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    object.err = options.enums === String ? $root.zmk.keymap.RemoveLayerErrorCode[message.err] === undefined ? message.err : $root.zmk.keymap.RemoveLayerErrorCode[message.err] : message.err;
                    if (options.oneofs)
                        object.result = "err";
                }
                return object;
            };

            /**
             * Converts this RemoveLayerResponse to JSON.
             * @function toJSON
             * @memberof zmk.keymap.RemoveLayerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RemoveLayerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RemoveLayerResponse
             * @function getTypeUrl
             * @memberof zmk.keymap.RemoveLayerResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RemoveLayerResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.RemoveLayerResponse";
            };

            return RemoveLayerResponse;
        })();

        keymap.RemoveLayerOk = (function() {

            /**
             * Properties of a RemoveLayerOk.
             * @typedef {Object} zmk.keymap.RemoveLayerOk.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RemoveLayerOk.
             * @memberof zmk.keymap
             * @interface IRemoveLayerOk
             * @augments zmk.keymap.RemoveLayerOk.$Properties
             * @deprecated Use zmk.keymap.RemoveLayerOk.$Properties instead.
             */

            /**
             * Shape of a RemoveLayerOk.
             * @typedef {zmk.keymap.RemoveLayerOk.$Properties} zmk.keymap.RemoveLayerOk.$Shape
             */

            /**
             * Constructs a new RemoveLayerOk.
             * @memberof zmk.keymap
             * @classdesc Represents a RemoveLayerOk.
             * @constructor
             * @param {zmk.keymap.RemoveLayerOk.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RemoveLayerOk(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new RemoveLayerOk instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {zmk.keymap.RemoveLayerOk.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.RemoveLayerOk} RemoveLayerOk instance
             * @type {{
             *   (properties: zmk.keymap.RemoveLayerOk.$Shape): zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape;
             *   (properties?: zmk.keymap.RemoveLayerOk.$Properties): zmk.keymap.RemoveLayerOk;
             * }}
             */
            RemoveLayerOk.create = function create(properties) {
                return new RemoveLayerOk(properties);
            };

            /**
             * Encodes the specified RemoveLayerOk message. Does not implicitly {@link zmk.keymap.RemoveLayerOk.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {zmk.keymap.RemoveLayerOk.$Properties} message RemoveLayerOk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveLayerOk.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RemoveLayerOk message, length delimited. Does not implicitly {@link zmk.keymap.RemoveLayerOk.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {zmk.keymap.RemoveLayerOk.$Properties} message RemoveLayerOk message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveLayerOk.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RemoveLayerOk message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape} RemoveLayerOk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveLayerOk.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.RemoveLayerOk();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    reader.skipType(tag & 7, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RemoveLayerOk message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape} RemoveLayerOk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveLayerOk.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RemoveLayerOk message.
             * @function verify
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoveLayerOk.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates a RemoveLayerOk message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.RemoveLayerOk} RemoveLayerOk
             */
            RemoveLayerOk.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.RemoveLayerOk)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return new $root.zmk.keymap.RemoveLayerOk();
            };

            /**
             * Creates a plain object from a RemoveLayerOk message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {zmk.keymap.RemoveLayerOk} message RemoveLayerOk
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RemoveLayerOk.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this RemoveLayerOk to JSON.
             * @function toJSON
             * @memberof zmk.keymap.RemoveLayerOk
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RemoveLayerOk.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RemoveLayerOk
             * @function getTypeUrl
             * @memberof zmk.keymap.RemoveLayerOk
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RemoveLayerOk.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.RemoveLayerOk";
            };

            return RemoveLayerOk;
        })();

        /**
         * RemoveLayerErrorCode enum.
         * @name zmk.keymap.RemoveLayerErrorCode
         * @enum {number}
         * @property {number} REMOVE_LAYER_ERR_OK=0 REMOVE_LAYER_ERR_OK value
         * @property {number} REMOVE_LAYER_ERR_GENERIC=1 REMOVE_LAYER_ERR_GENERIC value
         * @property {number} REMOVE_LAYER_ERR_INVALID_INDEX=2 REMOVE_LAYER_ERR_INVALID_INDEX value
         */
        keymap.RemoveLayerErrorCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REMOVE_LAYER_ERR_OK"] = 0;
            values[valuesById[1] = "REMOVE_LAYER_ERR_GENERIC"] = 1;
            values[valuesById[2] = "REMOVE_LAYER_ERR_INVALID_INDEX"] = 2;
            return values;
        })();

        keymap.RestoreLayerResponse = (function() {

            /**
             * Properties of a RestoreLayerResponse.
             * @typedef {Object} zmk.keymap.RestoreLayerResponse.$Properties
             * @property {zmk.keymap.Layer.$Properties|null} [ok] RestoreLayerResponse ok
             * @property {zmk.keymap.RestoreLayerErrorCode|null} [err] RestoreLayerResponse err
             * @property {"ok"|"err"} [result] RestoreLayerResponse result
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RestoreLayerResponse.
             * @memberof zmk.keymap
             * @interface IRestoreLayerResponse
             * @augments zmk.keymap.RestoreLayerResponse.$Properties
             * @deprecated Use zmk.keymap.RestoreLayerResponse.$Properties instead.
             */

            /**
             * Narrowed shape of a RestoreLayerResponse.
             * @typedef {{
             *   ok?: zmk.keymap.Layer.$Shape|null;
             *   err?: zmk.keymap.RestoreLayerErrorCode|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.Layer.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.RestoreLayerErrorCode })
             * )} zmk.keymap.RestoreLayerResponse.$Shape
             */

            /**
             * Constructs a new RestoreLayerResponse.
             * @memberof zmk.keymap
             * @classdesc Represents a RestoreLayerResponse.
             * @constructor
             * @param {zmk.keymap.RestoreLayerResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RestoreLayerResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RestoreLayerResponse ok.
             * @member {zmk.keymap.Layer.$Properties|null|undefined} ok
             * @memberof zmk.keymap.RestoreLayerResponse
             * @instance
             */
            RestoreLayerResponse.prototype.ok = null;

            /**
             * RestoreLayerResponse err.
             * @member {zmk.keymap.RestoreLayerErrorCode|null|undefined} err
             * @memberof zmk.keymap.RestoreLayerResponse
             * @instance
             */
            RestoreLayerResponse.prototype.err = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * RestoreLayerResponse result.
             * @member {"ok"|"err"|undefined} result
             * @memberof zmk.keymap.RestoreLayerResponse
             * @instance
             */
            Object.defineProperty(RestoreLayerResponse.prototype, "result", {
                get: $util.oneOfGetter($oneOfFields = ["ok", "err"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RestoreLayerResponse instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {zmk.keymap.RestoreLayerResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.RestoreLayerResponse} RestoreLayerResponse instance
             * @type {{
             *   (properties: zmk.keymap.RestoreLayerResponse.$Shape): zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape;
             *   (properties?: zmk.keymap.RestoreLayerResponse.$Properties): zmk.keymap.RestoreLayerResponse;
             * }}
             */
            RestoreLayerResponse.create = function create(properties) {
                return new RestoreLayerResponse(properties);
            };

            /**
             * Encodes the specified RestoreLayerResponse message. Does not implicitly {@link zmk.keymap.RestoreLayerResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {zmk.keymap.RestoreLayerResponse.$Properties} message RestoreLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestoreLayerResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                    $root.zmk.keymap.Layer.encode(message.ok, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.err);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RestoreLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.RestoreLayerResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {zmk.keymap.RestoreLayerResponse.$Properties} message RestoreLayerResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestoreLayerResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RestoreLayerResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape} RestoreLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestoreLayerResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.RestoreLayerResponse();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.ok = $root.zmk.keymap.Layer.decode(reader, reader.uint32(), undefined, _depth + 1, message.ok);
                            message.result = "ok";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.err = reader.int32();
                            message.result = "err";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RestoreLayerResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape} RestoreLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestoreLayerResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RestoreLayerResponse message.
             * @function verify
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RestoreLayerResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    properties.result = 1;
                    {
                        let error = $root.zmk.keymap.Layer.verify(message.ok, _depth + 1);
                        if (error)
                            return "ok." + error;
                    }
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    if (properties.result === 1)
                        return "result: multiple values";
                    properties.result = 1;
                    switch (message.err) {
                    default:
                        return "err: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a RestoreLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.RestoreLayerResponse} RestoreLayerResponse
             */
            RestoreLayerResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.RestoreLayerResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.RestoreLayerResponse();
                if (object.ok != null) {
                    if (typeof object.ok !== "object")
                        throw TypeError(".zmk.keymap.RestoreLayerResponse.ok: object expected");
                    message.ok = $root.zmk.keymap.Layer.fromObject(object.ok, _depth + 1);
                }
                switch (object.err) {
                default:
                    if (typeof object.err === "number") {
                        message.err = object.err;
                        break;
                    }
                    break;
                case "RESTORE_LAYER_ERR_OK":
                case 0:
                    message.err = 0;
                    break;
                case "RESTORE_LAYER_ERR_GENERIC":
                case 1:
                    message.err = 1;
                    break;
                case "RESTORE_LAYER_ERR_INVALID_ID":
                case 2:
                    message.err = 2;
                    break;
                case "RESTORE_LAYER_ERR_INVALID_INDEX":
                case 3:
                    message.err = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a RestoreLayerResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {zmk.keymap.RestoreLayerResponse} message RestoreLayerResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RestoreLayerResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.ok != null && message.hasOwnProperty("ok")) {
                    object.ok = $root.zmk.keymap.Layer.toObject(message.ok, options, _depth + 1);
                    if (options.oneofs)
                        object.result = "ok";
                }
                if (message.err != null && message.hasOwnProperty("err")) {
                    object.err = options.enums === String ? $root.zmk.keymap.RestoreLayerErrorCode[message.err] === undefined ? message.err : $root.zmk.keymap.RestoreLayerErrorCode[message.err] : message.err;
                    if (options.oneofs)
                        object.result = "err";
                }
                return object;
            };

            /**
             * Converts this RestoreLayerResponse to JSON.
             * @function toJSON
             * @memberof zmk.keymap.RestoreLayerResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RestoreLayerResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RestoreLayerResponse
             * @function getTypeUrl
             * @memberof zmk.keymap.RestoreLayerResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RestoreLayerResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.RestoreLayerResponse";
            };

            return RestoreLayerResponse;
        })();

        /**
         * RestoreLayerErrorCode enum.
         * @name zmk.keymap.RestoreLayerErrorCode
         * @enum {number}
         * @property {number} RESTORE_LAYER_ERR_OK=0 RESTORE_LAYER_ERR_OK value
         * @property {number} RESTORE_LAYER_ERR_GENERIC=1 RESTORE_LAYER_ERR_GENERIC value
         * @property {number} RESTORE_LAYER_ERR_INVALID_ID=2 RESTORE_LAYER_ERR_INVALID_ID value
         * @property {number} RESTORE_LAYER_ERR_INVALID_INDEX=3 RESTORE_LAYER_ERR_INVALID_INDEX value
         */
        keymap.RestoreLayerErrorCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RESTORE_LAYER_ERR_OK"] = 0;
            values[valuesById[1] = "RESTORE_LAYER_ERR_GENERIC"] = 1;
            values[valuesById[2] = "RESTORE_LAYER_ERR_INVALID_ID"] = 2;
            values[valuesById[3] = "RESTORE_LAYER_ERR_INVALID_INDEX"] = 3;
            return values;
        })();

        /**
         * SetLayerPropsResponse enum.
         * @name zmk.keymap.SetLayerPropsResponse
         * @enum {number}
         * @property {number} SET_LAYER_PROPS_RESP_OK=0 SET_LAYER_PROPS_RESP_OK value
         * @property {number} SET_LAYER_PROPS_RESP_ERR_GENERIC=1 SET_LAYER_PROPS_RESP_ERR_GENERIC value
         * @property {number} SET_LAYER_PROPS_RESP_ERR_INVALID_ID=2 SET_LAYER_PROPS_RESP_ERR_INVALID_ID value
         */
        keymap.SetLayerPropsResponse = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET_LAYER_PROPS_RESP_OK"] = 0;
            values[valuesById[1] = "SET_LAYER_PROPS_RESP_ERR_GENERIC"] = 1;
            values[valuesById[2] = "SET_LAYER_PROPS_RESP_ERR_INVALID_ID"] = 2;
            return values;
        })();

        /**
         * SetActivePhysicalLayoutErrorCode enum.
         * @name zmk.keymap.SetActivePhysicalLayoutErrorCode
         * @enum {number}
         * @property {number} SET_ACTIVE_PHYSICAL_LAYOUT_ERR_OK=0 SET_ACTIVE_PHYSICAL_LAYOUT_ERR_OK value
         * @property {number} SET_ACTIVE_PHYSICAL_LAYOUT_ERR_GENERIC=1 SET_ACTIVE_PHYSICAL_LAYOUT_ERR_GENERIC value
         * @property {number} SET_ACTIVE_PHYSICAL_LAYOUT_ERR_INVALID_LAYOUT_INDEX=2 SET_ACTIVE_PHYSICAL_LAYOUT_ERR_INVALID_LAYOUT_INDEX value
         */
        keymap.SetActivePhysicalLayoutErrorCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET_ACTIVE_PHYSICAL_LAYOUT_ERR_OK"] = 0;
            values[valuesById[1] = "SET_ACTIVE_PHYSICAL_LAYOUT_ERR_GENERIC"] = 1;
            values[valuesById[2] = "SET_ACTIVE_PHYSICAL_LAYOUT_ERR_INVALID_LAYOUT_INDEX"] = 2;
            return values;
        })();

        keymap.SetLayerBindingRequest = (function() {

            /**
             * Properties of a SetLayerBindingRequest.
             * @typedef {Object} zmk.keymap.SetLayerBindingRequest.$Properties
             * @property {number|null} [layerId] SetLayerBindingRequest layerId
             * @property {number|null} [keyPosition] SetLayerBindingRequest keyPosition
             * @property {zmk.keymap.BehaviorBinding.$Properties|null} [binding] SetLayerBindingRequest binding
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a SetLayerBindingRequest.
             * @memberof zmk.keymap
             * @interface ISetLayerBindingRequest
             * @augments zmk.keymap.SetLayerBindingRequest.$Properties
             * @deprecated Use zmk.keymap.SetLayerBindingRequest.$Properties instead.
             */

            /**
             * Shape of a SetLayerBindingRequest.
             * @typedef {zmk.keymap.SetLayerBindingRequest.$Properties} zmk.keymap.SetLayerBindingRequest.$Shape
             */

            /**
             * Constructs a new SetLayerBindingRequest.
             * @memberof zmk.keymap
             * @classdesc Represents a SetLayerBindingRequest.
             * @constructor
             * @param {zmk.keymap.SetLayerBindingRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function SetLayerBindingRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetLayerBindingRequest layerId.
             * @member {number} layerId
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @instance
             */
            SetLayerBindingRequest.prototype.layerId = 0;

            /**
             * SetLayerBindingRequest keyPosition.
             * @member {number} keyPosition
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @instance
             */
            SetLayerBindingRequest.prototype.keyPosition = 0;

            /**
             * SetLayerBindingRequest binding.
             * @member {zmk.keymap.BehaviorBinding.$Properties|null|undefined} binding
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @instance
             */
            SetLayerBindingRequest.prototype.binding = null;

            /**
             * Creates a new SetLayerBindingRequest instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {zmk.keymap.SetLayerBindingRequest.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.SetLayerBindingRequest} SetLayerBindingRequest instance
             * @type {{
             *   (properties: zmk.keymap.SetLayerBindingRequest.$Shape): zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape;
             *   (properties?: zmk.keymap.SetLayerBindingRequest.$Properties): zmk.keymap.SetLayerBindingRequest;
             * }}
             */
            SetLayerBindingRequest.create = function create(properties) {
                return new SetLayerBindingRequest(properties);
            };

            /**
             * Encodes the specified SetLayerBindingRequest message. Does not implicitly {@link zmk.keymap.SetLayerBindingRequest.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {zmk.keymap.SetLayerBindingRequest.$Properties} message SetLayerBindingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetLayerBindingRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.layerId != null && Object.hasOwnProperty.call(message, "layerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.layerId);
                if (message.keyPosition != null && Object.hasOwnProperty.call(message, "keyPosition"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.keyPosition);
                if (message.binding != null && Object.hasOwnProperty.call(message, "binding"))
                    $root.zmk.keymap.BehaviorBinding.encode(message.binding, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SetLayerBindingRequest message, length delimited. Does not implicitly {@link zmk.keymap.SetLayerBindingRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {zmk.keymap.SetLayerBindingRequest.$Properties} message SetLayerBindingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetLayerBindingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SetLayerBindingRequest message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape} SetLayerBindingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetLayerBindingRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.SetLayerBindingRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.layerId = value;
                            else
                                delete message.layerId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.keyPosition = value;
                            else
                                delete message.keyPosition;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.binding = $root.zmk.keymap.BehaviorBinding.decode(reader, reader.uint32(), undefined, _depth + 1, message.binding);
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a SetLayerBindingRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape} SetLayerBindingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetLayerBindingRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetLayerBindingRequest message.
             * @function verify
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetLayerBindingRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.layerId != null && message.hasOwnProperty("layerId"))
                    if (!$util.isInteger(message.layerId))
                        return "layerId: integer expected";
                if (message.keyPosition != null && message.hasOwnProperty("keyPosition"))
                    if (!$util.isInteger(message.keyPosition))
                        return "keyPosition: integer expected";
                if (message.binding != null && message.hasOwnProperty("binding")) {
                    let error = $root.zmk.keymap.BehaviorBinding.verify(message.binding, _depth + 1);
                    if (error)
                        return "binding." + error;
                }
                return null;
            };

            /**
             * Creates a SetLayerBindingRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.SetLayerBindingRequest} SetLayerBindingRequest
             */
            SetLayerBindingRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.SetLayerBindingRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.SetLayerBindingRequest();
                if (object.layerId != null)
                    if (Number(object.layerId) !== 0)
                        message.layerId = object.layerId >>> 0;
                if (object.keyPosition != null)
                    if (Number(object.keyPosition) !== 0)
                        message.keyPosition = object.keyPosition | 0;
                if (object.binding != null) {
                    if (typeof object.binding !== "object")
                        throw TypeError(".zmk.keymap.SetLayerBindingRequest.binding: object expected");
                    message.binding = $root.zmk.keymap.BehaviorBinding.fromObject(object.binding, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a SetLayerBindingRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {zmk.keymap.SetLayerBindingRequest} message SetLayerBindingRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetLayerBindingRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.layerId = 0;
                    object.keyPosition = 0;
                    object.binding = null;
                }
                if (message.layerId != null && message.hasOwnProperty("layerId"))
                    object.layerId = message.layerId;
                if (message.keyPosition != null && message.hasOwnProperty("keyPosition"))
                    object.keyPosition = message.keyPosition;
                if (message.binding != null && message.hasOwnProperty("binding"))
                    object.binding = $root.zmk.keymap.BehaviorBinding.toObject(message.binding, options, _depth + 1);
                return object;
            };

            /**
             * Converts this SetLayerBindingRequest to JSON.
             * @function toJSON
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetLayerBindingRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SetLayerBindingRequest
             * @function getTypeUrl
             * @memberof zmk.keymap.SetLayerBindingRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SetLayerBindingRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.SetLayerBindingRequest";
            };

            return SetLayerBindingRequest;
        })();

        keymap.MoveLayerRequest = (function() {

            /**
             * Properties of a MoveLayerRequest.
             * @typedef {Object} zmk.keymap.MoveLayerRequest.$Properties
             * @property {number|null} [startIndex] MoveLayerRequest startIndex
             * @property {number|null} [destIndex] MoveLayerRequest destIndex
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a MoveLayerRequest.
             * @memberof zmk.keymap
             * @interface IMoveLayerRequest
             * @augments zmk.keymap.MoveLayerRequest.$Properties
             * @deprecated Use zmk.keymap.MoveLayerRequest.$Properties instead.
             */

            /**
             * Shape of a MoveLayerRequest.
             * @typedef {zmk.keymap.MoveLayerRequest.$Properties} zmk.keymap.MoveLayerRequest.$Shape
             */

            /**
             * Constructs a new MoveLayerRequest.
             * @memberof zmk.keymap
             * @classdesc Represents a MoveLayerRequest.
             * @constructor
             * @param {zmk.keymap.MoveLayerRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function MoveLayerRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MoveLayerRequest startIndex.
             * @member {number} startIndex
             * @memberof zmk.keymap.MoveLayerRequest
             * @instance
             */
            MoveLayerRequest.prototype.startIndex = 0;

            /**
             * MoveLayerRequest destIndex.
             * @member {number} destIndex
             * @memberof zmk.keymap.MoveLayerRequest
             * @instance
             */
            MoveLayerRequest.prototype.destIndex = 0;

            /**
             * Creates a new MoveLayerRequest instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {zmk.keymap.MoveLayerRequest.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.MoveLayerRequest} MoveLayerRequest instance
             * @type {{
             *   (properties: zmk.keymap.MoveLayerRequest.$Shape): zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape;
             *   (properties?: zmk.keymap.MoveLayerRequest.$Properties): zmk.keymap.MoveLayerRequest;
             * }}
             */
            MoveLayerRequest.create = function create(properties) {
                return new MoveLayerRequest(properties);
            };

            /**
             * Encodes the specified MoveLayerRequest message. Does not implicitly {@link zmk.keymap.MoveLayerRequest.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {zmk.keymap.MoveLayerRequest.$Properties} message MoveLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoveLayerRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.startIndex != null && Object.hasOwnProperty.call(message, "startIndex"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.startIndex);
                if (message.destIndex != null && Object.hasOwnProperty.call(message, "destIndex"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.destIndex);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified MoveLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.MoveLayerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {zmk.keymap.MoveLayerRequest.$Properties} message MoveLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MoveLayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a MoveLayerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape} MoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoveLayerRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.MoveLayerRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.startIndex = value;
                            else
                                delete message.startIndex;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.destIndex = value;
                            else
                                delete message.destIndex;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a MoveLayerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape} MoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MoveLayerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MoveLayerRequest message.
             * @function verify
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MoveLayerRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.startIndex != null && message.hasOwnProperty("startIndex"))
                    if (!$util.isInteger(message.startIndex))
                        return "startIndex: integer expected";
                if (message.destIndex != null && message.hasOwnProperty("destIndex"))
                    if (!$util.isInteger(message.destIndex))
                        return "destIndex: integer expected";
                return null;
            };

            /**
             * Creates a MoveLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.MoveLayerRequest} MoveLayerRequest
             */
            MoveLayerRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.MoveLayerRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.MoveLayerRequest();
                if (object.startIndex != null)
                    if (Number(object.startIndex) !== 0)
                        message.startIndex = object.startIndex >>> 0;
                if (object.destIndex != null)
                    if (Number(object.destIndex) !== 0)
                        message.destIndex = object.destIndex >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a MoveLayerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {zmk.keymap.MoveLayerRequest} message MoveLayerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MoveLayerRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.startIndex = 0;
                    object.destIndex = 0;
                }
                if (message.startIndex != null && message.hasOwnProperty("startIndex"))
                    object.startIndex = message.startIndex;
                if (message.destIndex != null && message.hasOwnProperty("destIndex"))
                    object.destIndex = message.destIndex;
                return object;
            };

            /**
             * Converts this MoveLayerRequest to JSON.
             * @function toJSON
             * @memberof zmk.keymap.MoveLayerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MoveLayerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for MoveLayerRequest
             * @function getTypeUrl
             * @memberof zmk.keymap.MoveLayerRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            MoveLayerRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.MoveLayerRequest";
            };

            return MoveLayerRequest;
        })();

        keymap.AddLayerRequest = (function() {

            /**
             * Properties of an AddLayerRequest.
             * @typedef {Object} zmk.keymap.AddLayerRequest.$Properties
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of an AddLayerRequest.
             * @memberof zmk.keymap
             * @interface IAddLayerRequest
             * @augments zmk.keymap.AddLayerRequest.$Properties
             * @deprecated Use zmk.keymap.AddLayerRequest.$Properties instead.
             */

            /**
             * Shape of an AddLayerRequest.
             * @typedef {zmk.keymap.AddLayerRequest.$Properties} zmk.keymap.AddLayerRequest.$Shape
             */

            /**
             * Constructs a new AddLayerRequest.
             * @memberof zmk.keymap
             * @classdesc Represents an AddLayerRequest.
             * @constructor
             * @param {zmk.keymap.AddLayerRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function AddLayerRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new AddLayerRequest instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {zmk.keymap.AddLayerRequest.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.AddLayerRequest} AddLayerRequest instance
             * @type {{
             *   (properties: zmk.keymap.AddLayerRequest.$Shape): zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape;
             *   (properties?: zmk.keymap.AddLayerRequest.$Properties): zmk.keymap.AddLayerRequest;
             * }}
             */
            AddLayerRequest.create = function create(properties) {
                return new AddLayerRequest(properties);
            };

            /**
             * Encodes the specified AddLayerRequest message. Does not implicitly {@link zmk.keymap.AddLayerRequest.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {zmk.keymap.AddLayerRequest.$Properties} message AddLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddLayerRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AddLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.AddLayerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {zmk.keymap.AddLayerRequest.$Properties} message AddLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AddLayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an AddLayerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape} AddLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddLayerRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.AddLayerRequest();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    reader.skipType(tag & 7, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes an AddLayerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape} AddLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AddLayerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AddLayerRequest message.
             * @function verify
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AddLayerRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                return null;
            };

            /**
             * Creates an AddLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.AddLayerRequest} AddLayerRequest
             */
            AddLayerRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.AddLayerRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                return new $root.zmk.keymap.AddLayerRequest();
            };

            /**
             * Creates a plain object from an AddLayerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {zmk.keymap.AddLayerRequest} message AddLayerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AddLayerRequest.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this AddLayerRequest to JSON.
             * @function toJSON
             * @memberof zmk.keymap.AddLayerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AddLayerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AddLayerRequest
             * @function getTypeUrl
             * @memberof zmk.keymap.AddLayerRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AddLayerRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.AddLayerRequest";
            };

            return AddLayerRequest;
        })();

        keymap.RemoveLayerRequest = (function() {

            /**
             * Properties of a RemoveLayerRequest.
             * @typedef {Object} zmk.keymap.RemoveLayerRequest.$Properties
             * @property {number|null} [layerIndex] RemoveLayerRequest layerIndex
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RemoveLayerRequest.
             * @memberof zmk.keymap
             * @interface IRemoveLayerRequest
             * @augments zmk.keymap.RemoveLayerRequest.$Properties
             * @deprecated Use zmk.keymap.RemoveLayerRequest.$Properties instead.
             */

            /**
             * Shape of a RemoveLayerRequest.
             * @typedef {zmk.keymap.RemoveLayerRequest.$Properties} zmk.keymap.RemoveLayerRequest.$Shape
             */

            /**
             * Constructs a new RemoveLayerRequest.
             * @memberof zmk.keymap
             * @classdesc Represents a RemoveLayerRequest.
             * @constructor
             * @param {zmk.keymap.RemoveLayerRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RemoveLayerRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RemoveLayerRequest layerIndex.
             * @member {number} layerIndex
             * @memberof zmk.keymap.RemoveLayerRequest
             * @instance
             */
            RemoveLayerRequest.prototype.layerIndex = 0;

            /**
             * Creates a new RemoveLayerRequest instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {zmk.keymap.RemoveLayerRequest.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.RemoveLayerRequest} RemoveLayerRequest instance
             * @type {{
             *   (properties: zmk.keymap.RemoveLayerRequest.$Shape): zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape;
             *   (properties?: zmk.keymap.RemoveLayerRequest.$Properties): zmk.keymap.RemoveLayerRequest;
             * }}
             */
            RemoveLayerRequest.create = function create(properties) {
                return new RemoveLayerRequest(properties);
            };

            /**
             * Encodes the specified RemoveLayerRequest message. Does not implicitly {@link zmk.keymap.RemoveLayerRequest.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {zmk.keymap.RemoveLayerRequest.$Properties} message RemoveLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveLayerRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.layerIndex != null && Object.hasOwnProperty.call(message, "layerIndex"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.layerIndex);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RemoveLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.RemoveLayerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {zmk.keymap.RemoveLayerRequest.$Properties} message RemoveLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoveLayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RemoveLayerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape} RemoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveLayerRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.RemoveLayerRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.layerIndex = value;
                            else
                                delete message.layerIndex;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RemoveLayerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape} RemoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoveLayerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RemoveLayerRequest message.
             * @function verify
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoveLayerRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.layerIndex != null && message.hasOwnProperty("layerIndex"))
                    if (!$util.isInteger(message.layerIndex))
                        return "layerIndex: integer expected";
                return null;
            };

            /**
             * Creates a RemoveLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.RemoveLayerRequest} RemoveLayerRequest
             */
            RemoveLayerRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.RemoveLayerRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.RemoveLayerRequest();
                if (object.layerIndex != null)
                    if (Number(object.layerIndex) !== 0)
                        message.layerIndex = object.layerIndex >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a RemoveLayerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {zmk.keymap.RemoveLayerRequest} message RemoveLayerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RemoveLayerRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.layerIndex = 0;
                if (message.layerIndex != null && message.hasOwnProperty("layerIndex"))
                    object.layerIndex = message.layerIndex;
                return object;
            };

            /**
             * Converts this RemoveLayerRequest to JSON.
             * @function toJSON
             * @memberof zmk.keymap.RemoveLayerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RemoveLayerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RemoveLayerRequest
             * @function getTypeUrl
             * @memberof zmk.keymap.RemoveLayerRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RemoveLayerRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.RemoveLayerRequest";
            };

            return RemoveLayerRequest;
        })();

        keymap.RestoreLayerRequest = (function() {

            /**
             * Properties of a RestoreLayerRequest.
             * @typedef {Object} zmk.keymap.RestoreLayerRequest.$Properties
             * @property {number|null} [layerId] RestoreLayerRequest layerId
             * @property {number|null} [atIndex] RestoreLayerRequest atIndex
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RestoreLayerRequest.
             * @memberof zmk.keymap
             * @interface IRestoreLayerRequest
             * @augments zmk.keymap.RestoreLayerRequest.$Properties
             * @deprecated Use zmk.keymap.RestoreLayerRequest.$Properties instead.
             */

            /**
             * Shape of a RestoreLayerRequest.
             * @typedef {zmk.keymap.RestoreLayerRequest.$Properties} zmk.keymap.RestoreLayerRequest.$Shape
             */

            /**
             * Constructs a new RestoreLayerRequest.
             * @memberof zmk.keymap
             * @classdesc Represents a RestoreLayerRequest.
             * @constructor
             * @param {zmk.keymap.RestoreLayerRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RestoreLayerRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RestoreLayerRequest layerId.
             * @member {number} layerId
             * @memberof zmk.keymap.RestoreLayerRequest
             * @instance
             */
            RestoreLayerRequest.prototype.layerId = 0;

            /**
             * RestoreLayerRequest atIndex.
             * @member {number} atIndex
             * @memberof zmk.keymap.RestoreLayerRequest
             * @instance
             */
            RestoreLayerRequest.prototype.atIndex = 0;

            /**
             * Creates a new RestoreLayerRequest instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {zmk.keymap.RestoreLayerRequest.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.RestoreLayerRequest} RestoreLayerRequest instance
             * @type {{
             *   (properties: zmk.keymap.RestoreLayerRequest.$Shape): zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape;
             *   (properties?: zmk.keymap.RestoreLayerRequest.$Properties): zmk.keymap.RestoreLayerRequest;
             * }}
             */
            RestoreLayerRequest.create = function create(properties) {
                return new RestoreLayerRequest(properties);
            };

            /**
             * Encodes the specified RestoreLayerRequest message. Does not implicitly {@link zmk.keymap.RestoreLayerRequest.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {zmk.keymap.RestoreLayerRequest.$Properties} message RestoreLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestoreLayerRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.layerId != null && Object.hasOwnProperty.call(message, "layerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.layerId);
                if (message.atIndex != null && Object.hasOwnProperty.call(message, "atIndex"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.atIndex);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RestoreLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.RestoreLayerRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {zmk.keymap.RestoreLayerRequest.$Properties} message RestoreLayerRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RestoreLayerRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RestoreLayerRequest message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape} RestoreLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestoreLayerRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.RestoreLayerRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.layerId = value;
                            else
                                delete message.layerId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.atIndex = value;
                            else
                                delete message.atIndex;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RestoreLayerRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape} RestoreLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RestoreLayerRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RestoreLayerRequest message.
             * @function verify
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RestoreLayerRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.layerId != null && message.hasOwnProperty("layerId"))
                    if (!$util.isInteger(message.layerId))
                        return "layerId: integer expected";
                if (message.atIndex != null && message.hasOwnProperty("atIndex"))
                    if (!$util.isInteger(message.atIndex))
                        return "atIndex: integer expected";
                return null;
            };

            /**
             * Creates a RestoreLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.RestoreLayerRequest} RestoreLayerRequest
             */
            RestoreLayerRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.RestoreLayerRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.RestoreLayerRequest();
                if (object.layerId != null)
                    if (Number(object.layerId) !== 0)
                        message.layerId = object.layerId >>> 0;
                if (object.atIndex != null)
                    if (Number(object.atIndex) !== 0)
                        message.atIndex = object.atIndex >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a RestoreLayerRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {zmk.keymap.RestoreLayerRequest} message RestoreLayerRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RestoreLayerRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.layerId = 0;
                    object.atIndex = 0;
                }
                if (message.layerId != null && message.hasOwnProperty("layerId"))
                    object.layerId = message.layerId;
                if (message.atIndex != null && message.hasOwnProperty("atIndex"))
                    object.atIndex = message.atIndex;
                return object;
            };

            /**
             * Converts this RestoreLayerRequest to JSON.
             * @function toJSON
             * @memberof zmk.keymap.RestoreLayerRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RestoreLayerRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RestoreLayerRequest
             * @function getTypeUrl
             * @memberof zmk.keymap.RestoreLayerRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RestoreLayerRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.RestoreLayerRequest";
            };

            return RestoreLayerRequest;
        })();

        keymap.SetLayerPropsRequest = (function() {

            /**
             * Properties of a SetLayerPropsRequest.
             * @typedef {Object} zmk.keymap.SetLayerPropsRequest.$Properties
             * @property {number|null} [layerId] SetLayerPropsRequest layerId
             * @property {string|null} [name] SetLayerPropsRequest name
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a SetLayerPropsRequest.
             * @memberof zmk.keymap
             * @interface ISetLayerPropsRequest
             * @augments zmk.keymap.SetLayerPropsRequest.$Properties
             * @deprecated Use zmk.keymap.SetLayerPropsRequest.$Properties instead.
             */

            /**
             * Shape of a SetLayerPropsRequest.
             * @typedef {zmk.keymap.SetLayerPropsRequest.$Properties} zmk.keymap.SetLayerPropsRequest.$Shape
             */

            /**
             * Constructs a new SetLayerPropsRequest.
             * @memberof zmk.keymap
             * @classdesc Represents a SetLayerPropsRequest.
             * @constructor
             * @param {zmk.keymap.SetLayerPropsRequest.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function SetLayerPropsRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SetLayerPropsRequest layerId.
             * @member {number} layerId
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @instance
             */
            SetLayerPropsRequest.prototype.layerId = 0;

            /**
             * SetLayerPropsRequest name.
             * @member {string} name
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @instance
             */
            SetLayerPropsRequest.prototype.name = "";

            /**
             * Creates a new SetLayerPropsRequest instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {zmk.keymap.SetLayerPropsRequest.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.SetLayerPropsRequest} SetLayerPropsRequest instance
             * @type {{
             *   (properties: zmk.keymap.SetLayerPropsRequest.$Shape): zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape;
             *   (properties?: zmk.keymap.SetLayerPropsRequest.$Properties): zmk.keymap.SetLayerPropsRequest;
             * }}
             */
            SetLayerPropsRequest.create = function create(properties) {
                return new SetLayerPropsRequest(properties);
            };

            /**
             * Encodes the specified SetLayerPropsRequest message. Does not implicitly {@link zmk.keymap.SetLayerPropsRequest.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {zmk.keymap.SetLayerPropsRequest.$Properties} message SetLayerPropsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetLayerPropsRequest.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.layerId != null && Object.hasOwnProperty.call(message, "layerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.layerId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SetLayerPropsRequest message, length delimited. Does not implicitly {@link zmk.keymap.SetLayerPropsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {zmk.keymap.SetLayerPropsRequest.$Properties} message SetLayerPropsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetLayerPropsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a SetLayerPropsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape} SetLayerPropsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetLayerPropsRequest.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.SetLayerPropsRequest(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.layerId = value;
                            else
                                delete message.layerId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a SetLayerPropsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape} SetLayerPropsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetLayerPropsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SetLayerPropsRequest message.
             * @function verify
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetLayerPropsRequest.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.layerId != null && message.hasOwnProperty("layerId"))
                    if (!$util.isInteger(message.layerId))
                        return "layerId: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates a SetLayerPropsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.SetLayerPropsRequest} SetLayerPropsRequest
             */
            SetLayerPropsRequest.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.SetLayerPropsRequest)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.SetLayerPropsRequest();
                if (object.layerId != null)
                    if (Number(object.layerId) !== 0)
                        message.layerId = object.layerId >>> 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from a SetLayerPropsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {zmk.keymap.SetLayerPropsRequest} message SetLayerPropsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetLayerPropsRequest.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.layerId = 0;
                    object.name = "";
                }
                if (message.layerId != null && message.hasOwnProperty("layerId"))
                    object.layerId = message.layerId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this SetLayerPropsRequest to JSON.
             * @function toJSON
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetLayerPropsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SetLayerPropsRequest
             * @function getTypeUrl
             * @memberof zmk.keymap.SetLayerPropsRequest
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SetLayerPropsRequest.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.SetLayerPropsRequest";
            };

            return SetLayerPropsRequest;
        })();

        keymap.Keymap = (function() {

            /**
             * Properties of a Keymap.
             * @typedef {Object} zmk.keymap.Keymap.$Properties
             * @property {Array.<zmk.keymap.Layer.$Properties>|null} [layers] Keymap layers
             * @property {number|null} [availableLayers] Keymap availableLayers
             * @property {number|null} [maxLayerNameLength] Keymap maxLayerNameLength
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Keymap.
             * @memberof zmk.keymap
             * @interface IKeymap
             * @augments zmk.keymap.Keymap.$Properties
             * @deprecated Use zmk.keymap.Keymap.$Properties instead.
             */

            /**
             * Shape of a Keymap.
             * @typedef {zmk.keymap.Keymap.$Properties} zmk.keymap.Keymap.$Shape
             */

            /**
             * Constructs a new Keymap.
             * @memberof zmk.keymap
             * @classdesc Represents a Keymap.
             * @constructor
             * @param {zmk.keymap.Keymap.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Keymap(properties) {
                this.layers = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Keymap layers.
             * @member {Array.<zmk.keymap.Layer.$Properties>} layers
             * @memberof zmk.keymap.Keymap
             * @instance
             */
            Keymap.prototype.layers = $util.emptyArray;

            /**
             * Keymap availableLayers.
             * @member {number} availableLayers
             * @memberof zmk.keymap.Keymap
             * @instance
             */
            Keymap.prototype.availableLayers = 0;

            /**
             * Keymap maxLayerNameLength.
             * @member {number} maxLayerNameLength
             * @memberof zmk.keymap.Keymap
             * @instance
             */
            Keymap.prototype.maxLayerNameLength = 0;

            /**
             * Creates a new Keymap instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {zmk.keymap.Keymap.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.Keymap} Keymap instance
             * @type {{
             *   (properties: zmk.keymap.Keymap.$Shape): zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape;
             *   (properties?: zmk.keymap.Keymap.$Properties): zmk.keymap.Keymap;
             * }}
             */
            Keymap.create = function create(properties) {
                return new Keymap(properties);
            };

            /**
             * Encodes the specified Keymap message. Does not implicitly {@link zmk.keymap.Keymap.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {zmk.keymap.Keymap.$Properties} message Keymap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Keymap.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.layers != null && message.layers.length)
                    for (let i = 0; i < message.layers.length; ++i)
                        $root.zmk.keymap.Layer.encode(message.layers[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.availableLayers != null && Object.hasOwnProperty.call(message, "availableLayers"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.availableLayers);
                if (message.maxLayerNameLength != null && Object.hasOwnProperty.call(message, "maxLayerNameLength"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.maxLayerNameLength);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Keymap message, length delimited. Does not implicitly {@link zmk.keymap.Keymap.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {zmk.keymap.Keymap.$Properties} message Keymap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Keymap.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Keymap message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape} Keymap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Keymap.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.Keymap(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if (!(message.layers && message.layers.length))
                                message.layers = [];
                            message.layers.push($root.zmk.keymap.Layer.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.availableLayers = value;
                            else
                                delete message.availableLayers;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.maxLayerNameLength = value;
                            else
                                delete message.maxLayerNameLength;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Keymap message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape} Keymap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Keymap.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Keymap message.
             * @function verify
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Keymap.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.layers != null && message.hasOwnProperty("layers")) {
                    if (!Array.isArray(message.layers))
                        return "layers: array expected";
                    for (let i = 0; i < message.layers.length; ++i) {
                        let error = $root.zmk.keymap.Layer.verify(message.layers[i], _depth + 1);
                        if (error)
                            return "layers." + error;
                    }
                }
                if (message.availableLayers != null && message.hasOwnProperty("availableLayers"))
                    if (!$util.isInteger(message.availableLayers))
                        return "availableLayers: integer expected";
                if (message.maxLayerNameLength != null && message.hasOwnProperty("maxLayerNameLength"))
                    if (!$util.isInteger(message.maxLayerNameLength))
                        return "maxLayerNameLength: integer expected";
                return null;
            };

            /**
             * Creates a Keymap message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.Keymap} Keymap
             */
            Keymap.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.Keymap)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.Keymap();
                if (object.layers) {
                    if (!Array.isArray(object.layers))
                        throw TypeError(".zmk.keymap.Keymap.layers: array expected");
                    message.layers = Array(object.layers.length);
                    for (let i = 0; i < object.layers.length; ++i) {
                        if (typeof object.layers[i] !== "object")
                            throw TypeError(".zmk.keymap.Keymap.layers: object expected");
                        message.layers[i] = $root.zmk.keymap.Layer.fromObject(object.layers[i], _depth + 1);
                    }
                }
                if (object.availableLayers != null)
                    if (Number(object.availableLayers) !== 0)
                        message.availableLayers = object.availableLayers >>> 0;
                if (object.maxLayerNameLength != null)
                    if (Number(object.maxLayerNameLength) !== 0)
                        message.maxLayerNameLength = object.maxLayerNameLength >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Keymap message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {zmk.keymap.Keymap} message Keymap
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Keymap.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.layers = [];
                if (options.defaults) {
                    object.availableLayers = 0;
                    object.maxLayerNameLength = 0;
                }
                if (message.layers && message.layers.length) {
                    object.layers = Array(message.layers.length);
                    for (let j = 0; j < message.layers.length; ++j)
                        object.layers[j] = $root.zmk.keymap.Layer.toObject(message.layers[j], options, _depth + 1);
                }
                if (message.availableLayers != null && message.hasOwnProperty("availableLayers"))
                    object.availableLayers = message.availableLayers;
                if (message.maxLayerNameLength != null && message.hasOwnProperty("maxLayerNameLength"))
                    object.maxLayerNameLength = message.maxLayerNameLength;
                return object;
            };

            /**
             * Converts this Keymap to JSON.
             * @function toJSON
             * @memberof zmk.keymap.Keymap
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Keymap.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Keymap
             * @function getTypeUrl
             * @memberof zmk.keymap.Keymap
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Keymap.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.Keymap";
            };

            return Keymap;
        })();

        keymap.Layer = (function() {

            /**
             * Properties of a Layer.
             * @typedef {Object} zmk.keymap.Layer.$Properties
             * @property {number|null} [id] Layer id
             * @property {string|null} [name] Layer name
             * @property {Array.<zmk.keymap.BehaviorBinding.$Properties>|null} [bindings] Layer bindings
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Layer.
             * @memberof zmk.keymap
             * @interface ILayer
             * @augments zmk.keymap.Layer.$Properties
             * @deprecated Use zmk.keymap.Layer.$Properties instead.
             */

            /**
             * Shape of a Layer.
             * @typedef {zmk.keymap.Layer.$Properties} zmk.keymap.Layer.$Shape
             */

            /**
             * Constructs a new Layer.
             * @memberof zmk.keymap
             * @classdesc Represents a Layer.
             * @constructor
             * @param {zmk.keymap.Layer.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Layer(properties) {
                this.bindings = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Layer id.
             * @member {number} id
             * @memberof zmk.keymap.Layer
             * @instance
             */
            Layer.prototype.id = 0;

            /**
             * Layer name.
             * @member {string} name
             * @memberof zmk.keymap.Layer
             * @instance
             */
            Layer.prototype.name = "";

            /**
             * Layer bindings.
             * @member {Array.<zmk.keymap.BehaviorBinding.$Properties>} bindings
             * @memberof zmk.keymap.Layer
             * @instance
             */
            Layer.prototype.bindings = $util.emptyArray;

            /**
             * Creates a new Layer instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.Layer
             * @static
             * @param {zmk.keymap.Layer.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.Layer} Layer instance
             * @type {{
             *   (properties: zmk.keymap.Layer.$Shape): zmk.keymap.Layer & zmk.keymap.Layer.$Shape;
             *   (properties?: zmk.keymap.Layer.$Properties): zmk.keymap.Layer;
             * }}
             */
            Layer.create = function create(properties) {
                return new Layer(properties);
            };

            /**
             * Encodes the specified Layer message. Does not implicitly {@link zmk.keymap.Layer.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.Layer
             * @static
             * @param {zmk.keymap.Layer.$Properties} message Layer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Layer.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.bindings != null && message.bindings.length)
                    for (let i = 0; i < message.bindings.length; ++i)
                        $root.zmk.keymap.BehaviorBinding.encode(message.bindings[i], writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Layer message, length delimited. Does not implicitly {@link zmk.keymap.Layer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.Layer
             * @static
             * @param {zmk.keymap.Layer.$Properties} message Layer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Layer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Layer message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.Layer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.Layer & zmk.keymap.Layer.$Shape} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Layer.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.Layer(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.id = value;
                            else
                                delete message.id;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            if (!(message.bindings && message.bindings.length))
                                message.bindings = [];
                            message.bindings.push($root.zmk.keymap.BehaviorBinding.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Layer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.Layer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.Layer & zmk.keymap.Layer.$Shape} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Layer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Layer message.
             * @function verify
             * @memberof zmk.keymap.Layer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Layer.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.bindings != null && message.hasOwnProperty("bindings")) {
                    if (!Array.isArray(message.bindings))
                        return "bindings: array expected";
                    for (let i = 0; i < message.bindings.length; ++i) {
                        let error = $root.zmk.keymap.BehaviorBinding.verify(message.bindings[i], _depth + 1);
                        if (error)
                            return "bindings." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Layer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.Layer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.Layer} Layer
             */
            Layer.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.Layer)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.Layer();
                if (object.id != null)
                    if (Number(object.id) !== 0)
                        message.id = object.id >>> 0;
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.bindings) {
                    if (!Array.isArray(object.bindings))
                        throw TypeError(".zmk.keymap.Layer.bindings: array expected");
                    message.bindings = Array(object.bindings.length);
                    for (let i = 0; i < object.bindings.length; ++i) {
                        if (typeof object.bindings[i] !== "object")
                            throw TypeError(".zmk.keymap.Layer.bindings: object expected");
                        message.bindings[i] = $root.zmk.keymap.BehaviorBinding.fromObject(object.bindings[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Layer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.Layer
             * @static
             * @param {zmk.keymap.Layer} message Layer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Layer.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.bindings = [];
                if (options.defaults) {
                    object.id = 0;
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.bindings && message.bindings.length) {
                    object.bindings = Array(message.bindings.length);
                    for (let j = 0; j < message.bindings.length; ++j)
                        object.bindings[j] = $root.zmk.keymap.BehaviorBinding.toObject(message.bindings[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Layer to JSON.
             * @function toJSON
             * @memberof zmk.keymap.Layer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Layer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Layer
             * @function getTypeUrl
             * @memberof zmk.keymap.Layer
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Layer.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.Layer";
            };

            return Layer;
        })();

        keymap.BehaviorBinding = (function() {

            /**
             * Properties of a BehaviorBinding.
             * @typedef {Object} zmk.keymap.BehaviorBinding.$Properties
             * @property {number|null} [behaviorId] BehaviorBinding behaviorId
             * @property {number|null} [param1] BehaviorBinding param1
             * @property {number|null} [param2] BehaviorBinding param2
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a BehaviorBinding.
             * @memberof zmk.keymap
             * @interface IBehaviorBinding
             * @augments zmk.keymap.BehaviorBinding.$Properties
             * @deprecated Use zmk.keymap.BehaviorBinding.$Properties instead.
             */

            /**
             * Shape of a BehaviorBinding.
             * @typedef {zmk.keymap.BehaviorBinding.$Properties} zmk.keymap.BehaviorBinding.$Shape
             */

            /**
             * Constructs a new BehaviorBinding.
             * @memberof zmk.keymap
             * @classdesc Represents a BehaviorBinding.
             * @constructor
             * @param {zmk.keymap.BehaviorBinding.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function BehaviorBinding(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BehaviorBinding behaviorId.
             * @member {number} behaviorId
             * @memberof zmk.keymap.BehaviorBinding
             * @instance
             */
            BehaviorBinding.prototype.behaviorId = 0;

            /**
             * BehaviorBinding param1.
             * @member {number} param1
             * @memberof zmk.keymap.BehaviorBinding
             * @instance
             */
            BehaviorBinding.prototype.param1 = 0;

            /**
             * BehaviorBinding param2.
             * @member {number} param2
             * @memberof zmk.keymap.BehaviorBinding
             * @instance
             */
            BehaviorBinding.prototype.param2 = 0;

            /**
             * Creates a new BehaviorBinding instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {zmk.keymap.BehaviorBinding.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.BehaviorBinding} BehaviorBinding instance
             * @type {{
             *   (properties: zmk.keymap.BehaviorBinding.$Shape): zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape;
             *   (properties?: zmk.keymap.BehaviorBinding.$Properties): zmk.keymap.BehaviorBinding;
             * }}
             */
            BehaviorBinding.create = function create(properties) {
                return new BehaviorBinding(properties);
            };

            /**
             * Encodes the specified BehaviorBinding message. Does not implicitly {@link zmk.keymap.BehaviorBinding.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {zmk.keymap.BehaviorBinding.$Properties} message BehaviorBinding message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorBinding.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.behaviorId != null && Object.hasOwnProperty.call(message, "behaviorId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.behaviorId);
                if (message.param1 != null && Object.hasOwnProperty.call(message, "param1"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.param1);
                if (message.param2 != null && Object.hasOwnProperty.call(message, "param2"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.param2);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BehaviorBinding message, length delimited. Does not implicitly {@link zmk.keymap.BehaviorBinding.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {zmk.keymap.BehaviorBinding.$Properties} message BehaviorBinding message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BehaviorBinding.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a BehaviorBinding message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape} BehaviorBinding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorBinding.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.BehaviorBinding(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.behaviorId = value;
                            else
                                delete message.behaviorId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.param1 = value;
                            else
                                delete message.param1;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.param2 = value;
                            else
                                delete message.param2;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a BehaviorBinding message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape} BehaviorBinding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BehaviorBinding.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BehaviorBinding message.
             * @function verify
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BehaviorBinding.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.behaviorId != null && message.hasOwnProperty("behaviorId"))
                    if (!$util.isInteger(message.behaviorId))
                        return "behaviorId: integer expected";
                if (message.param1 != null && message.hasOwnProperty("param1"))
                    if (!$util.isInteger(message.param1))
                        return "param1: integer expected";
                if (message.param2 != null && message.hasOwnProperty("param2"))
                    if (!$util.isInteger(message.param2))
                        return "param2: integer expected";
                return null;
            };

            /**
             * Creates a BehaviorBinding message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.BehaviorBinding} BehaviorBinding
             */
            BehaviorBinding.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.BehaviorBinding)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.BehaviorBinding();
                if (object.behaviorId != null)
                    if (Number(object.behaviorId) !== 0)
                        message.behaviorId = object.behaviorId | 0;
                if (object.param1 != null)
                    if (Number(object.param1) !== 0)
                        message.param1 = object.param1 >>> 0;
                if (object.param2 != null)
                    if (Number(object.param2) !== 0)
                        message.param2 = object.param2 >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a BehaviorBinding message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {zmk.keymap.BehaviorBinding} message BehaviorBinding
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BehaviorBinding.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.behaviorId = 0;
                    object.param1 = 0;
                    object.param2 = 0;
                }
                if (message.behaviorId != null && message.hasOwnProperty("behaviorId"))
                    object.behaviorId = message.behaviorId;
                if (message.param1 != null && message.hasOwnProperty("param1"))
                    object.param1 = message.param1;
                if (message.param2 != null && message.hasOwnProperty("param2"))
                    object.param2 = message.param2;
                return object;
            };

            /**
             * Converts this BehaviorBinding to JSON.
             * @function toJSON
             * @memberof zmk.keymap.BehaviorBinding
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BehaviorBinding.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BehaviorBinding
             * @function getTypeUrl
             * @memberof zmk.keymap.BehaviorBinding
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BehaviorBinding.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.BehaviorBinding";
            };

            return BehaviorBinding;
        })();

        keymap.PhysicalLayouts = (function() {

            /**
             * Properties of a PhysicalLayouts.
             * @typedef {Object} zmk.keymap.PhysicalLayouts.$Properties
             * @property {number|null} [activeLayoutIndex] PhysicalLayouts activeLayoutIndex
             * @property {Array.<zmk.keymap.PhysicalLayout.$Properties>|null} [layouts] PhysicalLayouts layouts
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a PhysicalLayouts.
             * @memberof zmk.keymap
             * @interface IPhysicalLayouts
             * @augments zmk.keymap.PhysicalLayouts.$Properties
             * @deprecated Use zmk.keymap.PhysicalLayouts.$Properties instead.
             */

            /**
             * Shape of a PhysicalLayouts.
             * @typedef {zmk.keymap.PhysicalLayouts.$Properties} zmk.keymap.PhysicalLayouts.$Shape
             */

            /**
             * Constructs a new PhysicalLayouts.
             * @memberof zmk.keymap
             * @classdesc Represents a PhysicalLayouts.
             * @constructor
             * @param {zmk.keymap.PhysicalLayouts.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function PhysicalLayouts(properties) {
                this.layouts = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PhysicalLayouts activeLayoutIndex.
             * @member {number} activeLayoutIndex
             * @memberof zmk.keymap.PhysicalLayouts
             * @instance
             */
            PhysicalLayouts.prototype.activeLayoutIndex = 0;

            /**
             * PhysicalLayouts layouts.
             * @member {Array.<zmk.keymap.PhysicalLayout.$Properties>} layouts
             * @memberof zmk.keymap.PhysicalLayouts
             * @instance
             */
            PhysicalLayouts.prototype.layouts = $util.emptyArray;

            /**
             * Creates a new PhysicalLayouts instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {zmk.keymap.PhysicalLayouts.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.PhysicalLayouts} PhysicalLayouts instance
             * @type {{
             *   (properties: zmk.keymap.PhysicalLayouts.$Shape): zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape;
             *   (properties?: zmk.keymap.PhysicalLayouts.$Properties): zmk.keymap.PhysicalLayouts;
             * }}
             */
            PhysicalLayouts.create = function create(properties) {
                return new PhysicalLayouts(properties);
            };

            /**
             * Encodes the specified PhysicalLayouts message. Does not implicitly {@link zmk.keymap.PhysicalLayouts.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {zmk.keymap.PhysicalLayouts.$Properties} message PhysicalLayouts message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhysicalLayouts.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.activeLayoutIndex != null && Object.hasOwnProperty.call(message, "activeLayoutIndex"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.activeLayoutIndex);
                if (message.layouts != null && message.layouts.length)
                    for (let i = 0; i < message.layouts.length; ++i)
                        $root.zmk.keymap.PhysicalLayout.encode(message.layouts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PhysicalLayouts message, length delimited. Does not implicitly {@link zmk.keymap.PhysicalLayouts.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {zmk.keymap.PhysicalLayouts.$Properties} message PhysicalLayouts message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhysicalLayouts.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a PhysicalLayouts message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape} PhysicalLayouts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhysicalLayouts.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.PhysicalLayouts(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.activeLayoutIndex = value;
                            else
                                delete message.activeLayoutIndex;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.layouts && message.layouts.length))
                                message.layouts = [];
                            message.layouts.push($root.zmk.keymap.PhysicalLayout.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a PhysicalLayouts message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape} PhysicalLayouts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhysicalLayouts.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PhysicalLayouts message.
             * @function verify
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhysicalLayouts.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.activeLayoutIndex != null && message.hasOwnProperty("activeLayoutIndex"))
                    if (!$util.isInteger(message.activeLayoutIndex))
                        return "activeLayoutIndex: integer expected";
                if (message.layouts != null && message.hasOwnProperty("layouts")) {
                    if (!Array.isArray(message.layouts))
                        return "layouts: array expected";
                    for (let i = 0; i < message.layouts.length; ++i) {
                        let error = $root.zmk.keymap.PhysicalLayout.verify(message.layouts[i], _depth + 1);
                        if (error)
                            return "layouts." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PhysicalLayouts message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.PhysicalLayouts} PhysicalLayouts
             */
            PhysicalLayouts.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.PhysicalLayouts)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.PhysicalLayouts();
                if (object.activeLayoutIndex != null)
                    if (Number(object.activeLayoutIndex) !== 0)
                        message.activeLayoutIndex = object.activeLayoutIndex >>> 0;
                if (object.layouts) {
                    if (!Array.isArray(object.layouts))
                        throw TypeError(".zmk.keymap.PhysicalLayouts.layouts: array expected");
                    message.layouts = Array(object.layouts.length);
                    for (let i = 0; i < object.layouts.length; ++i) {
                        if (typeof object.layouts[i] !== "object")
                            throw TypeError(".zmk.keymap.PhysicalLayouts.layouts: object expected");
                        message.layouts[i] = $root.zmk.keymap.PhysicalLayout.fromObject(object.layouts[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PhysicalLayouts message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {zmk.keymap.PhysicalLayouts} message PhysicalLayouts
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhysicalLayouts.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.layouts = [];
                if (options.defaults)
                    object.activeLayoutIndex = 0;
                if (message.activeLayoutIndex != null && message.hasOwnProperty("activeLayoutIndex"))
                    object.activeLayoutIndex = message.activeLayoutIndex;
                if (message.layouts && message.layouts.length) {
                    object.layouts = Array(message.layouts.length);
                    for (let j = 0; j < message.layouts.length; ++j)
                        object.layouts[j] = $root.zmk.keymap.PhysicalLayout.toObject(message.layouts[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this PhysicalLayouts to JSON.
             * @function toJSON
             * @memberof zmk.keymap.PhysicalLayouts
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhysicalLayouts.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PhysicalLayouts
             * @function getTypeUrl
             * @memberof zmk.keymap.PhysicalLayouts
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PhysicalLayouts.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.PhysicalLayouts";
            };

            return PhysicalLayouts;
        })();

        keymap.PhysicalLayout = (function() {

            /**
             * Properties of a PhysicalLayout.
             * @typedef {Object} zmk.keymap.PhysicalLayout.$Properties
             * @property {string|null} [name] PhysicalLayout name
             * @property {Array.<zmk.keymap.KeyPhysicalAttrs.$Properties>|null} [keys] PhysicalLayout keys
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a PhysicalLayout.
             * @memberof zmk.keymap
             * @interface IPhysicalLayout
             * @augments zmk.keymap.PhysicalLayout.$Properties
             * @deprecated Use zmk.keymap.PhysicalLayout.$Properties instead.
             */

            /**
             * Shape of a PhysicalLayout.
             * @typedef {zmk.keymap.PhysicalLayout.$Properties} zmk.keymap.PhysicalLayout.$Shape
             */

            /**
             * Constructs a new PhysicalLayout.
             * @memberof zmk.keymap
             * @classdesc Represents a PhysicalLayout.
             * @constructor
             * @param {zmk.keymap.PhysicalLayout.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function PhysicalLayout(properties) {
                this.keys = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PhysicalLayout name.
             * @member {string} name
             * @memberof zmk.keymap.PhysicalLayout
             * @instance
             */
            PhysicalLayout.prototype.name = "";

            /**
             * PhysicalLayout keys.
             * @member {Array.<zmk.keymap.KeyPhysicalAttrs.$Properties>} keys
             * @memberof zmk.keymap.PhysicalLayout
             * @instance
             */
            PhysicalLayout.prototype.keys = $util.emptyArray;

            /**
             * Creates a new PhysicalLayout instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {zmk.keymap.PhysicalLayout.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.PhysicalLayout} PhysicalLayout instance
             * @type {{
             *   (properties: zmk.keymap.PhysicalLayout.$Shape): zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape;
             *   (properties?: zmk.keymap.PhysicalLayout.$Properties): zmk.keymap.PhysicalLayout;
             * }}
             */
            PhysicalLayout.create = function create(properties) {
                return new PhysicalLayout(properties);
            };

            /**
             * Encodes the specified PhysicalLayout message. Does not implicitly {@link zmk.keymap.PhysicalLayout.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {zmk.keymap.PhysicalLayout.$Properties} message PhysicalLayout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhysicalLayout.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.keys != null && message.keys.length)
                    for (let i = 0; i < message.keys.length; ++i)
                        $root.zmk.keymap.KeyPhysicalAttrs.encode(message.keys[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PhysicalLayout message, length delimited. Does not implicitly {@link zmk.keymap.PhysicalLayout.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {zmk.keymap.PhysicalLayout.$Properties} message PhysicalLayout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhysicalLayout.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a PhysicalLayout message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape} PhysicalLayout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhysicalLayout.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.PhysicalLayout(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            if ((value = reader.string()).length)
                                message.name = value;
                            else
                                delete message.name;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            if (!(message.keys && message.keys.length))
                                message.keys = [];
                            message.keys.push($root.zmk.keymap.KeyPhysicalAttrs.decode(reader, reader.uint32(), undefined, _depth + 1));
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a PhysicalLayout message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape} PhysicalLayout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhysicalLayout.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PhysicalLayout message.
             * @function verify
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhysicalLayout.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.keys != null && message.hasOwnProperty("keys")) {
                    if (!Array.isArray(message.keys))
                        return "keys: array expected";
                    for (let i = 0; i < message.keys.length; ++i) {
                        let error = $root.zmk.keymap.KeyPhysicalAttrs.verify(message.keys[i], _depth + 1);
                        if (error)
                            return "keys." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PhysicalLayout message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.PhysicalLayout} PhysicalLayout
             */
            PhysicalLayout.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.PhysicalLayout)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.PhysicalLayout();
                if (object.name != null)
                    if (typeof object.name !== "string" || object.name.length)
                        message.name = String(object.name);
                if (object.keys) {
                    if (!Array.isArray(object.keys))
                        throw TypeError(".zmk.keymap.PhysicalLayout.keys: array expected");
                    message.keys = Array(object.keys.length);
                    for (let i = 0; i < object.keys.length; ++i) {
                        if (typeof object.keys[i] !== "object")
                            throw TypeError(".zmk.keymap.PhysicalLayout.keys: object expected");
                        message.keys[i] = $root.zmk.keymap.KeyPhysicalAttrs.fromObject(object.keys[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PhysicalLayout message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {zmk.keymap.PhysicalLayout} message PhysicalLayout
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhysicalLayout.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.arrays || options.defaults)
                    object.keys = [];
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.keys && message.keys.length) {
                    object.keys = Array(message.keys.length);
                    for (let j = 0; j < message.keys.length; ++j)
                        object.keys[j] = $root.zmk.keymap.KeyPhysicalAttrs.toObject(message.keys[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this PhysicalLayout to JSON.
             * @function toJSON
             * @memberof zmk.keymap.PhysicalLayout
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhysicalLayout.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PhysicalLayout
             * @function getTypeUrl
             * @memberof zmk.keymap.PhysicalLayout
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PhysicalLayout.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.PhysicalLayout";
            };

            return PhysicalLayout;
        })();

        keymap.KeyPhysicalAttrs = (function() {

            /**
             * Properties of a KeyPhysicalAttrs.
             * @typedef {Object} zmk.keymap.KeyPhysicalAttrs.$Properties
             * @property {number|null} [width] KeyPhysicalAttrs width
             * @property {number|null} [height] KeyPhysicalAttrs height
             * @property {number|null} [x] KeyPhysicalAttrs x
             * @property {number|null} [y] KeyPhysicalAttrs y
             * @property {number|null} [r] KeyPhysicalAttrs r
             * @property {number|null} [rx] KeyPhysicalAttrs rx
             * @property {number|null} [ry] KeyPhysicalAttrs ry
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a KeyPhysicalAttrs.
             * @memberof zmk.keymap
             * @interface IKeyPhysicalAttrs
             * @augments zmk.keymap.KeyPhysicalAttrs.$Properties
             * @deprecated Use zmk.keymap.KeyPhysicalAttrs.$Properties instead.
             */

            /**
             * Shape of a KeyPhysicalAttrs.
             * @typedef {zmk.keymap.KeyPhysicalAttrs.$Properties} zmk.keymap.KeyPhysicalAttrs.$Shape
             */

            /**
             * Constructs a new KeyPhysicalAttrs.
             * @memberof zmk.keymap
             * @classdesc Represents a KeyPhysicalAttrs.
             * @constructor
             * @param {zmk.keymap.KeyPhysicalAttrs.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function KeyPhysicalAttrs(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * KeyPhysicalAttrs width.
             * @member {number} width
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             */
            KeyPhysicalAttrs.prototype.width = 0;

            /**
             * KeyPhysicalAttrs height.
             * @member {number} height
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             */
            KeyPhysicalAttrs.prototype.height = 0;

            /**
             * KeyPhysicalAttrs x.
             * @member {number} x
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             */
            KeyPhysicalAttrs.prototype.x = 0;

            /**
             * KeyPhysicalAttrs y.
             * @member {number} y
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             */
            KeyPhysicalAttrs.prototype.y = 0;

            /**
             * KeyPhysicalAttrs r.
             * @member {number} r
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             */
            KeyPhysicalAttrs.prototype.r = 0;

            /**
             * KeyPhysicalAttrs rx.
             * @member {number} rx
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             */
            KeyPhysicalAttrs.prototype.rx = 0;

            /**
             * KeyPhysicalAttrs ry.
             * @member {number} ry
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             */
            KeyPhysicalAttrs.prototype.ry = 0;

            /**
             * Creates a new KeyPhysicalAttrs instance using the specified properties.
             * @function create
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {zmk.keymap.KeyPhysicalAttrs.$Properties=} [properties] Properties to set
             * @returns {zmk.keymap.KeyPhysicalAttrs} KeyPhysicalAttrs instance
             * @type {{
             *   (properties: zmk.keymap.KeyPhysicalAttrs.$Shape): zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape;
             *   (properties?: zmk.keymap.KeyPhysicalAttrs.$Properties): zmk.keymap.KeyPhysicalAttrs;
             * }}
             */
            KeyPhysicalAttrs.create = function create(properties) {
                return new KeyPhysicalAttrs(properties);
            };

            /**
             * Encodes the specified KeyPhysicalAttrs message. Does not implicitly {@link zmk.keymap.KeyPhysicalAttrs.verify|verify} messages.
             * @function encode
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {zmk.keymap.KeyPhysicalAttrs.$Properties} message KeyPhysicalAttrs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyPhysicalAttrs.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 1, wireType 0 =*/8).sint32(message.width);
                if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 2, wireType 0 =*/16).sint32(message.height);
                if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                    writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.x);
                if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                    writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.y);
                if (message.r != null && Object.hasOwnProperty.call(message, "r"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint32(message.r);
                if (message.rx != null && Object.hasOwnProperty.call(message, "rx"))
                    writer.uint32(/* id 6, wireType 0 =*/48).sint32(message.rx);
                if (message.ry != null && Object.hasOwnProperty.call(message, "ry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.ry);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified KeyPhysicalAttrs message, length delimited. Does not implicitly {@link zmk.keymap.KeyPhysicalAttrs.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {zmk.keymap.KeyPhysicalAttrs.$Properties} message KeyPhysicalAttrs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyPhysicalAttrs.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a KeyPhysicalAttrs message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape} KeyPhysicalAttrs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyPhysicalAttrs.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.keymap.KeyPhysicalAttrs(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.width = value;
                            else
                                delete message.width;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.height = value;
                            else
                                delete message.height;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.x = value;
                            else
                                delete message.x;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.y = value;
                            else
                                delete message.y;
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.r = value;
                            else
                                delete message.r;
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.rx = value;
                            else
                                delete message.rx;
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.sint32())
                                message.ry = value;
                            else
                                delete message.ry;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a KeyPhysicalAttrs message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape} KeyPhysicalAttrs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyPhysicalAttrs.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a KeyPhysicalAttrs message.
             * @function verify
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KeyPhysicalAttrs.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height))
                        return "height: integer expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x))
                        return "x: integer expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y))
                        return "y: integer expected";
                if (message.r != null && message.hasOwnProperty("r"))
                    if (!$util.isInteger(message.r))
                        return "r: integer expected";
                if (message.rx != null && message.hasOwnProperty("rx"))
                    if (!$util.isInteger(message.rx))
                        return "rx: integer expected";
                if (message.ry != null && message.hasOwnProperty("ry"))
                    if (!$util.isInteger(message.ry))
                        return "ry: integer expected";
                return null;
            };

            /**
             * Creates a KeyPhysicalAttrs message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.keymap.KeyPhysicalAttrs} KeyPhysicalAttrs
             */
            KeyPhysicalAttrs.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.keymap.KeyPhysicalAttrs)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.keymap.KeyPhysicalAttrs();
                if (object.width != null)
                    if (Number(object.width) !== 0)
                        message.width = object.width | 0;
                if (object.height != null)
                    if (Number(object.height) !== 0)
                        message.height = object.height | 0;
                if (object.x != null)
                    if (Number(object.x) !== 0)
                        message.x = object.x | 0;
                if (object.y != null)
                    if (Number(object.y) !== 0)
                        message.y = object.y | 0;
                if (object.r != null)
                    if (Number(object.r) !== 0)
                        message.r = object.r | 0;
                if (object.rx != null)
                    if (Number(object.rx) !== 0)
                        message.rx = object.rx | 0;
                if (object.ry != null)
                    if (Number(object.ry) !== 0)
                        message.ry = object.ry | 0;
                return message;
            };

            /**
             * Creates a plain object from a KeyPhysicalAttrs message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {zmk.keymap.KeyPhysicalAttrs} message KeyPhysicalAttrs
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KeyPhysicalAttrs.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults) {
                    object.width = 0;
                    object.height = 0;
                    object.x = 0;
                    object.y = 0;
                    object.r = 0;
                    object.rx = 0;
                    object.ry = 0;
                }
                if (message.width != null && message.hasOwnProperty("width"))
                    object.width = message.width;
                if (message.height != null && message.hasOwnProperty("height"))
                    object.height = message.height;
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = message.y;
                if (message.r != null && message.hasOwnProperty("r"))
                    object.r = message.r;
                if (message.rx != null && message.hasOwnProperty("rx"))
                    object.rx = message.rx;
                if (message.ry != null && message.hasOwnProperty("ry"))
                    object.ry = message.ry;
                return object;
            };

            /**
             * Converts this KeyPhysicalAttrs to JSON.
             * @function toJSON
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KeyPhysicalAttrs.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for KeyPhysicalAttrs
             * @function getTypeUrl
             * @memberof zmk.keymap.KeyPhysicalAttrs
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            KeyPhysicalAttrs.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.keymap.KeyPhysicalAttrs";
            };

            return KeyPhysicalAttrs;
        })();

        return keymap;
    })();

    zmk.meta = (function() {

        /**
         * Namespace meta.
         * @memberof zmk
         * @namespace
         */
        const meta = {};

        /**
         * ErrorConditions enum.
         * @name zmk.meta.ErrorConditions
         * @enum {number}
         * @property {number} GENERIC=0 GENERIC value
         * @property {number} UNLOCK_REQUIRED=1 UNLOCK_REQUIRED value
         * @property {number} RPC_NOT_FOUND=2 RPC_NOT_FOUND value
         * @property {number} MSG_DECODE_FAILED=3 MSG_DECODE_FAILED value
         * @property {number} MSG_ENCODE_FAILED=4 MSG_ENCODE_FAILED value
         */
        meta.ErrorConditions = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GENERIC"] = 0;
            values[valuesById[1] = "UNLOCK_REQUIRED"] = 1;
            values[valuesById[2] = "RPC_NOT_FOUND"] = 2;
            values[valuesById[3] = "MSG_DECODE_FAILED"] = 3;
            values[valuesById[4] = "MSG_ENCODE_FAILED"] = 4;
            return values;
        })();

        meta.Response = (function() {

            /**
             * Properties of a Response.
             * @typedef {Object} zmk.meta.Response.$Properties
             * @property {boolean|null} [noResponse] Response noResponse
             * @property {zmk.meta.ErrorConditions|null} [simpleError] Response simpleError
             * @property {"noResponse"|"simpleError"} [responseType] Response responseType
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Response.
             * @memberof zmk.meta
             * @interface IResponse
             * @augments zmk.meta.Response.$Properties
             * @deprecated Use zmk.meta.Response.$Properties instead.
             */

            /**
             * Narrowed shape of a Response.
             * @typedef {{
             *   noResponse?: boolean|null;
             *   simpleError?: zmk.meta.ErrorConditions|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ responseType?: undefined; noResponse?: null; simpleError?: null }|{ responseType?: "noResponse"; noResponse: boolean; simpleError?: null }|{ responseType?: "simpleError"; noResponse?: null; simpleError: zmk.meta.ErrorConditions })
             * )} zmk.meta.Response.$Shape
             */

            /**
             * Constructs a new Response.
             * @memberof zmk.meta
             * @classdesc Represents a Response.
             * @constructor
             * @param {zmk.meta.Response.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Response(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response noResponse.
             * @member {boolean|null|undefined} noResponse
             * @memberof zmk.meta.Response
             * @instance
             */
            Response.prototype.noResponse = null;

            /**
             * Response simpleError.
             * @member {zmk.meta.ErrorConditions|null|undefined} simpleError
             * @memberof zmk.meta.Response
             * @instance
             */
            Response.prototype.simpleError = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Response responseType.
             * @member {"noResponse"|"simpleError"|undefined} responseType
             * @memberof zmk.meta.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "responseType", {
                get: $util.oneOfGetter($oneOfFields = ["noResponse", "simpleError"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof zmk.meta.Response
             * @static
             * @param {zmk.meta.Response.$Properties=} [properties] Properties to set
             * @returns {zmk.meta.Response} Response instance
             * @type {{
             *   (properties: zmk.meta.Response.$Shape): zmk.meta.Response & zmk.meta.Response.$Shape;
             *   (properties?: zmk.meta.Response.$Properties): zmk.meta.Response;
             * }}
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.meta.Response.verify|verify} messages.
             * @function encode
             * @memberof zmk.meta.Response
             * @static
             * @param {zmk.meta.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.noResponse != null && Object.hasOwnProperty.call(message, "noResponse"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.noResponse);
                if (message.simpleError != null && Object.hasOwnProperty.call(message, "simpleError"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.simpleError);
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.meta.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.meta.Response
             * @static
             * @param {zmk.meta.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.meta.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.meta.Response & zmk.meta.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.meta.Response();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.noResponse = reader.bool();
                            message.responseType = "noResponse";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.simpleError = reader.int32();
                            message.responseType = "simpleError";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.meta.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.meta.Response & zmk.meta.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Response message.
             * @function verify
             * @memberof zmk.meta.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.noResponse != null && message.hasOwnProperty("noResponse")) {
                    properties.responseType = 1;
                    if (typeof message.noResponse !== "boolean")
                        return "noResponse: boolean expected";
                }
                if (message.simpleError != null && message.hasOwnProperty("simpleError")) {
                    if (properties.responseType === 1)
                        return "responseType: multiple values";
                    properties.responseType = 1;
                    switch (message.simpleError) {
                    default:
                        return "simpleError: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.meta.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.meta.Response} Response
             */
            Response.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.meta.Response)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.meta.Response();
                if (object.noResponse != null)
                    message.noResponse = Boolean(object.noResponse);
                switch (object.simpleError) {
                default:
                    if (typeof object.simpleError === "number") {
                        message.simpleError = object.simpleError;
                        break;
                    }
                    break;
                case "GENERIC":
                case 0:
                    message.simpleError = 0;
                    break;
                case "UNLOCK_REQUIRED":
                case 1:
                    message.simpleError = 1;
                    break;
                case "RPC_NOT_FOUND":
                case 2:
                    message.simpleError = 2;
                    break;
                case "MSG_DECODE_FAILED":
                case 3:
                    message.simpleError = 3;
                    break;
                case "MSG_ENCODE_FAILED":
                case 4:
                    message.simpleError = 4;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.meta.Response
             * @static
             * @param {zmk.meta.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.noResponse != null && message.hasOwnProperty("noResponse")) {
                    object.noResponse = message.noResponse;
                    if (options.oneofs)
                        object.responseType = "noResponse";
                }
                if (message.simpleError != null && message.hasOwnProperty("simpleError")) {
                    object.simpleError = options.enums === String ? $root.zmk.meta.ErrorConditions[message.simpleError] === undefined ? message.simpleError : $root.zmk.meta.ErrorConditions[message.simpleError] : message.simpleError;
                    if (options.oneofs)
                        object.responseType = "simpleError";
                }
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof zmk.meta.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Response
             * @function getTypeUrl
             * @memberof zmk.meta.Response
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Response.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.meta.Response";
            };

            return Response;
        })();

        return meta;
    })();

    zmk.studio = (function() {

        /**
         * Namespace studio.
         * @memberof zmk
         * @namespace
         */
        const studio = {};

        studio.Request = (function() {

            /**
             * Properties of a Request.
             * @typedef {Object} zmk.studio.Request.$Properties
             * @property {number|null} [requestId] Request requestId
             * @property {zmk.core.Request.$Properties|null} [core] Request core
             * @property {zmk.behaviors.Request.$Properties|null} [behaviors] Request behaviors
             * @property {zmk.keymap.Request.$Properties|null} [keymap] Request keymap
             * @property {"core"|"behaviors"|"keymap"} [subsystem] Request subsystem
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Request.
             * @memberof zmk.studio
             * @interface IRequest
             * @augments zmk.studio.Request.$Properties
             * @deprecated Use zmk.studio.Request.$Properties instead.
             */

            /**
             * Narrowed shape of a Request.
             * @typedef {{
             *   requestId?: number|null;
             *   core?: zmk.core.Request.$Shape|null;
             *   behaviors?: zmk.behaviors.Request.$Shape|null;
             *   keymap?: zmk.keymap.Request.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ subsystem?: undefined; core?: null; behaviors?: null; keymap?: null }|{ subsystem?: "core"; core: zmk.core.Request.$Shape; behaviors?: null; keymap?: null }|{ subsystem?: "behaviors"; core?: null; behaviors: zmk.behaviors.Request.$Shape; keymap?: null }|{ subsystem?: "keymap"; core?: null; behaviors?: null; keymap: zmk.keymap.Request.$Shape })
             * )} zmk.studio.Request.$Shape
             */

            /**
             * Constructs a new Request.
             * @memberof zmk.studio
             * @classdesc Represents a Request.
             * @constructor
             * @param {zmk.studio.Request.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Request(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Request requestId.
             * @member {number} requestId
             * @memberof zmk.studio.Request
             * @instance
             */
            Request.prototype.requestId = 0;

            /**
             * Request core.
             * @member {zmk.core.Request.$Properties|null|undefined} core
             * @memberof zmk.studio.Request
             * @instance
             */
            Request.prototype.core = null;

            /**
             * Request behaviors.
             * @member {zmk.behaviors.Request.$Properties|null|undefined} behaviors
             * @memberof zmk.studio.Request
             * @instance
             */
            Request.prototype.behaviors = null;

            /**
             * Request keymap.
             * @member {zmk.keymap.Request.$Properties|null|undefined} keymap
             * @memberof zmk.studio.Request
             * @instance
             */
            Request.prototype.keymap = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Request subsystem.
             * @member {"core"|"behaviors"|"keymap"|undefined} subsystem
             * @memberof zmk.studio.Request
             * @instance
             */
            Object.defineProperty(Request.prototype, "subsystem", {
                get: $util.oneOfGetter($oneOfFields = ["core", "behaviors", "keymap"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Request instance using the specified properties.
             * @function create
             * @memberof zmk.studio.Request
             * @static
             * @param {zmk.studio.Request.$Properties=} [properties] Properties to set
             * @returns {zmk.studio.Request} Request instance
             * @type {{
             *   (properties: zmk.studio.Request.$Shape): zmk.studio.Request & zmk.studio.Request.$Shape;
             *   (properties?: zmk.studio.Request.$Properties): zmk.studio.Request;
             * }}
             */
            Request.create = function create(properties) {
                return new Request(properties);
            };

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.studio.Request.verify|verify} messages.
             * @function encode
             * @memberof zmk.studio.Request
             * @static
             * @param {zmk.studio.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.core != null && Object.hasOwnProperty.call(message, "core"))
                    $root.zmk.core.Request.encode(message.core, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.behaviors != null && Object.hasOwnProperty.call(message, "behaviors"))
                    $root.zmk.behaviors.Request.encode(message.behaviors, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.keymap != null && Object.hasOwnProperty.call(message, "keymap"))
                    $root.zmk.keymap.Request.encode(message.keymap, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.studio.Request.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.studio.Request
             * @static
             * @param {zmk.studio.Request.$Properties} message Request message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Request.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.studio.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.studio.Request & zmk.studio.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.studio.Request(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.requestId = value;
                            else
                                delete message.requestId;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.core = $root.zmk.core.Request.decode(reader, reader.uint32(), undefined, _depth + 1, message.core);
                            message.subsystem = "core";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.behaviors = $root.zmk.behaviors.Request.decode(reader, reader.uint32(), undefined, _depth + 1, message.behaviors);
                            message.subsystem = "behaviors";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.keymap = $root.zmk.keymap.Request.decode(reader, reader.uint32(), undefined, _depth + 1, message.keymap);
                            message.subsystem = "keymap";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.studio.Request
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.studio.Request & zmk.studio.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Request.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Request message.
             * @function verify
             * @memberof zmk.studio.Request
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Request.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.core != null && message.hasOwnProperty("core")) {
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.core.Request.verify(message.core, _depth + 1);
                        if (error)
                            return "core." + error;
                    }
                }
                if (message.behaviors != null && message.hasOwnProperty("behaviors")) {
                    if (properties.subsystem === 1)
                        return "subsystem: multiple values";
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.behaviors.Request.verify(message.behaviors, _depth + 1);
                        if (error)
                            return "behaviors." + error;
                    }
                }
                if (message.keymap != null && message.hasOwnProperty("keymap")) {
                    if (properties.subsystem === 1)
                        return "subsystem: multiple values";
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.keymap.Request.verify(message.keymap, _depth + 1);
                        if (error)
                            return "keymap." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.studio.Request
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.studio.Request} Request
             */
            Request.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.studio.Request)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.studio.Request();
                if (object.requestId != null)
                    if (Number(object.requestId) !== 0)
                        message.requestId = object.requestId >>> 0;
                if (object.core != null) {
                    if (typeof object.core !== "object")
                        throw TypeError(".zmk.studio.Request.core: object expected");
                    message.core = $root.zmk.core.Request.fromObject(object.core, _depth + 1);
                }
                if (object.behaviors != null) {
                    if (typeof object.behaviors !== "object")
                        throw TypeError(".zmk.studio.Request.behaviors: object expected");
                    message.behaviors = $root.zmk.behaviors.Request.fromObject(object.behaviors, _depth + 1);
                }
                if (object.keymap != null) {
                    if (typeof object.keymap !== "object")
                        throw TypeError(".zmk.studio.Request.keymap: object expected");
                    message.keymap = $root.zmk.keymap.Request.fromObject(object.keymap, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.studio.Request
             * @static
             * @param {zmk.studio.Request} message Request
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Request.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.core != null && message.hasOwnProperty("core")) {
                    object.core = $root.zmk.core.Request.toObject(message.core, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "core";
                }
                if (message.behaviors != null && message.hasOwnProperty("behaviors")) {
                    object.behaviors = $root.zmk.behaviors.Request.toObject(message.behaviors, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "behaviors";
                }
                if (message.keymap != null && message.hasOwnProperty("keymap")) {
                    object.keymap = $root.zmk.keymap.Request.toObject(message.keymap, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "keymap";
                }
                return object;
            };

            /**
             * Converts this Request to JSON.
             * @function toJSON
             * @memberof zmk.studio.Request
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Request.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Request
             * @function getTypeUrl
             * @memberof zmk.studio.Request
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Request.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.studio.Request";
            };

            return Request;
        })();

        studio.Response = (function() {

            /**
             * Properties of a Response.
             * @typedef {Object} zmk.studio.Response.$Properties
             * @property {zmk.studio.RequestResponse.$Properties|null} [requestResponse] Response requestResponse
             * @property {zmk.studio.Notification.$Properties|null} [notification] Response notification
             * @property {"requestResponse"|"notification"} [type] Response type
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Response.
             * @memberof zmk.studio
             * @interface IResponse
             * @augments zmk.studio.Response.$Properties
             * @deprecated Use zmk.studio.Response.$Properties instead.
             */

            /**
             * Narrowed shape of a Response.
             * @typedef {{
             *   requestResponse?: zmk.studio.RequestResponse.$Shape|null;
             *   notification?: zmk.studio.Notification.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ type?: undefined; requestResponse?: null; notification?: null }|{ type?: "requestResponse"; requestResponse: zmk.studio.RequestResponse.$Shape; notification?: null }|{ type?: "notification"; requestResponse?: null; notification: zmk.studio.Notification.$Shape })
             * )} zmk.studio.Response.$Shape
             */

            /**
             * Constructs a new Response.
             * @memberof zmk.studio
             * @classdesc Represents a Response.
             * @constructor
             * @param {zmk.studio.Response.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Response(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Response requestResponse.
             * @member {zmk.studio.RequestResponse.$Properties|null|undefined} requestResponse
             * @memberof zmk.studio.Response
             * @instance
             */
            Response.prototype.requestResponse = null;

            /**
             * Response notification.
             * @member {zmk.studio.Notification.$Properties|null|undefined} notification
             * @memberof zmk.studio.Response
             * @instance
             */
            Response.prototype.notification = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Response type.
             * @member {"requestResponse"|"notification"|undefined} type
             * @memberof zmk.studio.Response
             * @instance
             */
            Object.defineProperty(Response.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["requestResponse", "notification"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Response instance using the specified properties.
             * @function create
             * @memberof zmk.studio.Response
             * @static
             * @param {zmk.studio.Response.$Properties=} [properties] Properties to set
             * @returns {zmk.studio.Response} Response instance
             * @type {{
             *   (properties: zmk.studio.Response.$Shape): zmk.studio.Response & zmk.studio.Response.$Shape;
             *   (properties?: zmk.studio.Response.$Properties): zmk.studio.Response;
             * }}
             */
            Response.create = function create(properties) {
                return new Response(properties);
            };

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.studio.Response.verify|verify} messages.
             * @function encode
             * @memberof zmk.studio.Response
             * @static
             * @param {zmk.studio.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.requestResponse != null && Object.hasOwnProperty.call(message, "requestResponse"))
                    $root.zmk.studio.RequestResponse.encode(message.requestResponse, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
                if (message.notification != null && Object.hasOwnProperty.call(message, "notification"))
                    $root.zmk.studio.Notification.encode(message.notification, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.studio.Response.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.studio.Response
             * @static
             * @param {zmk.studio.Response.$Properties} message Response message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Response.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.studio.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.studio.Response & zmk.studio.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.studio.Response();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 2)
                                break;
                            message.requestResponse = $root.zmk.studio.RequestResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.requestResponse);
                            message.type = "requestResponse";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.notification = $root.zmk.studio.Notification.decode(reader, reader.uint32(), undefined, _depth + 1, message.notification);
                            message.type = "notification";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.studio.Response
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.studio.Response & zmk.studio.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Response.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Response message.
             * @function verify
             * @memberof zmk.studio.Response
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Response.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.requestResponse != null && message.hasOwnProperty("requestResponse")) {
                    properties.type = 1;
                    {
                        let error = $root.zmk.studio.RequestResponse.verify(message.requestResponse, _depth + 1);
                        if (error)
                            return "requestResponse." + error;
                    }
                }
                if (message.notification != null && message.hasOwnProperty("notification")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        let error = $root.zmk.studio.Notification.verify(message.notification, _depth + 1);
                        if (error)
                            return "notification." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.studio.Response
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.studio.Response} Response
             */
            Response.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.studio.Response)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.studio.Response();
                if (object.requestResponse != null) {
                    if (typeof object.requestResponse !== "object")
                        throw TypeError(".zmk.studio.Response.requestResponse: object expected");
                    message.requestResponse = $root.zmk.studio.RequestResponse.fromObject(object.requestResponse, _depth + 1);
                }
                if (object.notification != null) {
                    if (typeof object.notification !== "object")
                        throw TypeError(".zmk.studio.Response.notification: object expected");
                    message.notification = $root.zmk.studio.Notification.fromObject(object.notification, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.studio.Response
             * @static
             * @param {zmk.studio.Response} message Response
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Response.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.requestResponse != null && message.hasOwnProperty("requestResponse")) {
                    object.requestResponse = $root.zmk.studio.RequestResponse.toObject(message.requestResponse, options, _depth + 1);
                    if (options.oneofs)
                        object.type = "requestResponse";
                }
                if (message.notification != null && message.hasOwnProperty("notification")) {
                    object.notification = $root.zmk.studio.Notification.toObject(message.notification, options, _depth + 1);
                    if (options.oneofs)
                        object.type = "notification";
                }
                return object;
            };

            /**
             * Converts this Response to JSON.
             * @function toJSON
             * @memberof zmk.studio.Response
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Response.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Response
             * @function getTypeUrl
             * @memberof zmk.studio.Response
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Response.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.studio.Response";
            };

            return Response;
        })();

        studio.RequestResponse = (function() {

            /**
             * Properties of a RequestResponse.
             * @typedef {Object} zmk.studio.RequestResponse.$Properties
             * @property {number|null} [requestId] RequestResponse requestId
             * @property {zmk.meta.Response.$Properties|null} [meta] RequestResponse meta
             * @property {zmk.core.Response.$Properties|null} [core] RequestResponse core
             * @property {zmk.behaviors.Response.$Properties|null} [behaviors] RequestResponse behaviors
             * @property {zmk.keymap.Response.$Properties|null} [keymap] RequestResponse keymap
             * @property {"meta"|"core"|"behaviors"|"keymap"} [subsystem] RequestResponse subsystem
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a RequestResponse.
             * @memberof zmk.studio
             * @interface IRequestResponse
             * @augments zmk.studio.RequestResponse.$Properties
             * @deprecated Use zmk.studio.RequestResponse.$Properties instead.
             */

            /**
             * Narrowed shape of a RequestResponse.
             * @typedef {{
             *   requestId?: number|null;
             *   meta?: zmk.meta.Response.$Shape|null;
             *   core?: zmk.core.Response.$Shape|null;
             *   behaviors?: zmk.behaviors.Response.$Shape|null;
             *   keymap?: zmk.keymap.Response.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ subsystem?: undefined; meta?: null; core?: null; behaviors?: null; keymap?: null }|{ subsystem?: "meta"; meta: zmk.meta.Response.$Shape; core?: null; behaviors?: null; keymap?: null }|{ subsystem?: "core"; meta?: null; core: zmk.core.Response.$Shape; behaviors?: null; keymap?: null }|{ subsystem?: "behaviors"; meta?: null; core?: null; behaviors: zmk.behaviors.Response.$Shape; keymap?: null }|{ subsystem?: "keymap"; meta?: null; core?: null; behaviors?: null; keymap: zmk.keymap.Response.$Shape })
             * )} zmk.studio.RequestResponse.$Shape
             */

            /**
             * Constructs a new RequestResponse.
             * @memberof zmk.studio
             * @classdesc Represents a RequestResponse.
             * @constructor
             * @param {zmk.studio.RequestResponse.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function RequestResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestResponse requestId.
             * @member {number} requestId
             * @memberof zmk.studio.RequestResponse
             * @instance
             */
            RequestResponse.prototype.requestId = 0;

            /**
             * RequestResponse meta.
             * @member {zmk.meta.Response.$Properties|null|undefined} meta
             * @memberof zmk.studio.RequestResponse
             * @instance
             */
            RequestResponse.prototype.meta = null;

            /**
             * RequestResponse core.
             * @member {zmk.core.Response.$Properties|null|undefined} core
             * @memberof zmk.studio.RequestResponse
             * @instance
             */
            RequestResponse.prototype.core = null;

            /**
             * RequestResponse behaviors.
             * @member {zmk.behaviors.Response.$Properties|null|undefined} behaviors
             * @memberof zmk.studio.RequestResponse
             * @instance
             */
            RequestResponse.prototype.behaviors = null;

            /**
             * RequestResponse keymap.
             * @member {zmk.keymap.Response.$Properties|null|undefined} keymap
             * @memberof zmk.studio.RequestResponse
             * @instance
             */
            RequestResponse.prototype.keymap = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * RequestResponse subsystem.
             * @member {"meta"|"core"|"behaviors"|"keymap"|undefined} subsystem
             * @memberof zmk.studio.RequestResponse
             * @instance
             */
            Object.defineProperty(RequestResponse.prototype, "subsystem", {
                get: $util.oneOfGetter($oneOfFields = ["meta", "core", "behaviors", "keymap"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RequestResponse instance using the specified properties.
             * @function create
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {zmk.studio.RequestResponse.$Properties=} [properties] Properties to set
             * @returns {zmk.studio.RequestResponse} RequestResponse instance
             * @type {{
             *   (properties: zmk.studio.RequestResponse.$Shape): zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape;
             *   (properties?: zmk.studio.RequestResponse.$Properties): zmk.studio.RequestResponse;
             * }}
             */
            RequestResponse.create = function create(properties) {
                return new RequestResponse(properties);
            };

            /**
             * Encodes the specified RequestResponse message. Does not implicitly {@link zmk.studio.RequestResponse.verify|verify} messages.
             * @function encode
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {zmk.studio.RequestResponse.$Properties} message RequestResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestResponse.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
                    $root.zmk.meta.Response.encode(message.meta, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.core != null && Object.hasOwnProperty.call(message, "core"))
                    $root.zmk.core.Response.encode(message.core, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.behaviors != null && Object.hasOwnProperty.call(message, "behaviors"))
                    $root.zmk.behaviors.Response.encode(message.behaviors, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.keymap != null && Object.hasOwnProperty.call(message, "keymap"))
                    $root.zmk.keymap.Response.encode(message.keymap, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RequestResponse message, length delimited. Does not implicitly {@link zmk.studio.RequestResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {zmk.studio.RequestResponse.$Properties} message RequestResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a RequestResponse message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape} RequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestResponse.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.studio.RequestResponse(), value;
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.requestId = value;
                            else
                                delete message.requestId;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.meta = $root.zmk.meta.Response.decode(reader, reader.uint32(), undefined, _depth + 1, message.meta);
                            message.subsystem = "meta";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.core = $root.zmk.core.Response.decode(reader, reader.uint32(), undefined, _depth + 1, message.core);
                            message.subsystem = "core";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.behaviors = $root.zmk.behaviors.Response.decode(reader, reader.uint32(), undefined, _depth + 1, message.behaviors);
                            message.subsystem = "behaviors";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.keymap = $root.zmk.keymap.Response.decode(reader, reader.uint32(), undefined, _depth + 1, message.keymap);
                            message.subsystem = "keymap";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a RequestResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape} RequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestResponse message.
             * @function verify
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestResponse.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.meta != null && message.hasOwnProperty("meta")) {
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.meta.Response.verify(message.meta, _depth + 1);
                        if (error)
                            return "meta." + error;
                    }
                }
                if (message.core != null && message.hasOwnProperty("core")) {
                    if (properties.subsystem === 1)
                        return "subsystem: multiple values";
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.core.Response.verify(message.core, _depth + 1);
                        if (error)
                            return "core." + error;
                    }
                }
                if (message.behaviors != null && message.hasOwnProperty("behaviors")) {
                    if (properties.subsystem === 1)
                        return "subsystem: multiple values";
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.behaviors.Response.verify(message.behaviors, _depth + 1);
                        if (error)
                            return "behaviors." + error;
                    }
                }
                if (message.keymap != null && message.hasOwnProperty("keymap")) {
                    if (properties.subsystem === 1)
                        return "subsystem: multiple values";
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.keymap.Response.verify(message.keymap, _depth + 1);
                        if (error)
                            return "keymap." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RequestResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.studio.RequestResponse} RequestResponse
             */
            RequestResponse.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.studio.RequestResponse)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.studio.RequestResponse();
                if (object.requestId != null)
                    if (Number(object.requestId) !== 0)
                        message.requestId = object.requestId >>> 0;
                if (object.meta != null) {
                    if (typeof object.meta !== "object")
                        throw TypeError(".zmk.studio.RequestResponse.meta: object expected");
                    message.meta = $root.zmk.meta.Response.fromObject(object.meta, _depth + 1);
                }
                if (object.core != null) {
                    if (typeof object.core !== "object")
                        throw TypeError(".zmk.studio.RequestResponse.core: object expected");
                    message.core = $root.zmk.core.Response.fromObject(object.core, _depth + 1);
                }
                if (object.behaviors != null) {
                    if (typeof object.behaviors !== "object")
                        throw TypeError(".zmk.studio.RequestResponse.behaviors: object expected");
                    message.behaviors = $root.zmk.behaviors.Response.fromObject(object.behaviors, _depth + 1);
                }
                if (object.keymap != null) {
                    if (typeof object.keymap !== "object")
                        throw TypeError(".zmk.studio.RequestResponse.keymap: object expected");
                    message.keymap = $root.zmk.keymap.Response.fromObject(object.keymap, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {zmk.studio.RequestResponse} message RequestResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestResponse.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.meta != null && message.hasOwnProperty("meta")) {
                    object.meta = $root.zmk.meta.Response.toObject(message.meta, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "meta";
                }
                if (message.core != null && message.hasOwnProperty("core")) {
                    object.core = $root.zmk.core.Response.toObject(message.core, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "core";
                }
                if (message.behaviors != null && message.hasOwnProperty("behaviors")) {
                    object.behaviors = $root.zmk.behaviors.Response.toObject(message.behaviors, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "behaviors";
                }
                if (message.keymap != null && message.hasOwnProperty("keymap")) {
                    object.keymap = $root.zmk.keymap.Response.toObject(message.keymap, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "keymap";
                }
                return object;
            };

            /**
             * Converts this RequestResponse to JSON.
             * @function toJSON
             * @memberof zmk.studio.RequestResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RequestResponse
             * @function getTypeUrl
             * @memberof zmk.studio.RequestResponse
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RequestResponse.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.studio.RequestResponse";
            };

            return RequestResponse;
        })();

        studio.Notification = (function() {

            /**
             * Properties of a Notification.
             * @typedef {Object} zmk.studio.Notification.$Properties
             * @property {zmk.core.Notification.$Properties|null} [core] Notification core
             * @property {zmk.keymap.Notification.$Properties|null} [keymap] Notification keymap
             * @property {"core"|"keymap"} [subsystem] Notification subsystem
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a Notification.
             * @memberof zmk.studio
             * @interface INotification
             * @augments zmk.studio.Notification.$Properties
             * @deprecated Use zmk.studio.Notification.$Properties instead.
             */

            /**
             * Narrowed shape of a Notification.
             * @typedef {{
             *   core?: zmk.core.Notification.$Shape|null;
             *   keymap?: zmk.keymap.Notification.$Shape|null;
             *   $unknowns?: Array.<Uint8Array>;
             * } & (
             *   ({ subsystem?: undefined; core?: null; keymap?: null }|{ subsystem?: "core"; core: zmk.core.Notification.$Shape; keymap?: null }|{ subsystem?: "keymap"; core?: null; keymap: zmk.keymap.Notification.$Shape })
             * )} zmk.studio.Notification.$Shape
             */

            /**
             * Constructs a new Notification.
             * @memberof zmk.studio
             * @classdesc Represents a Notification.
             * @constructor
             * @param {zmk.studio.Notification.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            function Notification(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Notification core.
             * @member {zmk.core.Notification.$Properties|null|undefined} core
             * @memberof zmk.studio.Notification
             * @instance
             */
            Notification.prototype.core = null;

            /**
             * Notification keymap.
             * @member {zmk.keymap.Notification.$Properties|null|undefined} keymap
             * @memberof zmk.studio.Notification
             * @instance
             */
            Notification.prototype.keymap = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * Notification subsystem.
             * @member {"core"|"keymap"|undefined} subsystem
             * @memberof zmk.studio.Notification
             * @instance
             */
            Object.defineProperty(Notification.prototype, "subsystem", {
                get: $util.oneOfGetter($oneOfFields = ["core", "keymap"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Notification instance using the specified properties.
             * @function create
             * @memberof zmk.studio.Notification
             * @static
             * @param {zmk.studio.Notification.$Properties=} [properties] Properties to set
             * @returns {zmk.studio.Notification} Notification instance
             * @type {{
             *   (properties: zmk.studio.Notification.$Shape): zmk.studio.Notification & zmk.studio.Notification.$Shape;
             *   (properties?: zmk.studio.Notification.$Properties): zmk.studio.Notification;
             * }}
             */
            Notification.create = function create(properties) {
                return new Notification(properties);
            };

            /**
             * Encodes the specified Notification message. Does not implicitly {@link zmk.studio.Notification.verify|verify} messages.
             * @function encode
             * @memberof zmk.studio.Notification
             * @static
             * @param {zmk.studio.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encode = function encode(message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                if (message.core != null && Object.hasOwnProperty.call(message, "core"))
                    $root.zmk.core.Notification.encode(message.core, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.keymap != null && Object.hasOwnProperty.call(message, "keymap"))
                    $root.zmk.keymap.Notification.encode(message.keymap, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link zmk.studio.Notification.verify|verify} messages.
             * @function encodeDelimited
             * @memberof zmk.studio.Notification
             * @static
             * @param {zmk.studio.Notification.$Properties} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @function decode
             * @memberof zmk.studio.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {zmk.studio.Notification & zmk.studio.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decode = function decode(reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw Error("max depth exceeded");
                let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.zmk.studio.Notification();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.core = $root.zmk.core.Notification.decode(reader, reader.uint32(), undefined, _depth + 1, message.core);
                            message.subsystem = "core";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.keymap = $root.zmk.keymap.Notification.decode(reader, reader.uint32(), undefined, _depth + 1, message.keymap);
                            message.subsystem = "keymap";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
                if (_end !== undefined)
                    throw Error("missing end group");
                return message;
            };

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof zmk.studio.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {zmk.studio.Notification & zmk.studio.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Notification message.
             * @function verify
             * @memberof zmk.studio.Notification
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Notification.verify = function verify(message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                let properties = {};
                if (message.core != null && message.hasOwnProperty("core")) {
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.core.Notification.verify(message.core, _depth + 1);
                        if (error)
                            return "core." + error;
                    }
                }
                if (message.keymap != null && message.hasOwnProperty("keymap")) {
                    if (properties.subsystem === 1)
                        return "subsystem: multiple values";
                    properties.subsystem = 1;
                    {
                        let error = $root.zmk.keymap.Notification.verify(message.keymap, _depth + 1);
                        if (error)
                            return "keymap." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof zmk.studio.Notification
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {zmk.studio.Notification} Notification
             */
            Notification.fromObject = function fromObject(object, _depth) {
                if (object instanceof $root.zmk.studio.Notification)
                    return object;
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let message = new $root.zmk.studio.Notification();
                if (object.core != null) {
                    if (typeof object.core !== "object")
                        throw TypeError(".zmk.studio.Notification.core: object expected");
                    message.core = $root.zmk.core.Notification.fromObject(object.core, _depth + 1);
                }
                if (object.keymap != null) {
                    if (typeof object.keymap !== "object")
                        throw TypeError(".zmk.studio.Notification.keymap: object expected");
                    message.keymap = $root.zmk.keymap.Notification.fromObject(object.keymap, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @function toObject
             * @memberof zmk.studio.Notification
             * @static
             * @param {zmk.studio.Notification} message Notification
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Notification.toObject = function toObject(message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw Error("max depth exceeded");
                let object = {};
                if (message.core != null && message.hasOwnProperty("core")) {
                    object.core = $root.zmk.core.Notification.toObject(message.core, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "core";
                }
                if (message.keymap != null && message.hasOwnProperty("keymap")) {
                    object.keymap = $root.zmk.keymap.Notification.toObject(message.keymap, options, _depth + 1);
                    if (options.oneofs)
                        object.subsystem = "keymap";
                }
                return object;
            };

            /**
             * Converts this Notification to JSON.
             * @function toJSON
             * @memberof zmk.studio.Notification
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Notification.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Notification
             * @function getTypeUrl
             * @memberof zmk.studio.Notification
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Notification.getTypeUrl = function getTypeUrl(prefix) {
                if (prefix === undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/zmk.studio.Notification";
            };

            return Notification;
        })();

        return studio;
    })();

    return zmk;
})();

export {
  $root as default
};
