import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace zmk. */
export namespace zmk {

    /** Namespace behaviors. */
    namespace behaviors {

        /**
         * Properties of a Request.
         * @deprecated Use zmk.behaviors.Request.$Properties instead.
         */
        interface IRequest extends zmk.behaviors.Request.$Properties {
        }

        /** Represents a Request. */
        class Request {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.Request.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Request listAllBehaviors. */
            listAllBehaviors?: (boolean|null);

            /** Request getBehaviorDetails. */
            getBehaviorDetails?: (zmk.behaviors.GetBehaviorDetailsRequest.$Properties|null);

            /** Request requestType. */
            requestType?: ("listAllBehaviors"|"getBehaviorDetails");

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            static create(properties: zmk.behaviors.Request.$Shape): zmk.behaviors.Request & zmk.behaviors.Request.$Shape;
            static create(properties?: zmk.behaviors.Request.$Properties): zmk.behaviors.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.behaviors.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.behaviors.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.Request & zmk.behaviors.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.Request & zmk.behaviors.Request.$Shape;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.Request & zmk.behaviors.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.Request & zmk.behaviors.Request.$Shape;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Request
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Request {

            /** Properties of a Request. */
            interface $Properties {

                /** Request listAllBehaviors */
                listAllBehaviors?: (boolean|null);

                /** Request getBehaviorDetails */
                getBehaviorDetails?: (zmk.behaviors.GetBehaviorDetailsRequest.$Properties|null);

                /** Request requestType */
                requestType?: ("listAllBehaviors"|"getBehaviorDetails");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Request. */
            type $Shape = {
  listAllBehaviors?: boolean|null;
  getBehaviorDetails?: zmk.behaviors.GetBehaviorDetailsRequest.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ requestType?: undefined; listAllBehaviors?: null; getBehaviorDetails?: null }|{ requestType?: "listAllBehaviors"; listAllBehaviors: boolean; getBehaviorDetails?: null }|{ requestType?: "getBehaviorDetails"; listAllBehaviors?: null; getBehaviorDetails: zmk.behaviors.GetBehaviorDetailsRequest.$Shape })
);
        }

        /**
         * Properties of a GetBehaviorDetailsRequest.
         * @deprecated Use zmk.behaviors.GetBehaviorDetailsRequest.$Properties instead.
         */
        interface IGetBehaviorDetailsRequest extends zmk.behaviors.GetBehaviorDetailsRequest.$Properties {
        }

        /** Represents a GetBehaviorDetailsRequest. */
        class GetBehaviorDetailsRequest {

            /**
             * Constructs a new GetBehaviorDetailsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.GetBehaviorDetailsRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** GetBehaviorDetailsRequest behaviorId. */
            behaviorId: number;

            /**
             * Creates a new GetBehaviorDetailsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetBehaviorDetailsRequest instance
             */
            static create(properties: zmk.behaviors.GetBehaviorDetailsRequest.$Shape): zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape;
            static create(properties?: zmk.behaviors.GetBehaviorDetailsRequest.$Properties): zmk.behaviors.GetBehaviorDetailsRequest;

            /**
             * Encodes the specified GetBehaviorDetailsRequest message. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsRequest.verify|verify} messages.
             * @param message GetBehaviorDetailsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.GetBehaviorDetailsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetBehaviorDetailsRequest message, length delimited. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsRequest.verify|verify} messages.
             * @param message GetBehaviorDetailsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.GetBehaviorDetailsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetBehaviorDetailsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape} GetBehaviorDetailsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape;

            /**
             * Decodes a GetBehaviorDetailsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape} GetBehaviorDetailsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.GetBehaviorDetailsRequest & zmk.behaviors.GetBehaviorDetailsRequest.$Shape;

            /**
             * Verifies a GetBehaviorDetailsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetBehaviorDetailsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetBehaviorDetailsRequest
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.GetBehaviorDetailsRequest;

            /**
             * Creates a plain object from a GetBehaviorDetailsRequest message. Also converts values to other types if specified.
             * @param message GetBehaviorDetailsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.GetBehaviorDetailsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetBehaviorDetailsRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GetBehaviorDetailsRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GetBehaviorDetailsRequest {

            /** Properties of a GetBehaviorDetailsRequest. */
            interface $Properties {

                /** GetBehaviorDetailsRequest behaviorId */
                behaviorId?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GetBehaviorDetailsRequest. */
            type $Shape = zmk.behaviors.GetBehaviorDetailsRequest.$Properties;
        }

        /**
         * Properties of a Response.
         * @deprecated Use zmk.behaviors.Response.$Properties instead.
         */
        interface IResponse extends zmk.behaviors.Response.$Properties {
        }

        /** Represents a Response. */
        class Response {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.Response.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Response listAllBehaviors. */
            listAllBehaviors?: (zmk.behaviors.ListAllBehaviorsResponse.$Properties|null);

            /** Response getBehaviorDetails. */
            getBehaviorDetails?: (zmk.behaviors.GetBehaviorDetailsResponse.$Properties|null);

            /** Response responseType. */
            responseType?: ("listAllBehaviors"|"getBehaviorDetails");

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            static create(properties: zmk.behaviors.Response.$Shape): zmk.behaviors.Response & zmk.behaviors.Response.$Shape;
            static create(properties?: zmk.behaviors.Response.$Properties): zmk.behaviors.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.behaviors.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.behaviors.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.Response & zmk.behaviors.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.Response & zmk.behaviors.Response.$Shape;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.Response & zmk.behaviors.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.Response & zmk.behaviors.Response.$Shape;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Response
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Response {

            /** Properties of a Response. */
            interface $Properties {

                /** Response listAllBehaviors */
                listAllBehaviors?: (zmk.behaviors.ListAllBehaviorsResponse.$Properties|null);

                /** Response getBehaviorDetails */
                getBehaviorDetails?: (zmk.behaviors.GetBehaviorDetailsResponse.$Properties|null);

                /** Response responseType */
                responseType?: ("listAllBehaviors"|"getBehaviorDetails");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Response. */
            type $Shape = {
  listAllBehaviors?: zmk.behaviors.ListAllBehaviorsResponse.$Shape|null;
  getBehaviorDetails?: zmk.behaviors.GetBehaviorDetailsResponse.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ responseType?: undefined; listAllBehaviors?: null; getBehaviorDetails?: null }|{ responseType?: "listAllBehaviors"; listAllBehaviors: zmk.behaviors.ListAllBehaviorsResponse.$Shape; getBehaviorDetails?: null }|{ responseType?: "getBehaviorDetails"; listAllBehaviors?: null; getBehaviorDetails: zmk.behaviors.GetBehaviorDetailsResponse.$Shape })
);
        }

        /**
         * Properties of a ListAllBehaviorsResponse.
         * @deprecated Use zmk.behaviors.ListAllBehaviorsResponse.$Properties instead.
         */
        interface IListAllBehaviorsResponse extends zmk.behaviors.ListAllBehaviorsResponse.$Properties {
        }

        /** Represents a ListAllBehaviorsResponse. */
        class ListAllBehaviorsResponse {

            /**
             * Constructs a new ListAllBehaviorsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.ListAllBehaviorsResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** ListAllBehaviorsResponse behaviors. */
            behaviors: number[];

            /**
             * Creates a new ListAllBehaviorsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListAllBehaviorsResponse instance
             */
            static create(properties: zmk.behaviors.ListAllBehaviorsResponse.$Shape): zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape;
            static create(properties?: zmk.behaviors.ListAllBehaviorsResponse.$Properties): zmk.behaviors.ListAllBehaviorsResponse;

            /**
             * Encodes the specified ListAllBehaviorsResponse message. Does not implicitly {@link zmk.behaviors.ListAllBehaviorsResponse.verify|verify} messages.
             * @param message ListAllBehaviorsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.ListAllBehaviorsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListAllBehaviorsResponse message, length delimited. Does not implicitly {@link zmk.behaviors.ListAllBehaviorsResponse.verify|verify} messages.
             * @param message ListAllBehaviorsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.ListAllBehaviorsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListAllBehaviorsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape} ListAllBehaviorsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape;

            /**
             * Decodes a ListAllBehaviorsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape} ListAllBehaviorsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.ListAllBehaviorsResponse & zmk.behaviors.ListAllBehaviorsResponse.$Shape;

            /**
             * Verifies a ListAllBehaviorsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListAllBehaviorsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListAllBehaviorsResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.ListAllBehaviorsResponse;

            /**
             * Creates a plain object from a ListAllBehaviorsResponse message. Also converts values to other types if specified.
             * @param message ListAllBehaviorsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.ListAllBehaviorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListAllBehaviorsResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for ListAllBehaviorsResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace ListAllBehaviorsResponse {

            /** Properties of a ListAllBehaviorsResponse. */
            interface $Properties {

                /** ListAllBehaviorsResponse behaviors */
                behaviors?: (number[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a ListAllBehaviorsResponse. */
            type $Shape = zmk.behaviors.ListAllBehaviorsResponse.$Properties;
        }

        /**
         * Properties of a GetBehaviorDetailsResponse.
         * @deprecated Use zmk.behaviors.GetBehaviorDetailsResponse.$Properties instead.
         */
        interface IGetBehaviorDetailsResponse extends zmk.behaviors.GetBehaviorDetailsResponse.$Properties {
        }

        /** Represents a GetBehaviorDetailsResponse. */
        class GetBehaviorDetailsResponse {

            /**
             * Constructs a new GetBehaviorDetailsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.GetBehaviorDetailsResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** GetBehaviorDetailsResponse id. */
            id: number;

            /** GetBehaviorDetailsResponse displayName. */
            displayName: string;

            /** GetBehaviorDetailsResponse metadata. */
            metadata: zmk.behaviors.BehaviorBindingParametersSet.$Properties[];

            /**
             * Creates a new GetBehaviorDetailsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetBehaviorDetailsResponse instance
             */
            static create(properties: zmk.behaviors.GetBehaviorDetailsResponse.$Shape): zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape;
            static create(properties?: zmk.behaviors.GetBehaviorDetailsResponse.$Properties): zmk.behaviors.GetBehaviorDetailsResponse;

            /**
             * Encodes the specified GetBehaviorDetailsResponse message. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsResponse.verify|verify} messages.
             * @param message GetBehaviorDetailsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.GetBehaviorDetailsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetBehaviorDetailsResponse message, length delimited. Does not implicitly {@link zmk.behaviors.GetBehaviorDetailsResponse.verify|verify} messages.
             * @param message GetBehaviorDetailsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.GetBehaviorDetailsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetBehaviorDetailsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape} GetBehaviorDetailsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape;

            /**
             * Decodes a GetBehaviorDetailsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape} GetBehaviorDetailsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.GetBehaviorDetailsResponse & zmk.behaviors.GetBehaviorDetailsResponse.$Shape;

            /**
             * Verifies a GetBehaviorDetailsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetBehaviorDetailsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetBehaviorDetailsResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.GetBehaviorDetailsResponse;

            /**
             * Creates a plain object from a GetBehaviorDetailsResponse message. Also converts values to other types if specified.
             * @param message GetBehaviorDetailsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.GetBehaviorDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetBehaviorDetailsResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GetBehaviorDetailsResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GetBehaviorDetailsResponse {

            /** Properties of a GetBehaviorDetailsResponse. */
            interface $Properties {

                /** GetBehaviorDetailsResponse id */
                id?: (number|null);

                /** GetBehaviorDetailsResponse displayName */
                displayName?: (string|null);

                /** GetBehaviorDetailsResponse metadata */
                metadata?: (zmk.behaviors.BehaviorBindingParametersSet.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GetBehaviorDetailsResponse. */
            type $Shape = {
  id?: number|null;
  displayName?: string|null;
  metadata?: zmk.behaviors.BehaviorBindingParametersSet.$Shape[]|null;
  $unknowns?: Uint8Array[];
};
        }

        /**
         * Properties of a BehaviorBindingParametersSet.
         * @deprecated Use zmk.behaviors.BehaviorBindingParametersSet.$Properties instead.
         */
        interface IBehaviorBindingParametersSet extends zmk.behaviors.BehaviorBindingParametersSet.$Properties {
        }

        /** Represents a BehaviorBindingParametersSet. */
        class BehaviorBindingParametersSet {

            /**
             * Constructs a new BehaviorBindingParametersSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.BehaviorBindingParametersSet.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** BehaviorBindingParametersSet param1. */
            param1: zmk.behaviors.BehaviorParameterValueDescription.$Properties[];

            /** BehaviorBindingParametersSet param2. */
            param2: zmk.behaviors.BehaviorParameterValueDescription.$Properties[];

            /**
             * Creates a new BehaviorBindingParametersSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BehaviorBindingParametersSet instance
             */
            static create(properties: zmk.behaviors.BehaviorBindingParametersSet.$Shape): zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape;
            static create(properties?: zmk.behaviors.BehaviorBindingParametersSet.$Properties): zmk.behaviors.BehaviorBindingParametersSet;

            /**
             * Encodes the specified BehaviorBindingParametersSet message. Does not implicitly {@link zmk.behaviors.BehaviorBindingParametersSet.verify|verify} messages.
             * @param message BehaviorBindingParametersSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.BehaviorBindingParametersSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BehaviorBindingParametersSet message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorBindingParametersSet.verify|verify} messages.
             * @param message BehaviorBindingParametersSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.BehaviorBindingParametersSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BehaviorBindingParametersSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape} BehaviorBindingParametersSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape;

            /**
             * Decodes a BehaviorBindingParametersSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape} BehaviorBindingParametersSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.BehaviorBindingParametersSet & zmk.behaviors.BehaviorBindingParametersSet.$Shape;

            /**
             * Verifies a BehaviorBindingParametersSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BehaviorBindingParametersSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BehaviorBindingParametersSet
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.BehaviorBindingParametersSet;

            /**
             * Creates a plain object from a BehaviorBindingParametersSet message. Also converts values to other types if specified.
             * @param message BehaviorBindingParametersSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.BehaviorBindingParametersSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BehaviorBindingParametersSet to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BehaviorBindingParametersSet
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BehaviorBindingParametersSet {

            /** Properties of a BehaviorBindingParametersSet. */
            interface $Properties {

                /** BehaviorBindingParametersSet param1 */
                param1?: (zmk.behaviors.BehaviorParameterValueDescription.$Properties[]|null);

                /** BehaviorBindingParametersSet param2 */
                param2?: (zmk.behaviors.BehaviorParameterValueDescription.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BehaviorBindingParametersSet. */
            type $Shape = {
  param1?: zmk.behaviors.BehaviorParameterValueDescription.$Shape[]|null;
  param2?: zmk.behaviors.BehaviorParameterValueDescription.$Shape[]|null;
  $unknowns?: Uint8Array[];
};
        }

        /**
         * Properties of a BehaviorParameterValueDescriptionRange.
         * @deprecated Use zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties instead.
         */
        interface IBehaviorParameterValueDescriptionRange extends zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties {
        }

        /** Represents a BehaviorParameterValueDescriptionRange. */
        class BehaviorParameterValueDescriptionRange {

            /**
             * Constructs a new BehaviorParameterValueDescriptionRange.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** BehaviorParameterValueDescriptionRange min. */
            min: number;

            /** BehaviorParameterValueDescriptionRange max. */
            max: number;

            /**
             * Creates a new BehaviorParameterValueDescriptionRange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BehaviorParameterValueDescriptionRange instance
             */
            static create(properties: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape): zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape;
            static create(properties?: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties): zmk.behaviors.BehaviorParameterValueDescriptionRange;

            /**
             * Encodes the specified BehaviorParameterValueDescriptionRange message. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescriptionRange.verify|verify} messages.
             * @param message BehaviorParameterValueDescriptionRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BehaviorParameterValueDescriptionRange message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescriptionRange.verify|verify} messages.
             * @param message BehaviorParameterValueDescriptionRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BehaviorParameterValueDescriptionRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape} BehaviorParameterValueDescriptionRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape;

            /**
             * Decodes a BehaviorParameterValueDescriptionRange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape} BehaviorParameterValueDescriptionRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.BehaviorParameterValueDescriptionRange & zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape;

            /**
             * Verifies a BehaviorParameterValueDescriptionRange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BehaviorParameterValueDescriptionRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BehaviorParameterValueDescriptionRange
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.BehaviorParameterValueDescriptionRange;

            /**
             * Creates a plain object from a BehaviorParameterValueDescriptionRange message. Also converts values to other types if specified.
             * @param message BehaviorParameterValueDescriptionRange
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.BehaviorParameterValueDescriptionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BehaviorParameterValueDescriptionRange to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BehaviorParameterValueDescriptionRange
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BehaviorParameterValueDescriptionRange {

            /** Properties of a BehaviorParameterValueDescriptionRange. */
            interface $Properties {

                /** BehaviorParameterValueDescriptionRange min */
                min?: (number|null);

                /** BehaviorParameterValueDescriptionRange max */
                max?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BehaviorParameterValueDescriptionRange. */
            type $Shape = zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties;
        }

        /**
         * Properties of a BehaviorParameterNil.
         * @deprecated Use zmk.behaviors.BehaviorParameterNil.$Properties instead.
         */
        interface IBehaviorParameterNil extends zmk.behaviors.BehaviorParameterNil.$Properties {
        }

        /** Represents a BehaviorParameterNil. */
        class BehaviorParameterNil {

            /**
             * Constructs a new BehaviorParameterNil.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.BehaviorParameterNil.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new BehaviorParameterNil instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BehaviorParameterNil instance
             */
            static create(properties: zmk.behaviors.BehaviorParameterNil.$Shape): zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape;
            static create(properties?: zmk.behaviors.BehaviorParameterNil.$Properties): zmk.behaviors.BehaviorParameterNil;

            /**
             * Encodes the specified BehaviorParameterNil message. Does not implicitly {@link zmk.behaviors.BehaviorParameterNil.verify|verify} messages.
             * @param message BehaviorParameterNil message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.BehaviorParameterNil.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BehaviorParameterNil message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterNil.verify|verify} messages.
             * @param message BehaviorParameterNil message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.BehaviorParameterNil.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BehaviorParameterNil message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape} BehaviorParameterNil
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape;

            /**
             * Decodes a BehaviorParameterNil message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape} BehaviorParameterNil
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.BehaviorParameterNil & zmk.behaviors.BehaviorParameterNil.$Shape;

            /**
             * Verifies a BehaviorParameterNil message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BehaviorParameterNil message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BehaviorParameterNil
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.BehaviorParameterNil;

            /**
             * Creates a plain object from a BehaviorParameterNil message. Also converts values to other types if specified.
             * @param message BehaviorParameterNil
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.BehaviorParameterNil, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BehaviorParameterNil to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BehaviorParameterNil
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BehaviorParameterNil {

            /** Properties of a BehaviorParameterNil. */
            interface $Properties {

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BehaviorParameterNil. */
            type $Shape = zmk.behaviors.BehaviorParameterNil.$Properties;
        }

        /**
         * Properties of a BehaviorParameterLayerId.
         * @deprecated Use zmk.behaviors.BehaviorParameterLayerId.$Properties instead.
         */
        interface IBehaviorParameterLayerId extends zmk.behaviors.BehaviorParameterLayerId.$Properties {
        }

        /** Represents a BehaviorParameterLayerId. */
        class BehaviorParameterLayerId {

            /**
             * Constructs a new BehaviorParameterLayerId.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.BehaviorParameterLayerId.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new BehaviorParameterLayerId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BehaviorParameterLayerId instance
             */
            static create(properties: zmk.behaviors.BehaviorParameterLayerId.$Shape): zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape;
            static create(properties?: zmk.behaviors.BehaviorParameterLayerId.$Properties): zmk.behaviors.BehaviorParameterLayerId;

            /**
             * Encodes the specified BehaviorParameterLayerId message. Does not implicitly {@link zmk.behaviors.BehaviorParameterLayerId.verify|verify} messages.
             * @param message BehaviorParameterLayerId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.BehaviorParameterLayerId.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BehaviorParameterLayerId message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterLayerId.verify|verify} messages.
             * @param message BehaviorParameterLayerId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.BehaviorParameterLayerId.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BehaviorParameterLayerId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape} BehaviorParameterLayerId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape;

            /**
             * Decodes a BehaviorParameterLayerId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape} BehaviorParameterLayerId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.BehaviorParameterLayerId & zmk.behaviors.BehaviorParameterLayerId.$Shape;

            /**
             * Verifies a BehaviorParameterLayerId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BehaviorParameterLayerId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BehaviorParameterLayerId
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.BehaviorParameterLayerId;

            /**
             * Creates a plain object from a BehaviorParameterLayerId message. Also converts values to other types if specified.
             * @param message BehaviorParameterLayerId
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.BehaviorParameterLayerId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BehaviorParameterLayerId to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BehaviorParameterLayerId
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BehaviorParameterLayerId {

            /** Properties of a BehaviorParameterLayerId. */
            interface $Properties {

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BehaviorParameterLayerId. */
            type $Shape = zmk.behaviors.BehaviorParameterLayerId.$Properties;
        }

        /**
         * Properties of a BehaviorParameterHidUsage.
         * @deprecated Use zmk.behaviors.BehaviorParameterHidUsage.$Properties instead.
         */
        interface IBehaviorParameterHidUsage extends zmk.behaviors.BehaviorParameterHidUsage.$Properties {
        }

        /** Represents a BehaviorParameterHidUsage. */
        class BehaviorParameterHidUsage {

            /**
             * Constructs a new BehaviorParameterHidUsage.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.BehaviorParameterHidUsage.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** BehaviorParameterHidUsage keyboardMax. */
            keyboardMax: number;

            /** BehaviorParameterHidUsage consumerMax. */
            consumerMax: number;

            /**
             * Creates a new BehaviorParameterHidUsage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BehaviorParameterHidUsage instance
             */
            static create(properties: zmk.behaviors.BehaviorParameterHidUsage.$Shape): zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape;
            static create(properties?: zmk.behaviors.BehaviorParameterHidUsage.$Properties): zmk.behaviors.BehaviorParameterHidUsage;

            /**
             * Encodes the specified BehaviorParameterHidUsage message. Does not implicitly {@link zmk.behaviors.BehaviorParameterHidUsage.verify|verify} messages.
             * @param message BehaviorParameterHidUsage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.BehaviorParameterHidUsage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BehaviorParameterHidUsage message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterHidUsage.verify|verify} messages.
             * @param message BehaviorParameterHidUsage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.BehaviorParameterHidUsage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BehaviorParameterHidUsage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape} BehaviorParameterHidUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape;

            /**
             * Decodes a BehaviorParameterHidUsage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape} BehaviorParameterHidUsage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.BehaviorParameterHidUsage & zmk.behaviors.BehaviorParameterHidUsage.$Shape;

            /**
             * Verifies a BehaviorParameterHidUsage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BehaviorParameterHidUsage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BehaviorParameterHidUsage
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.BehaviorParameterHidUsage;

            /**
             * Creates a plain object from a BehaviorParameterHidUsage message. Also converts values to other types if specified.
             * @param message BehaviorParameterHidUsage
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.BehaviorParameterHidUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BehaviorParameterHidUsage to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BehaviorParameterHidUsage
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BehaviorParameterHidUsage {

            /** Properties of a BehaviorParameterHidUsage. */
            interface $Properties {

                /** BehaviorParameterHidUsage keyboardMax */
                keyboardMax?: (number|null);

                /** BehaviorParameterHidUsage consumerMax */
                consumerMax?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BehaviorParameterHidUsage. */
            type $Shape = zmk.behaviors.BehaviorParameterHidUsage.$Properties;
        }

        /**
         * Properties of a BehaviorParameterValueDescription.
         * @deprecated Use zmk.behaviors.BehaviorParameterValueDescription.$Properties instead.
         */
        interface IBehaviorParameterValueDescription extends zmk.behaviors.BehaviorParameterValueDescription.$Properties {
        }

        /** Represents a BehaviorParameterValueDescription. */
        class BehaviorParameterValueDescription {

            /**
             * Constructs a new BehaviorParameterValueDescription.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.behaviors.BehaviorParameterValueDescription.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** BehaviorParameterValueDescription name. */
            name: string;

            /** BehaviorParameterValueDescription nil. */
            nil?: (zmk.behaviors.BehaviorParameterNil.$Properties|null);

            /** BehaviorParameterValueDescription constant. */
            constant?: (number|null);

            /** BehaviorParameterValueDescription range. */
            range?: (zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties|null);

            /** BehaviorParameterValueDescription hidUsage. */
            hidUsage?: (zmk.behaviors.BehaviorParameterHidUsage.$Properties|null);

            /** BehaviorParameterValueDescription layerId. */
            layerId?: (zmk.behaviors.BehaviorParameterLayerId.$Properties|null);

            /** BehaviorParameterValueDescription valueType. */
            valueType?: ("nil"|"constant"|"range"|"hidUsage"|"layerId");

            /**
             * Creates a new BehaviorParameterValueDescription instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BehaviorParameterValueDescription instance
             */
            static create(properties: zmk.behaviors.BehaviorParameterValueDescription.$Shape): zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape;
            static create(properties?: zmk.behaviors.BehaviorParameterValueDescription.$Properties): zmk.behaviors.BehaviorParameterValueDescription;

            /**
             * Encodes the specified BehaviorParameterValueDescription message. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescription.verify|verify} messages.
             * @param message BehaviorParameterValueDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.behaviors.BehaviorParameterValueDescription.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BehaviorParameterValueDescription message, length delimited. Does not implicitly {@link zmk.behaviors.BehaviorParameterValueDescription.verify|verify} messages.
             * @param message BehaviorParameterValueDescription message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.behaviors.BehaviorParameterValueDescription.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BehaviorParameterValueDescription message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape} BehaviorParameterValueDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape;

            /**
             * Decodes a BehaviorParameterValueDescription message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape} BehaviorParameterValueDescription
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.behaviors.BehaviorParameterValueDescription & zmk.behaviors.BehaviorParameterValueDescription.$Shape;

            /**
             * Verifies a BehaviorParameterValueDescription message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BehaviorParameterValueDescription message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BehaviorParameterValueDescription
             */
            static fromObject(object: { [k: string]: any }): zmk.behaviors.BehaviorParameterValueDescription;

            /**
             * Creates a plain object from a BehaviorParameterValueDescription message. Also converts values to other types if specified.
             * @param message BehaviorParameterValueDescription
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.behaviors.BehaviorParameterValueDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BehaviorParameterValueDescription to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BehaviorParameterValueDescription
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BehaviorParameterValueDescription {

            /** Properties of a BehaviorParameterValueDescription. */
            interface $Properties {

                /** BehaviorParameterValueDescription name */
                name?: (string|null);

                /** BehaviorParameterValueDescription nil */
                nil?: (zmk.behaviors.BehaviorParameterNil.$Properties|null);

                /** BehaviorParameterValueDescription constant */
                constant?: (number|null);

                /** BehaviorParameterValueDescription range */
                range?: (zmk.behaviors.BehaviorParameterValueDescriptionRange.$Properties|null);

                /** BehaviorParameterValueDescription hidUsage */
                hidUsage?: (zmk.behaviors.BehaviorParameterHidUsage.$Properties|null);

                /** BehaviorParameterValueDescription layerId */
                layerId?: (zmk.behaviors.BehaviorParameterLayerId.$Properties|null);

                /** BehaviorParameterValueDescription valueType */
                valueType?: ("nil"|"constant"|"range"|"hidUsage"|"layerId");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a BehaviorParameterValueDescription. */
            type $Shape = {
  name?: string|null;
  nil?: zmk.behaviors.BehaviorParameterNil.$Shape|null;
  constant?: number|null;
  range?: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape|null;
  hidUsage?: zmk.behaviors.BehaviorParameterHidUsage.$Shape|null;
  layerId?: zmk.behaviors.BehaviorParameterLayerId.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ valueType?: undefined; nil?: null; constant?: null; range?: null; hidUsage?: null; layerId?: null }|{ valueType?: "nil"; nil: zmk.behaviors.BehaviorParameterNil.$Shape; constant?: null; range?: null; hidUsage?: null; layerId?: null }|{ valueType?: "constant"; nil?: null; constant: number; range?: null; hidUsage?: null; layerId?: null }|{ valueType?: "range"; nil?: null; constant?: null; range: zmk.behaviors.BehaviorParameterValueDescriptionRange.$Shape; hidUsage?: null; layerId?: null }|{ valueType?: "hidUsage"; nil?: null; constant?: null; range?: null; hidUsage: zmk.behaviors.BehaviorParameterHidUsage.$Shape; layerId?: null }|{ valueType?: "layerId"; nil?: null; constant?: null; range?: null; hidUsage?: null; layerId: zmk.behaviors.BehaviorParameterLayerId.$Shape })
);
        }
    }

    /** Namespace core. */
    namespace core {

        /** LockState enum. */
        enum LockState {

            /** ZMK_STUDIO_CORE_LOCK_STATE_LOCKED value */
            ZMK_STUDIO_CORE_LOCK_STATE_LOCKED = 0,

            /** ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED value */
            ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED = 1
        }

        /**
         * Properties of a Request.
         * @deprecated Use zmk.core.Request.$Properties instead.
         */
        interface IRequest extends zmk.core.Request.$Properties {
        }

        /** Represents a Request. */
        class Request {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.core.Request.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Request getDeviceInfo. */
            getDeviceInfo?: (boolean|null);

            /** Request getLockState. */
            getLockState?: (boolean|null);

            /** Request lock. */
            lock?: (boolean|null);

            /** Request resetSettings. */
            resetSettings?: (boolean|null);

            /** Request requestType. */
            requestType?: ("getDeviceInfo"|"getLockState"|"lock"|"resetSettings");

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            static create(properties: zmk.core.Request.$Shape): zmk.core.Request & zmk.core.Request.$Shape;
            static create(properties?: zmk.core.Request.$Properties): zmk.core.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.core.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.core.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.core.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.core.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.core.Request & zmk.core.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.core.Request & zmk.core.Request.$Shape;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.core.Request & zmk.core.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.core.Request & zmk.core.Request.$Shape;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            static fromObject(object: { [k: string]: any }): zmk.core.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.core.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Request
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Request {

            /** Properties of a Request. */
            interface $Properties {

                /** Request getDeviceInfo */
                getDeviceInfo?: (boolean|null);

                /** Request getLockState */
                getLockState?: (boolean|null);

                /** Request lock */
                lock?: (boolean|null);

                /** Request resetSettings */
                resetSettings?: (boolean|null);

                /** Request requestType */
                requestType?: ("getDeviceInfo"|"getLockState"|"lock"|"resetSettings");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Request. */
            type $Shape = {
  getDeviceInfo?: boolean|null;
  getLockState?: boolean|null;
  lock?: boolean|null;
  resetSettings?: boolean|null;
  $unknowns?: Uint8Array[];
} & (
  ({ requestType?: undefined; getDeviceInfo?: null; getLockState?: null; lock?: null; resetSettings?: null }|{ requestType?: "getDeviceInfo"; getDeviceInfo: boolean; getLockState?: null; lock?: null; resetSettings?: null }|{ requestType?: "getLockState"; getDeviceInfo?: null; getLockState: boolean; lock?: null; resetSettings?: null }|{ requestType?: "lock"; getDeviceInfo?: null; getLockState?: null; lock: boolean; resetSettings?: null }|{ requestType?: "resetSettings"; getDeviceInfo?: null; getLockState?: null; lock?: null; resetSettings: boolean })
);
        }

        /**
         * Properties of a Response.
         * @deprecated Use zmk.core.Response.$Properties instead.
         */
        interface IResponse extends zmk.core.Response.$Properties {
        }

        /** Represents a Response. */
        class Response {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.core.Response.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Response getDeviceInfo. */
            getDeviceInfo?: (zmk.core.GetDeviceInfoResponse.$Properties|null);

            /** Response getLockState. */
            getLockState?: (zmk.core.LockState|null);

            /** Response resetSettings. */
            resetSettings?: (boolean|null);

            /** Response responseType. */
            responseType?: ("getDeviceInfo"|"getLockState"|"resetSettings");

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            static create(properties: zmk.core.Response.$Shape): zmk.core.Response & zmk.core.Response.$Shape;
            static create(properties?: zmk.core.Response.$Properties): zmk.core.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.core.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.core.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.core.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.core.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.core.Response & zmk.core.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.core.Response & zmk.core.Response.$Shape;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.core.Response & zmk.core.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.core.Response & zmk.core.Response.$Shape;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            static fromObject(object: { [k: string]: any }): zmk.core.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.core.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Response
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Response {

            /** Properties of a Response. */
            interface $Properties {

                /** Response getDeviceInfo */
                getDeviceInfo?: (zmk.core.GetDeviceInfoResponse.$Properties|null);

                /** Response getLockState */
                getLockState?: (zmk.core.LockState|null);

                /** Response resetSettings */
                resetSettings?: (boolean|null);

                /** Response responseType */
                responseType?: ("getDeviceInfo"|"getLockState"|"resetSettings");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Response. */
            type $Shape = {
  getDeviceInfo?: zmk.core.GetDeviceInfoResponse.$Shape|null;
  getLockState?: zmk.core.LockState|null;
  resetSettings?: boolean|null;
  $unknowns?: Uint8Array[];
} & (
  ({ responseType?: undefined; getDeviceInfo?: null; getLockState?: null; resetSettings?: null }|{ responseType?: "getDeviceInfo"; getDeviceInfo: zmk.core.GetDeviceInfoResponse.$Shape; getLockState?: null; resetSettings?: null }|{ responseType?: "getLockState"; getDeviceInfo?: null; getLockState: zmk.core.LockState; resetSettings?: null }|{ responseType?: "resetSettings"; getDeviceInfo?: null; getLockState?: null; resetSettings: boolean })
);
        }

        /**
         * Properties of a GetDeviceInfoResponse.
         * @deprecated Use zmk.core.GetDeviceInfoResponse.$Properties instead.
         */
        interface IGetDeviceInfoResponse extends zmk.core.GetDeviceInfoResponse.$Properties {
        }

        /** Represents a GetDeviceInfoResponse. */
        class GetDeviceInfoResponse {

            /**
             * Constructs a new GetDeviceInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.core.GetDeviceInfoResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** GetDeviceInfoResponse name. */
            name: string;

            /** GetDeviceInfoResponse serialNumber. */
            serialNumber: Uint8Array;

            /**
             * Creates a new GetDeviceInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetDeviceInfoResponse instance
             */
            static create(properties: zmk.core.GetDeviceInfoResponse.$Shape): zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape;
            static create(properties?: zmk.core.GetDeviceInfoResponse.$Properties): zmk.core.GetDeviceInfoResponse;

            /**
             * Encodes the specified GetDeviceInfoResponse message. Does not implicitly {@link zmk.core.GetDeviceInfoResponse.verify|verify} messages.
             * @param message GetDeviceInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.core.GetDeviceInfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetDeviceInfoResponse message, length delimited. Does not implicitly {@link zmk.core.GetDeviceInfoResponse.verify|verify} messages.
             * @param message GetDeviceInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.core.GetDeviceInfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetDeviceInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape} GetDeviceInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape;

            /**
             * Decodes a GetDeviceInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape} GetDeviceInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.core.GetDeviceInfoResponse & zmk.core.GetDeviceInfoResponse.$Shape;

            /**
             * Verifies a GetDeviceInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetDeviceInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetDeviceInfoResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.core.GetDeviceInfoResponse;

            /**
             * Creates a plain object from a GetDeviceInfoResponse message. Also converts values to other types if specified.
             * @param message GetDeviceInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.core.GetDeviceInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetDeviceInfoResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for GetDeviceInfoResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace GetDeviceInfoResponse {

            /** Properties of a GetDeviceInfoResponse. */
            interface $Properties {

                /** GetDeviceInfoResponse name */
                name?: (string|null);

                /** GetDeviceInfoResponse serialNumber */
                serialNumber?: (Uint8Array|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a GetDeviceInfoResponse. */
            type $Shape = zmk.core.GetDeviceInfoResponse.$Properties;
        }

        /**
         * Properties of a Notification.
         * @deprecated Use zmk.core.Notification.$Properties instead.
         */
        interface INotification extends zmk.core.Notification.$Properties {
        }

        /** Represents a Notification. */
        class Notification {

            /**
             * Constructs a new Notification.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.core.Notification.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Notification lockStateChanged. */
            lockStateChanged?: (zmk.core.LockState|null);

            /** Notification notificationType. */
            notificationType?: "lockStateChanged";

            /**
             * Creates a new Notification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Notification instance
             */
            static create(properties: zmk.core.Notification.$Shape): zmk.core.Notification & zmk.core.Notification.$Shape;
            static create(properties?: zmk.core.Notification.$Properties): zmk.core.Notification;

            /**
             * Encodes the specified Notification message. Does not implicitly {@link zmk.core.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.core.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link zmk.core.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.core.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.core.Notification & zmk.core.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.core.Notification & zmk.core.Notification.$Shape;

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.core.Notification & zmk.core.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.core.Notification & zmk.core.Notification.$Shape;

            /**
             * Verifies a Notification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Notification
             */
            static fromObject(object: { [k: string]: any }): zmk.core.Notification;

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @param message Notification
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.core.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Notification to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Notification
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Notification {

            /** Properties of a Notification. */
            interface $Properties {

                /** Notification lockStateChanged */
                lockStateChanged?: (zmk.core.LockState|null);

                /** Notification notificationType */
                notificationType?: "lockStateChanged";

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Notification. */
            type $Shape = {
  lockStateChanged?: zmk.core.LockState|null;
  $unknowns?: Uint8Array[];
} & (
  ({ notificationType?: undefined; lockStateChanged?: null }|{ notificationType?: "lockStateChanged"; lockStateChanged: zmk.core.LockState })
);
        }
    }

    /** Namespace keymap. */
    namespace keymap {

        /**
         * Properties of a Request.
         * @deprecated Use zmk.keymap.Request.$Properties instead.
         */
        interface IRequest extends zmk.keymap.Request.$Properties {
        }

        /** Represents a Request. */
        class Request {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.Request.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Request getKeymap. */
            getKeymap?: (boolean|null);

            /** Request setLayerBinding. */
            setLayerBinding?: (zmk.keymap.SetLayerBindingRequest.$Properties|null);

            /** Request checkUnsavedChanges. */
            checkUnsavedChanges?: (boolean|null);

            /** Request saveChanges. */
            saveChanges?: (boolean|null);

            /** Request discardChanges. */
            discardChanges?: (boolean|null);

            /** Request getPhysicalLayouts. */
            getPhysicalLayouts?: (boolean|null);

            /** Request setActivePhysicalLayout. */
            setActivePhysicalLayout?: (number|null);

            /** Request moveLayer. */
            moveLayer?: (zmk.keymap.MoveLayerRequest.$Properties|null);

            /** Request addLayer. */
            addLayer?: (zmk.keymap.AddLayerRequest.$Properties|null);

            /** Request removeLayer. */
            removeLayer?: (zmk.keymap.RemoveLayerRequest.$Properties|null);

            /** Request restoreLayer. */
            restoreLayer?: (zmk.keymap.RestoreLayerRequest.$Properties|null);

            /** Request setLayerProps. */
            setLayerProps?: (zmk.keymap.SetLayerPropsRequest.$Properties|null);

            /** Request requestType. */
            requestType?: ("getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps");

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            static create(properties: zmk.keymap.Request.$Shape): zmk.keymap.Request & zmk.keymap.Request.$Shape;
            static create(properties?: zmk.keymap.Request.$Properties): zmk.keymap.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.keymap.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.keymap.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.Request & zmk.keymap.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.Request & zmk.keymap.Request.$Shape;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.Request & zmk.keymap.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.Request & zmk.keymap.Request.$Shape;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Request
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Request {

            /** Properties of a Request. */
            interface $Properties {

                /** Request getKeymap */
                getKeymap?: (boolean|null);

                /** Request setLayerBinding */
                setLayerBinding?: (zmk.keymap.SetLayerBindingRequest.$Properties|null);

                /** Request checkUnsavedChanges */
                checkUnsavedChanges?: (boolean|null);

                /** Request saveChanges */
                saveChanges?: (boolean|null);

                /** Request discardChanges */
                discardChanges?: (boolean|null);

                /** Request getPhysicalLayouts */
                getPhysicalLayouts?: (boolean|null);

                /** Request setActivePhysicalLayout */
                setActivePhysicalLayout?: (number|null);

                /** Request moveLayer */
                moveLayer?: (zmk.keymap.MoveLayerRequest.$Properties|null);

                /** Request addLayer */
                addLayer?: (zmk.keymap.AddLayerRequest.$Properties|null);

                /** Request removeLayer */
                removeLayer?: (zmk.keymap.RemoveLayerRequest.$Properties|null);

                /** Request restoreLayer */
                restoreLayer?: (zmk.keymap.RestoreLayerRequest.$Properties|null);

                /** Request setLayerProps */
                setLayerProps?: (zmk.keymap.SetLayerPropsRequest.$Properties|null);

                /** Request requestType */
                requestType?: ("getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Request. */
            type $Shape = {
  getKeymap?: boolean|null;
  setLayerBinding?: zmk.keymap.SetLayerBindingRequest.$Shape|null;
  checkUnsavedChanges?: boolean|null;
  saveChanges?: boolean|null;
  discardChanges?: boolean|null;
  getPhysicalLayouts?: boolean|null;
  setActivePhysicalLayout?: number|null;
  moveLayer?: zmk.keymap.MoveLayerRequest.$Shape|null;
  addLayer?: zmk.keymap.AddLayerRequest.$Shape|null;
  removeLayer?: zmk.keymap.RemoveLayerRequest.$Shape|null;
  restoreLayer?: zmk.keymap.RestoreLayerRequest.$Shape|null;
  setLayerProps?: zmk.keymap.SetLayerPropsRequest.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ requestType?: undefined; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "getKeymap"; getKeymap: boolean; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "setLayerBinding"; getKeymap?: null; setLayerBinding: zmk.keymap.SetLayerBindingRequest.$Shape; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "checkUnsavedChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges: boolean; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "saveChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges: boolean; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "discardChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges: boolean; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "getPhysicalLayouts"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts: boolean; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "setActivePhysicalLayout"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout: number; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "moveLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer: zmk.keymap.MoveLayerRequest.$Shape; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "addLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer: zmk.keymap.AddLayerRequest.$Shape; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "removeLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer: zmk.keymap.RemoveLayerRequest.$Shape; restoreLayer?: null; setLayerProps?: null }|{ requestType?: "restoreLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer: zmk.keymap.RestoreLayerRequest.$Shape; setLayerProps?: null }|{ requestType?: "setLayerProps"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps: zmk.keymap.SetLayerPropsRequest.$Shape })
);
        }

        /**
         * Properties of a Response.
         * @deprecated Use zmk.keymap.Response.$Properties instead.
         */
        interface IResponse extends zmk.keymap.Response.$Properties {
        }

        /** Represents a Response. */
        class Response {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.Response.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Response getKeymap. */
            getKeymap?: (zmk.keymap.Keymap.$Properties|null);

            /** Response setLayerBinding. */
            setLayerBinding?: (zmk.keymap.SetLayerBindingResponse|null);

            /** Response checkUnsavedChanges. */
            checkUnsavedChanges?: (boolean|null);

            /** Response saveChanges. */
            saveChanges?: (zmk.keymap.SaveChangesResponse.$Properties|null);

            /** Response discardChanges. */
            discardChanges?: (boolean|null);

            /** Response getPhysicalLayouts. */
            getPhysicalLayouts?: (zmk.keymap.PhysicalLayouts.$Properties|null);

            /** Response setActivePhysicalLayout. */
            setActivePhysicalLayout?: (zmk.keymap.SetActivePhysicalLayoutResponse.$Properties|null);

            /** Response moveLayer. */
            moveLayer?: (zmk.keymap.MoveLayerResponse.$Properties|null);

            /** Response addLayer. */
            addLayer?: (zmk.keymap.AddLayerResponse.$Properties|null);

            /** Response removeLayer. */
            removeLayer?: (zmk.keymap.RemoveLayerResponse.$Properties|null);

            /** Response restoreLayer. */
            restoreLayer?: (zmk.keymap.RestoreLayerResponse.$Properties|null);

            /** Response setLayerProps. */
            setLayerProps?: (zmk.keymap.SetLayerPropsResponse|null);

            /** Response responseType. */
            responseType?: ("getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps");

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            static create(properties: zmk.keymap.Response.$Shape): zmk.keymap.Response & zmk.keymap.Response.$Shape;
            static create(properties?: zmk.keymap.Response.$Properties): zmk.keymap.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.keymap.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.keymap.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.Response & zmk.keymap.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.Response & zmk.keymap.Response.$Shape;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.Response & zmk.keymap.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.Response & zmk.keymap.Response.$Shape;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Response
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Response {

            /** Properties of a Response. */
            interface $Properties {

                /** Response getKeymap */
                getKeymap?: (zmk.keymap.Keymap.$Properties|null);

                /** Response setLayerBinding */
                setLayerBinding?: (zmk.keymap.SetLayerBindingResponse|null);

                /** Response checkUnsavedChanges */
                checkUnsavedChanges?: (boolean|null);

                /** Response saveChanges */
                saveChanges?: (zmk.keymap.SaveChangesResponse.$Properties|null);

                /** Response discardChanges */
                discardChanges?: (boolean|null);

                /** Response getPhysicalLayouts */
                getPhysicalLayouts?: (zmk.keymap.PhysicalLayouts.$Properties|null);

                /** Response setActivePhysicalLayout */
                setActivePhysicalLayout?: (zmk.keymap.SetActivePhysicalLayoutResponse.$Properties|null);

                /** Response moveLayer */
                moveLayer?: (zmk.keymap.MoveLayerResponse.$Properties|null);

                /** Response addLayer */
                addLayer?: (zmk.keymap.AddLayerResponse.$Properties|null);

                /** Response removeLayer */
                removeLayer?: (zmk.keymap.RemoveLayerResponse.$Properties|null);

                /** Response restoreLayer */
                restoreLayer?: (zmk.keymap.RestoreLayerResponse.$Properties|null);

                /** Response setLayerProps */
                setLayerProps?: (zmk.keymap.SetLayerPropsResponse|null);

                /** Response responseType */
                responseType?: ("getKeymap"|"setLayerBinding"|"checkUnsavedChanges"|"saveChanges"|"discardChanges"|"getPhysicalLayouts"|"setActivePhysicalLayout"|"moveLayer"|"addLayer"|"removeLayer"|"restoreLayer"|"setLayerProps");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Response. */
            type $Shape = {
  getKeymap?: zmk.keymap.Keymap.$Shape|null;
  setLayerBinding?: zmk.keymap.SetLayerBindingResponse|null;
  checkUnsavedChanges?: boolean|null;
  saveChanges?: zmk.keymap.SaveChangesResponse.$Shape|null;
  discardChanges?: boolean|null;
  getPhysicalLayouts?: zmk.keymap.PhysicalLayouts.$Shape|null;
  setActivePhysicalLayout?: zmk.keymap.SetActivePhysicalLayoutResponse.$Shape|null;
  moveLayer?: zmk.keymap.MoveLayerResponse.$Shape|null;
  addLayer?: zmk.keymap.AddLayerResponse.$Shape|null;
  removeLayer?: zmk.keymap.RemoveLayerResponse.$Shape|null;
  restoreLayer?: zmk.keymap.RestoreLayerResponse.$Shape|null;
  setLayerProps?: zmk.keymap.SetLayerPropsResponse|null;
  $unknowns?: Uint8Array[];
} & (
  ({ responseType?: undefined; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "getKeymap"; getKeymap: zmk.keymap.Keymap.$Shape; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "setLayerBinding"; getKeymap?: null; setLayerBinding: zmk.keymap.SetLayerBindingResponse; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "checkUnsavedChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges: boolean; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "saveChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges: zmk.keymap.SaveChangesResponse.$Shape; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "discardChanges"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges: boolean; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "getPhysicalLayouts"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts: zmk.keymap.PhysicalLayouts.$Shape; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "setActivePhysicalLayout"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout: zmk.keymap.SetActivePhysicalLayoutResponse.$Shape; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "moveLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer: zmk.keymap.MoveLayerResponse.$Shape; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "addLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer: zmk.keymap.AddLayerResponse.$Shape; removeLayer?: null; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "removeLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer: zmk.keymap.RemoveLayerResponse.$Shape; restoreLayer?: null; setLayerProps?: null }|{ responseType?: "restoreLayer"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer: zmk.keymap.RestoreLayerResponse.$Shape; setLayerProps?: null }|{ responseType?: "setLayerProps"; getKeymap?: null; setLayerBinding?: null; checkUnsavedChanges?: null; saveChanges?: null; discardChanges?: null; getPhysicalLayouts?: null; setActivePhysicalLayout?: null; moveLayer?: null; addLayer?: null; removeLayer?: null; restoreLayer?: null; setLayerProps: zmk.keymap.SetLayerPropsResponse })
);
        }

        /**
         * Properties of a Notification.
         * @deprecated Use zmk.keymap.Notification.$Properties instead.
         */
        interface INotification extends zmk.keymap.Notification.$Properties {
        }

        /** Represents a Notification. */
        class Notification {

            /**
             * Constructs a new Notification.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.Notification.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Notification unsavedChangesStatusChanged. */
            unsavedChangesStatusChanged?: (boolean|null);

            /** Notification notificationType. */
            notificationType?: "unsavedChangesStatusChanged";

            /**
             * Creates a new Notification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Notification instance
             */
            static create(properties: zmk.keymap.Notification.$Shape): zmk.keymap.Notification & zmk.keymap.Notification.$Shape;
            static create(properties?: zmk.keymap.Notification.$Properties): zmk.keymap.Notification;

            /**
             * Encodes the specified Notification message. Does not implicitly {@link zmk.keymap.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link zmk.keymap.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.Notification & zmk.keymap.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.Notification & zmk.keymap.Notification.$Shape;

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.Notification & zmk.keymap.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.Notification & zmk.keymap.Notification.$Shape;

            /**
             * Verifies a Notification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Notification
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.Notification;

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @param message Notification
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Notification to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Notification
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Notification {

            /** Properties of a Notification. */
            interface $Properties {

                /** Notification unsavedChangesStatusChanged */
                unsavedChangesStatusChanged?: (boolean|null);

                /** Notification notificationType */
                notificationType?: "unsavedChangesStatusChanged";

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Notification. */
            type $Shape = {
  unsavedChangesStatusChanged?: boolean|null;
  $unknowns?: Uint8Array[];
} & (
  ({ notificationType?: undefined; unsavedChangesStatusChanged?: null }|{ notificationType?: "unsavedChangesStatusChanged"; unsavedChangesStatusChanged: boolean })
);
        }

        /**
         * Properties of a SaveChangesResponse.
         * @deprecated Use zmk.keymap.SaveChangesResponse.$Properties instead.
         */
        interface ISaveChangesResponse extends zmk.keymap.SaveChangesResponse.$Properties {
        }

        /** Represents a SaveChangesResponse. */
        class SaveChangesResponse {

            /**
             * Constructs a new SaveChangesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.SaveChangesResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** SaveChangesResponse ok. */
            ok?: (boolean|null);

            /** SaveChangesResponse err. */
            err?: (zmk.keymap.SaveChangesErrorCode|null);

            /** SaveChangesResponse result. */
            result?: ("ok"|"err");

            /**
             * Creates a new SaveChangesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveChangesResponse instance
             */
            static create(properties: zmk.keymap.SaveChangesResponse.$Shape): zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape;
            static create(properties?: zmk.keymap.SaveChangesResponse.$Properties): zmk.keymap.SaveChangesResponse;

            /**
             * Encodes the specified SaveChangesResponse message. Does not implicitly {@link zmk.keymap.SaveChangesResponse.verify|verify} messages.
             * @param message SaveChangesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.SaveChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveChangesResponse message, length delimited. Does not implicitly {@link zmk.keymap.SaveChangesResponse.verify|verify} messages.
             * @param message SaveChangesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.SaveChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveChangesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape} SaveChangesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape;

            /**
             * Decodes a SaveChangesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape} SaveChangesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.SaveChangesResponse & zmk.keymap.SaveChangesResponse.$Shape;

            /**
             * Verifies a SaveChangesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveChangesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveChangesResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.SaveChangesResponse;

            /**
             * Creates a plain object from a SaveChangesResponse message. Also converts values to other types if specified.
             * @param message SaveChangesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.SaveChangesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveChangesResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SaveChangesResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SaveChangesResponse {

            /** Properties of a SaveChangesResponse. */
            interface $Properties {

                /** SaveChangesResponse ok */
                ok?: (boolean|null);

                /** SaveChangesResponse err */
                err?: (zmk.keymap.SaveChangesErrorCode|null);

                /** SaveChangesResponse result */
                result?: ("ok"|"err");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a SaveChangesResponse. */
            type $Shape = {
  ok?: boolean|null;
  err?: zmk.keymap.SaveChangesErrorCode|null;
  $unknowns?: Uint8Array[];
} & (
  ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: boolean; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.SaveChangesErrorCode })
);
        }

        /** SaveChangesErrorCode enum. */
        enum SaveChangesErrorCode {

            /** SAVE_CHANGES_ERR_OK value */
            SAVE_CHANGES_ERR_OK = 0,

            /** SAVE_CHANGES_ERR_GENERIC value */
            SAVE_CHANGES_ERR_GENERIC = 1,

            /** SAVE_CHANGES_ERR_NOT_SUPPORTED value */
            SAVE_CHANGES_ERR_NOT_SUPPORTED = 2,

            /** SAVE_CHANGES_ERR_NO_SPACE value */
            SAVE_CHANGES_ERR_NO_SPACE = 3
        }

        /** SetLayerBindingResponse enum. */
        enum SetLayerBindingResponse {

            /** SET_LAYER_BINDING_RESP_OK value */
            SET_LAYER_BINDING_RESP_OK = 0,

            /** SET_LAYER_BINDING_RESP_INVALID_LOCATION value */
            SET_LAYER_BINDING_RESP_INVALID_LOCATION = 1,

            /** SET_LAYER_BINDING_RESP_INVALID_BEHAVIOR value */
            SET_LAYER_BINDING_RESP_INVALID_BEHAVIOR = 2,

            /** SET_LAYER_BINDING_RESP_INVALID_PARAMETERS value */
            SET_LAYER_BINDING_RESP_INVALID_PARAMETERS = 3
        }

        /**
         * Properties of a SetActivePhysicalLayoutResponse.
         * @deprecated Use zmk.keymap.SetActivePhysicalLayoutResponse.$Properties instead.
         */
        interface ISetActivePhysicalLayoutResponse extends zmk.keymap.SetActivePhysicalLayoutResponse.$Properties {
        }

        /** Represents a SetActivePhysicalLayoutResponse. */
        class SetActivePhysicalLayoutResponse {

            /**
             * Constructs a new SetActivePhysicalLayoutResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.SetActivePhysicalLayoutResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** SetActivePhysicalLayoutResponse ok. */
            ok?: (zmk.keymap.Keymap.$Properties|null);

            /** SetActivePhysicalLayoutResponse err. */
            err?: (zmk.keymap.SetActivePhysicalLayoutErrorCode|null);

            /** SetActivePhysicalLayoutResponse result. */
            result?: ("ok"|"err");

            /**
             * Creates a new SetActivePhysicalLayoutResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetActivePhysicalLayoutResponse instance
             */
            static create(properties: zmk.keymap.SetActivePhysicalLayoutResponse.$Shape): zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape;
            static create(properties?: zmk.keymap.SetActivePhysicalLayoutResponse.$Properties): zmk.keymap.SetActivePhysicalLayoutResponse;

            /**
             * Encodes the specified SetActivePhysicalLayoutResponse message. Does not implicitly {@link zmk.keymap.SetActivePhysicalLayoutResponse.verify|verify} messages.
             * @param message SetActivePhysicalLayoutResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.SetActivePhysicalLayoutResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetActivePhysicalLayoutResponse message, length delimited. Does not implicitly {@link zmk.keymap.SetActivePhysicalLayoutResponse.verify|verify} messages.
             * @param message SetActivePhysicalLayoutResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.SetActivePhysicalLayoutResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetActivePhysicalLayoutResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape} SetActivePhysicalLayoutResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape;

            /**
             * Decodes a SetActivePhysicalLayoutResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape} SetActivePhysicalLayoutResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.SetActivePhysicalLayoutResponse & zmk.keymap.SetActivePhysicalLayoutResponse.$Shape;

            /**
             * Verifies a SetActivePhysicalLayoutResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetActivePhysicalLayoutResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetActivePhysicalLayoutResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.SetActivePhysicalLayoutResponse;

            /**
             * Creates a plain object from a SetActivePhysicalLayoutResponse message. Also converts values to other types if specified.
             * @param message SetActivePhysicalLayoutResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.SetActivePhysicalLayoutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetActivePhysicalLayoutResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SetActivePhysicalLayoutResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SetActivePhysicalLayoutResponse {

            /** Properties of a SetActivePhysicalLayoutResponse. */
            interface $Properties {

                /** SetActivePhysicalLayoutResponse ok */
                ok?: (zmk.keymap.Keymap.$Properties|null);

                /** SetActivePhysicalLayoutResponse err */
                err?: (zmk.keymap.SetActivePhysicalLayoutErrorCode|null);

                /** SetActivePhysicalLayoutResponse result */
                result?: ("ok"|"err");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a SetActivePhysicalLayoutResponse. */
            type $Shape = {
  ok?: zmk.keymap.Keymap.$Shape|null;
  err?: zmk.keymap.SetActivePhysicalLayoutErrorCode|null;
  $unknowns?: Uint8Array[];
} & (
  ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.Keymap.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.SetActivePhysicalLayoutErrorCode })
);
        }

        /** MoveLayerErrorCode enum. */
        enum MoveLayerErrorCode {

            /** MOVE_LAYER_ERR_OK value */
            MOVE_LAYER_ERR_OK = 0,

            /** MOVE_LAYER_ERR_GENERIC value */
            MOVE_LAYER_ERR_GENERIC = 1,

            /** MOVE_LAYER_ERR_INVALID_LAYER value */
            MOVE_LAYER_ERR_INVALID_LAYER = 2,

            /** MOVE_LAYER_ERR_INVALID_DESTINATION value */
            MOVE_LAYER_ERR_INVALID_DESTINATION = 3
        }

        /**
         * Properties of a MoveLayerResponse.
         * @deprecated Use zmk.keymap.MoveLayerResponse.$Properties instead.
         */
        interface IMoveLayerResponse extends zmk.keymap.MoveLayerResponse.$Properties {
        }

        /** Represents a MoveLayerResponse. */
        class MoveLayerResponse {

            /**
             * Constructs a new MoveLayerResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.MoveLayerResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** MoveLayerResponse ok. */
            ok?: (zmk.keymap.Keymap.$Properties|null);

            /** MoveLayerResponse err. */
            err?: (zmk.keymap.MoveLayerErrorCode|null);

            /** MoveLayerResponse result. */
            result?: ("ok"|"err");

            /**
             * Creates a new MoveLayerResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveLayerResponse instance
             */
            static create(properties: zmk.keymap.MoveLayerResponse.$Shape): zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape;
            static create(properties?: zmk.keymap.MoveLayerResponse.$Properties): zmk.keymap.MoveLayerResponse;

            /**
             * Encodes the specified MoveLayerResponse message. Does not implicitly {@link zmk.keymap.MoveLayerResponse.verify|verify} messages.
             * @param message MoveLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.MoveLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MoveLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.MoveLayerResponse.verify|verify} messages.
             * @param message MoveLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.MoveLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveLayerResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape} MoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape;

            /**
             * Decodes a MoveLayerResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape} MoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.MoveLayerResponse & zmk.keymap.MoveLayerResponse.$Shape;

            /**
             * Verifies a MoveLayerResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MoveLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveLayerResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.MoveLayerResponse;

            /**
             * Creates a plain object from a MoveLayerResponse message. Also converts values to other types if specified.
             * @param message MoveLayerResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.MoveLayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveLayerResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MoveLayerResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MoveLayerResponse {

            /** Properties of a MoveLayerResponse. */
            interface $Properties {

                /** MoveLayerResponse ok */
                ok?: (zmk.keymap.Keymap.$Properties|null);

                /** MoveLayerResponse err */
                err?: (zmk.keymap.MoveLayerErrorCode|null);

                /** MoveLayerResponse result */
                result?: ("ok"|"err");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a MoveLayerResponse. */
            type $Shape = {
  ok?: zmk.keymap.Keymap.$Shape|null;
  err?: zmk.keymap.MoveLayerErrorCode|null;
  $unknowns?: Uint8Array[];
} & (
  ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.Keymap.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.MoveLayerErrorCode })
);
        }

        /**
         * Properties of an AddLayerResponse.
         * @deprecated Use zmk.keymap.AddLayerResponse.$Properties instead.
         */
        interface IAddLayerResponse extends zmk.keymap.AddLayerResponse.$Properties {
        }

        /** Represents an AddLayerResponse. */
        class AddLayerResponse {

            /**
             * Constructs a new AddLayerResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.AddLayerResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** AddLayerResponse ok. */
            ok?: (zmk.keymap.AddLayerResponseDetails.$Properties|null);

            /** AddLayerResponse err. */
            err?: (zmk.keymap.AddLayerErrorCode|null);

            /** AddLayerResponse result. */
            result?: ("ok"|"err");

            /**
             * Creates a new AddLayerResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddLayerResponse instance
             */
            static create(properties: zmk.keymap.AddLayerResponse.$Shape): zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape;
            static create(properties?: zmk.keymap.AddLayerResponse.$Properties): zmk.keymap.AddLayerResponse;

            /**
             * Encodes the specified AddLayerResponse message. Does not implicitly {@link zmk.keymap.AddLayerResponse.verify|verify} messages.
             * @param message AddLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.AddLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.AddLayerResponse.verify|verify} messages.
             * @param message AddLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.AddLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddLayerResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape} AddLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape;

            /**
             * Decodes an AddLayerResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape} AddLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.AddLayerResponse & zmk.keymap.AddLayerResponse.$Shape;

            /**
             * Verifies an AddLayerResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddLayerResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.AddLayerResponse;

            /**
             * Creates a plain object from an AddLayerResponse message. Also converts values to other types if specified.
             * @param message AddLayerResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.AddLayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddLayerResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AddLayerResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AddLayerResponse {

            /** Properties of an AddLayerResponse. */
            interface $Properties {

                /** AddLayerResponse ok */
                ok?: (zmk.keymap.AddLayerResponseDetails.$Properties|null);

                /** AddLayerResponse err */
                err?: (zmk.keymap.AddLayerErrorCode|null);

                /** AddLayerResponse result */
                result?: ("ok"|"err");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of an AddLayerResponse. */
            type $Shape = {
  ok?: zmk.keymap.AddLayerResponseDetails.$Shape|null;
  err?: zmk.keymap.AddLayerErrorCode|null;
  $unknowns?: Uint8Array[];
} & (
  ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.AddLayerResponseDetails.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.AddLayerErrorCode })
);
        }

        /** AddLayerErrorCode enum. */
        enum AddLayerErrorCode {

            /** ADD_LAYER_ERR_OK value */
            ADD_LAYER_ERR_OK = 0,

            /** ADD_LAYER_ERR_GENERIC value */
            ADD_LAYER_ERR_GENERIC = 1,

            /** ADD_LAYER_ERR_NO_SPACE value */
            ADD_LAYER_ERR_NO_SPACE = 2
        }

        /**
         * Properties of an AddLayerResponseDetails.
         * @deprecated Use zmk.keymap.AddLayerResponseDetails.$Properties instead.
         */
        interface IAddLayerResponseDetails extends zmk.keymap.AddLayerResponseDetails.$Properties {
        }

        /** Represents an AddLayerResponseDetails. */
        class AddLayerResponseDetails {

            /**
             * Constructs a new AddLayerResponseDetails.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.AddLayerResponseDetails.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** AddLayerResponseDetails index. */
            index: number;

            /** AddLayerResponseDetails layer. */
            layer?: (zmk.keymap.Layer.$Properties|null);

            /**
             * Creates a new AddLayerResponseDetails instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddLayerResponseDetails instance
             */
            static create(properties: zmk.keymap.AddLayerResponseDetails.$Shape): zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape;
            static create(properties?: zmk.keymap.AddLayerResponseDetails.$Properties): zmk.keymap.AddLayerResponseDetails;

            /**
             * Encodes the specified AddLayerResponseDetails message. Does not implicitly {@link zmk.keymap.AddLayerResponseDetails.verify|verify} messages.
             * @param message AddLayerResponseDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.AddLayerResponseDetails.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddLayerResponseDetails message, length delimited. Does not implicitly {@link zmk.keymap.AddLayerResponseDetails.verify|verify} messages.
             * @param message AddLayerResponseDetails message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.AddLayerResponseDetails.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddLayerResponseDetails message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape} AddLayerResponseDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape;

            /**
             * Decodes an AddLayerResponseDetails message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape} AddLayerResponseDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.AddLayerResponseDetails & zmk.keymap.AddLayerResponseDetails.$Shape;

            /**
             * Verifies an AddLayerResponseDetails message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddLayerResponseDetails message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddLayerResponseDetails
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.AddLayerResponseDetails;

            /**
             * Creates a plain object from an AddLayerResponseDetails message. Also converts values to other types if specified.
             * @param message AddLayerResponseDetails
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.AddLayerResponseDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddLayerResponseDetails to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AddLayerResponseDetails
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AddLayerResponseDetails {

            /** Properties of an AddLayerResponseDetails. */
            interface $Properties {

                /** AddLayerResponseDetails index */
                index?: (number|null);

                /** AddLayerResponseDetails layer */
                layer?: (zmk.keymap.Layer.$Properties|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AddLayerResponseDetails. */
            type $Shape = zmk.keymap.AddLayerResponseDetails.$Properties;
        }

        /**
         * Properties of a RemoveLayerResponse.
         * @deprecated Use zmk.keymap.RemoveLayerResponse.$Properties instead.
         */
        interface IRemoveLayerResponse extends zmk.keymap.RemoveLayerResponse.$Properties {
        }

        /** Represents a RemoveLayerResponse. */
        class RemoveLayerResponse {

            /**
             * Constructs a new RemoveLayerResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.RemoveLayerResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RemoveLayerResponse ok. */
            ok?: (zmk.keymap.RemoveLayerOk.$Properties|null);

            /** RemoveLayerResponse err. */
            err?: (zmk.keymap.RemoveLayerErrorCode|null);

            /** RemoveLayerResponse result. */
            result?: ("ok"|"err");

            /**
             * Creates a new RemoveLayerResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveLayerResponse instance
             */
            static create(properties: zmk.keymap.RemoveLayerResponse.$Shape): zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape;
            static create(properties?: zmk.keymap.RemoveLayerResponse.$Properties): zmk.keymap.RemoveLayerResponse;

            /**
             * Encodes the specified RemoveLayerResponse message. Does not implicitly {@link zmk.keymap.RemoveLayerResponse.verify|verify} messages.
             * @param message RemoveLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.RemoveLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.RemoveLayerResponse.verify|verify} messages.
             * @param message RemoveLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.RemoveLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveLayerResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape} RemoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape;

            /**
             * Decodes a RemoveLayerResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape} RemoveLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.RemoveLayerResponse & zmk.keymap.RemoveLayerResponse.$Shape;

            /**
             * Verifies a RemoveLayerResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveLayerResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.RemoveLayerResponse;

            /**
             * Creates a plain object from a RemoveLayerResponse message. Also converts values to other types if specified.
             * @param message RemoveLayerResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.RemoveLayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveLayerResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RemoveLayerResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RemoveLayerResponse {

            /** Properties of a RemoveLayerResponse. */
            interface $Properties {

                /** RemoveLayerResponse ok */
                ok?: (zmk.keymap.RemoveLayerOk.$Properties|null);

                /** RemoveLayerResponse err */
                err?: (zmk.keymap.RemoveLayerErrorCode|null);

                /** RemoveLayerResponse result */
                result?: ("ok"|"err");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a RemoveLayerResponse. */
            type $Shape = {
  ok?: zmk.keymap.RemoveLayerOk.$Shape|null;
  err?: zmk.keymap.RemoveLayerErrorCode|null;
  $unknowns?: Uint8Array[];
} & (
  ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.RemoveLayerOk.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.RemoveLayerErrorCode })
);
        }

        /**
         * Properties of a RemoveLayerOk.
         * @deprecated Use zmk.keymap.RemoveLayerOk.$Properties instead.
         */
        interface IRemoveLayerOk extends zmk.keymap.RemoveLayerOk.$Properties {
        }

        /** Represents a RemoveLayerOk. */
        class RemoveLayerOk {

            /**
             * Constructs a new RemoveLayerOk.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.RemoveLayerOk.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new RemoveLayerOk instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveLayerOk instance
             */
            static create(properties: zmk.keymap.RemoveLayerOk.$Shape): zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape;
            static create(properties?: zmk.keymap.RemoveLayerOk.$Properties): zmk.keymap.RemoveLayerOk;

            /**
             * Encodes the specified RemoveLayerOk message. Does not implicitly {@link zmk.keymap.RemoveLayerOk.verify|verify} messages.
             * @param message RemoveLayerOk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.RemoveLayerOk.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveLayerOk message, length delimited. Does not implicitly {@link zmk.keymap.RemoveLayerOk.verify|verify} messages.
             * @param message RemoveLayerOk message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.RemoveLayerOk.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveLayerOk message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape} RemoveLayerOk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape;

            /**
             * Decodes a RemoveLayerOk message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape} RemoveLayerOk
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.RemoveLayerOk & zmk.keymap.RemoveLayerOk.$Shape;

            /**
             * Verifies a RemoveLayerOk message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveLayerOk message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveLayerOk
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.RemoveLayerOk;

            /**
             * Creates a plain object from a RemoveLayerOk message. Also converts values to other types if specified.
             * @param message RemoveLayerOk
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.RemoveLayerOk, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveLayerOk to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RemoveLayerOk
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RemoveLayerOk {

            /** Properties of a RemoveLayerOk. */
            interface $Properties {

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RemoveLayerOk. */
            type $Shape = zmk.keymap.RemoveLayerOk.$Properties;
        }

        /** RemoveLayerErrorCode enum. */
        enum RemoveLayerErrorCode {

            /** REMOVE_LAYER_ERR_OK value */
            REMOVE_LAYER_ERR_OK = 0,

            /** REMOVE_LAYER_ERR_GENERIC value */
            REMOVE_LAYER_ERR_GENERIC = 1,

            /** REMOVE_LAYER_ERR_INVALID_INDEX value */
            REMOVE_LAYER_ERR_INVALID_INDEX = 2
        }

        /**
         * Properties of a RestoreLayerResponse.
         * @deprecated Use zmk.keymap.RestoreLayerResponse.$Properties instead.
         */
        interface IRestoreLayerResponse extends zmk.keymap.RestoreLayerResponse.$Properties {
        }

        /** Represents a RestoreLayerResponse. */
        class RestoreLayerResponse {

            /**
             * Constructs a new RestoreLayerResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.RestoreLayerResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RestoreLayerResponse ok. */
            ok?: (zmk.keymap.Layer.$Properties|null);

            /** RestoreLayerResponse err. */
            err?: (zmk.keymap.RestoreLayerErrorCode|null);

            /** RestoreLayerResponse result. */
            result?: ("ok"|"err");

            /**
             * Creates a new RestoreLayerResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RestoreLayerResponse instance
             */
            static create(properties: zmk.keymap.RestoreLayerResponse.$Shape): zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape;
            static create(properties?: zmk.keymap.RestoreLayerResponse.$Properties): zmk.keymap.RestoreLayerResponse;

            /**
             * Encodes the specified RestoreLayerResponse message. Does not implicitly {@link zmk.keymap.RestoreLayerResponse.verify|verify} messages.
             * @param message RestoreLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.RestoreLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RestoreLayerResponse message, length delimited. Does not implicitly {@link zmk.keymap.RestoreLayerResponse.verify|verify} messages.
             * @param message RestoreLayerResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.RestoreLayerResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RestoreLayerResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape} RestoreLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape;

            /**
             * Decodes a RestoreLayerResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape} RestoreLayerResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.RestoreLayerResponse & zmk.keymap.RestoreLayerResponse.$Shape;

            /**
             * Verifies a RestoreLayerResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RestoreLayerResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RestoreLayerResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.RestoreLayerResponse;

            /**
             * Creates a plain object from a RestoreLayerResponse message. Also converts values to other types if specified.
             * @param message RestoreLayerResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.RestoreLayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RestoreLayerResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RestoreLayerResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RestoreLayerResponse {

            /** Properties of a RestoreLayerResponse. */
            interface $Properties {

                /** RestoreLayerResponse ok */
                ok?: (zmk.keymap.Layer.$Properties|null);

                /** RestoreLayerResponse err */
                err?: (zmk.keymap.RestoreLayerErrorCode|null);

                /** RestoreLayerResponse result */
                result?: ("ok"|"err");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a RestoreLayerResponse. */
            type $Shape = {
  ok?: zmk.keymap.Layer.$Shape|null;
  err?: zmk.keymap.RestoreLayerErrorCode|null;
  $unknowns?: Uint8Array[];
} & (
  ({ result?: undefined; ok?: null; err?: null }|{ result?: "ok"; ok: zmk.keymap.Layer.$Shape; err?: null }|{ result?: "err"; ok?: null; err: zmk.keymap.RestoreLayerErrorCode })
);
        }

        /** RestoreLayerErrorCode enum. */
        enum RestoreLayerErrorCode {

            /** RESTORE_LAYER_ERR_OK value */
            RESTORE_LAYER_ERR_OK = 0,

            /** RESTORE_LAYER_ERR_GENERIC value */
            RESTORE_LAYER_ERR_GENERIC = 1,

            /** RESTORE_LAYER_ERR_INVALID_ID value */
            RESTORE_LAYER_ERR_INVALID_ID = 2,

            /** RESTORE_LAYER_ERR_INVALID_INDEX value */
            RESTORE_LAYER_ERR_INVALID_INDEX = 3
        }

        /** SetLayerPropsResponse enum. */
        enum SetLayerPropsResponse {

            /** SET_LAYER_PROPS_RESP_OK value */
            SET_LAYER_PROPS_RESP_OK = 0,

            /** SET_LAYER_PROPS_RESP_ERR_GENERIC value */
            SET_LAYER_PROPS_RESP_ERR_GENERIC = 1,

            /** SET_LAYER_PROPS_RESP_ERR_INVALID_ID value */
            SET_LAYER_PROPS_RESP_ERR_INVALID_ID = 2
        }

        /** SetActivePhysicalLayoutErrorCode enum. */
        enum SetActivePhysicalLayoutErrorCode {

            /** SET_ACTIVE_PHYSICAL_LAYOUT_ERR_OK value */
            SET_ACTIVE_PHYSICAL_LAYOUT_ERR_OK = 0,

            /** SET_ACTIVE_PHYSICAL_LAYOUT_ERR_GENERIC value */
            SET_ACTIVE_PHYSICAL_LAYOUT_ERR_GENERIC = 1,

            /** SET_ACTIVE_PHYSICAL_LAYOUT_ERR_INVALID_LAYOUT_INDEX value */
            SET_ACTIVE_PHYSICAL_LAYOUT_ERR_INVALID_LAYOUT_INDEX = 2
        }

        /**
         * Properties of a SetLayerBindingRequest.
         * @deprecated Use zmk.keymap.SetLayerBindingRequest.$Properties instead.
         */
        interface ISetLayerBindingRequest extends zmk.keymap.SetLayerBindingRequest.$Properties {
        }

        /** Represents a SetLayerBindingRequest. */
        class SetLayerBindingRequest {

            /**
             * Constructs a new SetLayerBindingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.SetLayerBindingRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** SetLayerBindingRequest layerId. */
            layerId: number;

            /** SetLayerBindingRequest keyPosition. */
            keyPosition: number;

            /** SetLayerBindingRequest binding. */
            binding?: (zmk.keymap.BehaviorBinding.$Properties|null);

            /**
             * Creates a new SetLayerBindingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetLayerBindingRequest instance
             */
            static create(properties: zmk.keymap.SetLayerBindingRequest.$Shape): zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape;
            static create(properties?: zmk.keymap.SetLayerBindingRequest.$Properties): zmk.keymap.SetLayerBindingRequest;

            /**
             * Encodes the specified SetLayerBindingRequest message. Does not implicitly {@link zmk.keymap.SetLayerBindingRequest.verify|verify} messages.
             * @param message SetLayerBindingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.SetLayerBindingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetLayerBindingRequest message, length delimited. Does not implicitly {@link zmk.keymap.SetLayerBindingRequest.verify|verify} messages.
             * @param message SetLayerBindingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.SetLayerBindingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetLayerBindingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape} SetLayerBindingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape;

            /**
             * Decodes a SetLayerBindingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape} SetLayerBindingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.SetLayerBindingRequest & zmk.keymap.SetLayerBindingRequest.$Shape;

            /**
             * Verifies a SetLayerBindingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetLayerBindingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetLayerBindingRequest
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.SetLayerBindingRequest;

            /**
             * Creates a plain object from a SetLayerBindingRequest message. Also converts values to other types if specified.
             * @param message SetLayerBindingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.SetLayerBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetLayerBindingRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SetLayerBindingRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SetLayerBindingRequest {

            /** Properties of a SetLayerBindingRequest. */
            interface $Properties {

                /** SetLayerBindingRequest layerId */
                layerId?: (number|null);

                /** SetLayerBindingRequest keyPosition */
                keyPosition?: (number|null);

                /** SetLayerBindingRequest binding */
                binding?: (zmk.keymap.BehaviorBinding.$Properties|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SetLayerBindingRequest. */
            type $Shape = zmk.keymap.SetLayerBindingRequest.$Properties;
        }

        /**
         * Properties of a MoveLayerRequest.
         * @deprecated Use zmk.keymap.MoveLayerRequest.$Properties instead.
         */
        interface IMoveLayerRequest extends zmk.keymap.MoveLayerRequest.$Properties {
        }

        /** Represents a MoveLayerRequest. */
        class MoveLayerRequest {

            /**
             * Constructs a new MoveLayerRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.MoveLayerRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** MoveLayerRequest startIndex. */
            startIndex: number;

            /** MoveLayerRequest destIndex. */
            destIndex: number;

            /**
             * Creates a new MoveLayerRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MoveLayerRequest instance
             */
            static create(properties: zmk.keymap.MoveLayerRequest.$Shape): zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape;
            static create(properties?: zmk.keymap.MoveLayerRequest.$Properties): zmk.keymap.MoveLayerRequest;

            /**
             * Encodes the specified MoveLayerRequest message. Does not implicitly {@link zmk.keymap.MoveLayerRequest.verify|verify} messages.
             * @param message MoveLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.MoveLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MoveLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.MoveLayerRequest.verify|verify} messages.
             * @param message MoveLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.MoveLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MoveLayerRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape} MoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape;

            /**
             * Decodes a MoveLayerRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape} MoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.MoveLayerRequest & zmk.keymap.MoveLayerRequest.$Shape;

            /**
             * Verifies a MoveLayerRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MoveLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MoveLayerRequest
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.MoveLayerRequest;

            /**
             * Creates a plain object from a MoveLayerRequest message. Also converts values to other types if specified.
             * @param message MoveLayerRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.MoveLayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MoveLayerRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for MoveLayerRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace MoveLayerRequest {

            /** Properties of a MoveLayerRequest. */
            interface $Properties {

                /** MoveLayerRequest startIndex */
                startIndex?: (number|null);

                /** MoveLayerRequest destIndex */
                destIndex?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a MoveLayerRequest. */
            type $Shape = zmk.keymap.MoveLayerRequest.$Properties;
        }

        /**
         * Properties of an AddLayerRequest.
         * @deprecated Use zmk.keymap.AddLayerRequest.$Properties instead.
         */
        interface IAddLayerRequest extends zmk.keymap.AddLayerRequest.$Properties {
        }

        /** Represents an AddLayerRequest. */
        class AddLayerRequest {

            /**
             * Constructs a new AddLayerRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.AddLayerRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /**
             * Creates a new AddLayerRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddLayerRequest instance
             */
            static create(properties: zmk.keymap.AddLayerRequest.$Shape): zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape;
            static create(properties?: zmk.keymap.AddLayerRequest.$Properties): zmk.keymap.AddLayerRequest;

            /**
             * Encodes the specified AddLayerRequest message. Does not implicitly {@link zmk.keymap.AddLayerRequest.verify|verify} messages.
             * @param message AddLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.AddLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.AddLayerRequest.verify|verify} messages.
             * @param message AddLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.AddLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddLayerRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape} AddLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape;

            /**
             * Decodes an AddLayerRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape} AddLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.AddLayerRequest & zmk.keymap.AddLayerRequest.$Shape;

            /**
             * Verifies an AddLayerRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddLayerRequest
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.AddLayerRequest;

            /**
             * Creates a plain object from an AddLayerRequest message. Also converts values to other types if specified.
             * @param message AddLayerRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.AddLayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddLayerRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for AddLayerRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace AddLayerRequest {

            /** Properties of an AddLayerRequest. */
            interface $Properties {

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of an AddLayerRequest. */
            type $Shape = zmk.keymap.AddLayerRequest.$Properties;
        }

        /**
         * Properties of a RemoveLayerRequest.
         * @deprecated Use zmk.keymap.RemoveLayerRequest.$Properties instead.
         */
        interface IRemoveLayerRequest extends zmk.keymap.RemoveLayerRequest.$Properties {
        }

        /** Represents a RemoveLayerRequest. */
        class RemoveLayerRequest {

            /**
             * Constructs a new RemoveLayerRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.RemoveLayerRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RemoveLayerRequest layerIndex. */
            layerIndex: number;

            /**
             * Creates a new RemoveLayerRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveLayerRequest instance
             */
            static create(properties: zmk.keymap.RemoveLayerRequest.$Shape): zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape;
            static create(properties?: zmk.keymap.RemoveLayerRequest.$Properties): zmk.keymap.RemoveLayerRequest;

            /**
             * Encodes the specified RemoveLayerRequest message. Does not implicitly {@link zmk.keymap.RemoveLayerRequest.verify|verify} messages.
             * @param message RemoveLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.RemoveLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.RemoveLayerRequest.verify|verify} messages.
             * @param message RemoveLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.RemoveLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveLayerRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape} RemoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape;

            /**
             * Decodes a RemoveLayerRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape} RemoveLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.RemoveLayerRequest & zmk.keymap.RemoveLayerRequest.$Shape;

            /**
             * Verifies a RemoveLayerRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveLayerRequest
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.RemoveLayerRequest;

            /**
             * Creates a plain object from a RemoveLayerRequest message. Also converts values to other types if specified.
             * @param message RemoveLayerRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.RemoveLayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveLayerRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RemoveLayerRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RemoveLayerRequest {

            /** Properties of a RemoveLayerRequest. */
            interface $Properties {

                /** RemoveLayerRequest layerIndex */
                layerIndex?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RemoveLayerRequest. */
            type $Shape = zmk.keymap.RemoveLayerRequest.$Properties;
        }

        /**
         * Properties of a RestoreLayerRequest.
         * @deprecated Use zmk.keymap.RestoreLayerRequest.$Properties instead.
         */
        interface IRestoreLayerRequest extends zmk.keymap.RestoreLayerRequest.$Properties {
        }

        /** Represents a RestoreLayerRequest. */
        class RestoreLayerRequest {

            /**
             * Constructs a new RestoreLayerRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.RestoreLayerRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RestoreLayerRequest layerId. */
            layerId: number;

            /** RestoreLayerRequest atIndex. */
            atIndex: number;

            /**
             * Creates a new RestoreLayerRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RestoreLayerRequest instance
             */
            static create(properties: zmk.keymap.RestoreLayerRequest.$Shape): zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape;
            static create(properties?: zmk.keymap.RestoreLayerRequest.$Properties): zmk.keymap.RestoreLayerRequest;

            /**
             * Encodes the specified RestoreLayerRequest message. Does not implicitly {@link zmk.keymap.RestoreLayerRequest.verify|verify} messages.
             * @param message RestoreLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.RestoreLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RestoreLayerRequest message, length delimited. Does not implicitly {@link zmk.keymap.RestoreLayerRequest.verify|verify} messages.
             * @param message RestoreLayerRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.RestoreLayerRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RestoreLayerRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape} RestoreLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape;

            /**
             * Decodes a RestoreLayerRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape} RestoreLayerRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.RestoreLayerRequest & zmk.keymap.RestoreLayerRequest.$Shape;

            /**
             * Verifies a RestoreLayerRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RestoreLayerRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RestoreLayerRequest
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.RestoreLayerRequest;

            /**
             * Creates a plain object from a RestoreLayerRequest message. Also converts values to other types if specified.
             * @param message RestoreLayerRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.RestoreLayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RestoreLayerRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RestoreLayerRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RestoreLayerRequest {

            /** Properties of a RestoreLayerRequest. */
            interface $Properties {

                /** RestoreLayerRequest layerId */
                layerId?: (number|null);

                /** RestoreLayerRequest atIndex */
                atIndex?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a RestoreLayerRequest. */
            type $Shape = zmk.keymap.RestoreLayerRequest.$Properties;
        }

        /**
         * Properties of a SetLayerPropsRequest.
         * @deprecated Use zmk.keymap.SetLayerPropsRequest.$Properties instead.
         */
        interface ISetLayerPropsRequest extends zmk.keymap.SetLayerPropsRequest.$Properties {
        }

        /** Represents a SetLayerPropsRequest. */
        class SetLayerPropsRequest {

            /**
             * Constructs a new SetLayerPropsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.SetLayerPropsRequest.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** SetLayerPropsRequest layerId. */
            layerId: number;

            /** SetLayerPropsRequest name. */
            name: string;

            /**
             * Creates a new SetLayerPropsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SetLayerPropsRequest instance
             */
            static create(properties: zmk.keymap.SetLayerPropsRequest.$Shape): zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape;
            static create(properties?: zmk.keymap.SetLayerPropsRequest.$Properties): zmk.keymap.SetLayerPropsRequest;

            /**
             * Encodes the specified SetLayerPropsRequest message. Does not implicitly {@link zmk.keymap.SetLayerPropsRequest.verify|verify} messages.
             * @param message SetLayerPropsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.SetLayerPropsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SetLayerPropsRequest message, length delimited. Does not implicitly {@link zmk.keymap.SetLayerPropsRequest.verify|verify} messages.
             * @param message SetLayerPropsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.SetLayerPropsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SetLayerPropsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape} SetLayerPropsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape;

            /**
             * Decodes a SetLayerPropsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape} SetLayerPropsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.SetLayerPropsRequest & zmk.keymap.SetLayerPropsRequest.$Shape;

            /**
             * Verifies a SetLayerPropsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SetLayerPropsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SetLayerPropsRequest
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.SetLayerPropsRequest;

            /**
             * Creates a plain object from a SetLayerPropsRequest message. Also converts values to other types if specified.
             * @param message SetLayerPropsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.SetLayerPropsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SetLayerPropsRequest to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for SetLayerPropsRequest
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace SetLayerPropsRequest {

            /** Properties of a SetLayerPropsRequest. */
            interface $Properties {

                /** SetLayerPropsRequest layerId */
                layerId?: (number|null);

                /** SetLayerPropsRequest name */
                name?: (string|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a SetLayerPropsRequest. */
            type $Shape = zmk.keymap.SetLayerPropsRequest.$Properties;
        }

        /**
         * Properties of a Keymap.
         * @deprecated Use zmk.keymap.Keymap.$Properties instead.
         */
        interface IKeymap extends zmk.keymap.Keymap.$Properties {
        }

        /** Represents a Keymap. */
        class Keymap {

            /**
             * Constructs a new Keymap.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.Keymap.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Keymap layers. */
            layers: zmk.keymap.Layer.$Properties[];

            /** Keymap availableLayers. */
            availableLayers: number;

            /** Keymap maxLayerNameLength. */
            maxLayerNameLength: number;

            /**
             * Creates a new Keymap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Keymap instance
             */
            static create(properties: zmk.keymap.Keymap.$Shape): zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape;
            static create(properties?: zmk.keymap.Keymap.$Properties): zmk.keymap.Keymap;

            /**
             * Encodes the specified Keymap message. Does not implicitly {@link zmk.keymap.Keymap.verify|verify} messages.
             * @param message Keymap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.Keymap.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Keymap message, length delimited. Does not implicitly {@link zmk.keymap.Keymap.verify|verify} messages.
             * @param message Keymap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.Keymap.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Keymap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape} Keymap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape;

            /**
             * Decodes a Keymap message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape} Keymap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.Keymap & zmk.keymap.Keymap.$Shape;

            /**
             * Verifies a Keymap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Keymap message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Keymap
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.Keymap;

            /**
             * Creates a plain object from a Keymap message. Also converts values to other types if specified.
             * @param message Keymap
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.Keymap, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Keymap to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Keymap
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Keymap {

            /** Properties of a Keymap. */
            interface $Properties {

                /** Keymap layers */
                layers?: (zmk.keymap.Layer.$Properties[]|null);

                /** Keymap availableLayers */
                availableLayers?: (number|null);

                /** Keymap maxLayerNameLength */
                maxLayerNameLength?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Keymap. */
            type $Shape = zmk.keymap.Keymap.$Properties;
        }

        /**
         * Properties of a Layer.
         * @deprecated Use zmk.keymap.Layer.$Properties instead.
         */
        interface ILayer extends zmk.keymap.Layer.$Properties {
        }

        /** Represents a Layer. */
        class Layer {

            /**
             * Constructs a new Layer.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.Layer.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Layer id. */
            id: number;

            /** Layer name. */
            name: string;

            /** Layer bindings. */
            bindings: zmk.keymap.BehaviorBinding.$Properties[];

            /**
             * Creates a new Layer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Layer instance
             */
            static create(properties: zmk.keymap.Layer.$Shape): zmk.keymap.Layer & zmk.keymap.Layer.$Shape;
            static create(properties?: zmk.keymap.Layer.$Properties): zmk.keymap.Layer;

            /**
             * Encodes the specified Layer message. Does not implicitly {@link zmk.keymap.Layer.verify|verify} messages.
             * @param message Layer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.Layer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Layer message, length delimited. Does not implicitly {@link zmk.keymap.Layer.verify|verify} messages.
             * @param message Layer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.Layer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Layer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.Layer & zmk.keymap.Layer.$Shape} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.Layer & zmk.keymap.Layer.$Shape;

            /**
             * Decodes a Layer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.Layer & zmk.keymap.Layer.$Shape} Layer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.Layer & zmk.keymap.Layer.$Shape;

            /**
             * Verifies a Layer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Layer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Layer
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.Layer;

            /**
             * Creates a plain object from a Layer message. Also converts values to other types if specified.
             * @param message Layer
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.Layer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Layer to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Layer
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Layer {

            /** Properties of a Layer. */
            interface $Properties {

                /** Layer id */
                id?: (number|null);

                /** Layer name */
                name?: (string|null);

                /** Layer bindings */
                bindings?: (zmk.keymap.BehaviorBinding.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Layer. */
            type $Shape = zmk.keymap.Layer.$Properties;
        }

        /**
         * Properties of a BehaviorBinding.
         * @deprecated Use zmk.keymap.BehaviorBinding.$Properties instead.
         */
        interface IBehaviorBinding extends zmk.keymap.BehaviorBinding.$Properties {
        }

        /** Represents a BehaviorBinding. */
        class BehaviorBinding {

            /**
             * Constructs a new BehaviorBinding.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.BehaviorBinding.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** BehaviorBinding behaviorId. */
            behaviorId: number;

            /** BehaviorBinding param1. */
            param1: number;

            /** BehaviorBinding param2. */
            param2: number;

            /**
             * Creates a new BehaviorBinding instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BehaviorBinding instance
             */
            static create(properties: zmk.keymap.BehaviorBinding.$Shape): zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape;
            static create(properties?: zmk.keymap.BehaviorBinding.$Properties): zmk.keymap.BehaviorBinding;

            /**
             * Encodes the specified BehaviorBinding message. Does not implicitly {@link zmk.keymap.BehaviorBinding.verify|verify} messages.
             * @param message BehaviorBinding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.BehaviorBinding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BehaviorBinding message, length delimited. Does not implicitly {@link zmk.keymap.BehaviorBinding.verify|verify} messages.
             * @param message BehaviorBinding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.BehaviorBinding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BehaviorBinding message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape} BehaviorBinding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape;

            /**
             * Decodes a BehaviorBinding message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape} BehaviorBinding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.BehaviorBinding & zmk.keymap.BehaviorBinding.$Shape;

            /**
             * Verifies a BehaviorBinding message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BehaviorBinding message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BehaviorBinding
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.BehaviorBinding;

            /**
             * Creates a plain object from a BehaviorBinding message. Also converts values to other types if specified.
             * @param message BehaviorBinding
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.BehaviorBinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BehaviorBinding to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for BehaviorBinding
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace BehaviorBinding {

            /** Properties of a BehaviorBinding. */
            interface $Properties {

                /** BehaviorBinding behaviorId */
                behaviorId?: (number|null);

                /** BehaviorBinding param1 */
                param1?: (number|null);

                /** BehaviorBinding param2 */
                param2?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a BehaviorBinding. */
            type $Shape = zmk.keymap.BehaviorBinding.$Properties;
        }

        /**
         * Properties of a PhysicalLayouts.
         * @deprecated Use zmk.keymap.PhysicalLayouts.$Properties instead.
         */
        interface IPhysicalLayouts extends zmk.keymap.PhysicalLayouts.$Properties {
        }

        /** Represents a PhysicalLayouts. */
        class PhysicalLayouts {

            /**
             * Constructs a new PhysicalLayouts.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.PhysicalLayouts.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** PhysicalLayouts activeLayoutIndex. */
            activeLayoutIndex: number;

            /** PhysicalLayouts layouts. */
            layouts: zmk.keymap.PhysicalLayout.$Properties[];

            /**
             * Creates a new PhysicalLayouts instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhysicalLayouts instance
             */
            static create(properties: zmk.keymap.PhysicalLayouts.$Shape): zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape;
            static create(properties?: zmk.keymap.PhysicalLayouts.$Properties): zmk.keymap.PhysicalLayouts;

            /**
             * Encodes the specified PhysicalLayouts message. Does not implicitly {@link zmk.keymap.PhysicalLayouts.verify|verify} messages.
             * @param message PhysicalLayouts message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.PhysicalLayouts.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhysicalLayouts message, length delimited. Does not implicitly {@link zmk.keymap.PhysicalLayouts.verify|verify} messages.
             * @param message PhysicalLayouts message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.PhysicalLayouts.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhysicalLayouts message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape} PhysicalLayouts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape;

            /**
             * Decodes a PhysicalLayouts message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape} PhysicalLayouts
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.PhysicalLayouts & zmk.keymap.PhysicalLayouts.$Shape;

            /**
             * Verifies a PhysicalLayouts message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhysicalLayouts message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhysicalLayouts
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.PhysicalLayouts;

            /**
             * Creates a plain object from a PhysicalLayouts message. Also converts values to other types if specified.
             * @param message PhysicalLayouts
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.PhysicalLayouts, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhysicalLayouts to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PhysicalLayouts
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PhysicalLayouts {

            /** Properties of a PhysicalLayouts. */
            interface $Properties {

                /** PhysicalLayouts activeLayoutIndex */
                activeLayoutIndex?: (number|null);

                /** PhysicalLayouts layouts */
                layouts?: (zmk.keymap.PhysicalLayout.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PhysicalLayouts. */
            type $Shape = zmk.keymap.PhysicalLayouts.$Properties;
        }

        /**
         * Properties of a PhysicalLayout.
         * @deprecated Use zmk.keymap.PhysicalLayout.$Properties instead.
         */
        interface IPhysicalLayout extends zmk.keymap.PhysicalLayout.$Properties {
        }

        /** Represents a PhysicalLayout. */
        class PhysicalLayout {

            /**
             * Constructs a new PhysicalLayout.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.PhysicalLayout.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** PhysicalLayout name. */
            name: string;

            /** PhysicalLayout keys. */
            keys: zmk.keymap.KeyPhysicalAttrs.$Properties[];

            /**
             * Creates a new PhysicalLayout instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhysicalLayout instance
             */
            static create(properties: zmk.keymap.PhysicalLayout.$Shape): zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape;
            static create(properties?: zmk.keymap.PhysicalLayout.$Properties): zmk.keymap.PhysicalLayout;

            /**
             * Encodes the specified PhysicalLayout message. Does not implicitly {@link zmk.keymap.PhysicalLayout.verify|verify} messages.
             * @param message PhysicalLayout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.PhysicalLayout.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhysicalLayout message, length delimited. Does not implicitly {@link zmk.keymap.PhysicalLayout.verify|verify} messages.
             * @param message PhysicalLayout message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.PhysicalLayout.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhysicalLayout message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape} PhysicalLayout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape;

            /**
             * Decodes a PhysicalLayout message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape} PhysicalLayout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.PhysicalLayout & zmk.keymap.PhysicalLayout.$Shape;

            /**
             * Verifies a PhysicalLayout message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhysicalLayout message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhysicalLayout
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.PhysicalLayout;

            /**
             * Creates a plain object from a PhysicalLayout message. Also converts values to other types if specified.
             * @param message PhysicalLayout
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.PhysicalLayout, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhysicalLayout to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for PhysicalLayout
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace PhysicalLayout {

            /** Properties of a PhysicalLayout. */
            interface $Properties {

                /** PhysicalLayout name */
                name?: (string|null);

                /** PhysicalLayout keys */
                keys?: (zmk.keymap.KeyPhysicalAttrs.$Properties[]|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a PhysicalLayout. */
            type $Shape = zmk.keymap.PhysicalLayout.$Properties;
        }

        /**
         * Properties of a KeyPhysicalAttrs.
         * @deprecated Use zmk.keymap.KeyPhysicalAttrs.$Properties instead.
         */
        interface IKeyPhysicalAttrs extends zmk.keymap.KeyPhysicalAttrs.$Properties {
        }

        /** Represents a KeyPhysicalAttrs. */
        class KeyPhysicalAttrs {

            /**
             * Constructs a new KeyPhysicalAttrs.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.keymap.KeyPhysicalAttrs.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** KeyPhysicalAttrs width. */
            width: number;

            /** KeyPhysicalAttrs height. */
            height: number;

            /** KeyPhysicalAttrs x. */
            x: number;

            /** KeyPhysicalAttrs y. */
            y: number;

            /** KeyPhysicalAttrs r. */
            r: number;

            /** KeyPhysicalAttrs rx. */
            rx: number;

            /** KeyPhysicalAttrs ry. */
            ry: number;

            /**
             * Creates a new KeyPhysicalAttrs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyPhysicalAttrs instance
             */
            static create(properties: zmk.keymap.KeyPhysicalAttrs.$Shape): zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape;
            static create(properties?: zmk.keymap.KeyPhysicalAttrs.$Properties): zmk.keymap.KeyPhysicalAttrs;

            /**
             * Encodes the specified KeyPhysicalAttrs message. Does not implicitly {@link zmk.keymap.KeyPhysicalAttrs.verify|verify} messages.
             * @param message KeyPhysicalAttrs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.keymap.KeyPhysicalAttrs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyPhysicalAttrs message, length delimited. Does not implicitly {@link zmk.keymap.KeyPhysicalAttrs.verify|verify} messages.
             * @param message KeyPhysicalAttrs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.keymap.KeyPhysicalAttrs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyPhysicalAttrs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape} KeyPhysicalAttrs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape;

            /**
             * Decodes a KeyPhysicalAttrs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape} KeyPhysicalAttrs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.keymap.KeyPhysicalAttrs & zmk.keymap.KeyPhysicalAttrs.$Shape;

            /**
             * Verifies a KeyPhysicalAttrs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyPhysicalAttrs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyPhysicalAttrs
             */
            static fromObject(object: { [k: string]: any }): zmk.keymap.KeyPhysicalAttrs;

            /**
             * Creates a plain object from a KeyPhysicalAttrs message. Also converts values to other types if specified.
             * @param message KeyPhysicalAttrs
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.keymap.KeyPhysicalAttrs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyPhysicalAttrs to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for KeyPhysicalAttrs
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace KeyPhysicalAttrs {

            /** Properties of a KeyPhysicalAttrs. */
            interface $Properties {

                /** KeyPhysicalAttrs width */
                width?: (number|null);

                /** KeyPhysicalAttrs height */
                height?: (number|null);

                /** KeyPhysicalAttrs x */
                x?: (number|null);

                /** KeyPhysicalAttrs y */
                y?: (number|null);

                /** KeyPhysicalAttrs r */
                r?: (number|null);

                /** KeyPhysicalAttrs rx */
                rx?: (number|null);

                /** KeyPhysicalAttrs ry */
                ry?: (number|null);

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a KeyPhysicalAttrs. */
            type $Shape = zmk.keymap.KeyPhysicalAttrs.$Properties;
        }
    }

    /** Namespace meta. */
    namespace meta {

        /** ErrorConditions enum. */
        enum ErrorConditions {

            /** GENERIC value */
            GENERIC = 0,

            /** UNLOCK_REQUIRED value */
            UNLOCK_REQUIRED = 1,

            /** RPC_NOT_FOUND value */
            RPC_NOT_FOUND = 2,

            /** MSG_DECODE_FAILED value */
            MSG_DECODE_FAILED = 3,

            /** MSG_ENCODE_FAILED value */
            MSG_ENCODE_FAILED = 4
        }

        /**
         * Properties of a Response.
         * @deprecated Use zmk.meta.Response.$Properties instead.
         */
        interface IResponse extends zmk.meta.Response.$Properties {
        }

        /** Represents a Response. */
        class Response {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.meta.Response.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Response noResponse. */
            noResponse?: (boolean|null);

            /** Response simpleError. */
            simpleError?: (zmk.meta.ErrorConditions|null);

            /** Response responseType. */
            responseType?: ("noResponse"|"simpleError");

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            static create(properties: zmk.meta.Response.$Shape): zmk.meta.Response & zmk.meta.Response.$Shape;
            static create(properties?: zmk.meta.Response.$Properties): zmk.meta.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.meta.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.meta.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.meta.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.meta.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.meta.Response & zmk.meta.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.meta.Response & zmk.meta.Response.$Shape;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.meta.Response & zmk.meta.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.meta.Response & zmk.meta.Response.$Shape;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            static fromObject(object: { [k: string]: any }): zmk.meta.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.meta.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Response
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Response {

            /** Properties of a Response. */
            interface $Properties {

                /** Response noResponse */
                noResponse?: (boolean|null);

                /** Response simpleError */
                simpleError?: (zmk.meta.ErrorConditions|null);

                /** Response responseType */
                responseType?: ("noResponse"|"simpleError");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Response. */
            type $Shape = {
  noResponse?: boolean|null;
  simpleError?: zmk.meta.ErrorConditions|null;
  $unknowns?: Uint8Array[];
} & (
  ({ responseType?: undefined; noResponse?: null; simpleError?: null }|{ responseType?: "noResponse"; noResponse: boolean; simpleError?: null }|{ responseType?: "simpleError"; noResponse?: null; simpleError: zmk.meta.ErrorConditions })
);
        }
    }

    /** Namespace studio. */
    namespace studio {

        /**
         * Properties of a Request.
         * @deprecated Use zmk.studio.Request.$Properties instead.
         */
        interface IRequest extends zmk.studio.Request.$Properties {
        }

        /** Represents a Request. */
        class Request {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.studio.Request.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Request requestId. */
            requestId: number;

            /** Request core. */
            core?: (zmk.core.Request.$Properties|null);

            /** Request behaviors. */
            behaviors?: (zmk.behaviors.Request.$Properties|null);

            /** Request keymap. */
            keymap?: (zmk.keymap.Request.$Properties|null);

            /** Request subsystem. */
            subsystem?: ("core"|"behaviors"|"keymap");

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            static create(properties: zmk.studio.Request.$Shape): zmk.studio.Request & zmk.studio.Request.$Shape;
            static create(properties?: zmk.studio.Request.$Properties): zmk.studio.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link zmk.studio.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.studio.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link zmk.studio.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.studio.Request.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.studio.Request & zmk.studio.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.studio.Request & zmk.studio.Request.$Shape;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.studio.Request & zmk.studio.Request.$Shape} Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.studio.Request & zmk.studio.Request.$Shape;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            static fromObject(object: { [k: string]: any }): zmk.studio.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.studio.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Request
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Request {

            /** Properties of a Request. */
            interface $Properties {

                /** Request requestId */
                requestId?: (number|null);

                /** Request core */
                core?: (zmk.core.Request.$Properties|null);

                /** Request behaviors */
                behaviors?: (zmk.behaviors.Request.$Properties|null);

                /** Request keymap */
                keymap?: (zmk.keymap.Request.$Properties|null);

                /** Request subsystem */
                subsystem?: ("core"|"behaviors"|"keymap");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Request. */
            type $Shape = {
  requestId?: number|null;
  core?: zmk.core.Request.$Shape|null;
  behaviors?: zmk.behaviors.Request.$Shape|null;
  keymap?: zmk.keymap.Request.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ subsystem?: undefined; core?: null; behaviors?: null; keymap?: null }|{ subsystem?: "core"; core: zmk.core.Request.$Shape; behaviors?: null; keymap?: null }|{ subsystem?: "behaviors"; core?: null; behaviors: zmk.behaviors.Request.$Shape; keymap?: null }|{ subsystem?: "keymap"; core?: null; behaviors?: null; keymap: zmk.keymap.Request.$Shape })
);
        }

        /**
         * Properties of a Response.
         * @deprecated Use zmk.studio.Response.$Properties instead.
         */
        interface IResponse extends zmk.studio.Response.$Properties {
        }

        /** Represents a Response. */
        class Response {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.studio.Response.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Response requestResponse. */
            requestResponse?: (zmk.studio.RequestResponse.$Properties|null);

            /** Response notification. */
            notification?: (zmk.studio.Notification.$Properties|null);

            /** Response type. */
            type?: ("requestResponse"|"notification");

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            static create(properties: zmk.studio.Response.$Shape): zmk.studio.Response & zmk.studio.Response.$Shape;
            static create(properties?: zmk.studio.Response.$Properties): zmk.studio.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link zmk.studio.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.studio.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link zmk.studio.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.studio.Response.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.studio.Response & zmk.studio.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.studio.Response & zmk.studio.Response.$Shape;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.studio.Response & zmk.studio.Response.$Shape} Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.studio.Response & zmk.studio.Response.$Shape;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            static fromObject(object: { [k: string]: any }): zmk.studio.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.studio.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Response
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Response {

            /** Properties of a Response. */
            interface $Properties {

                /** Response requestResponse */
                requestResponse?: (zmk.studio.RequestResponse.$Properties|null);

                /** Response notification */
                notification?: (zmk.studio.Notification.$Properties|null);

                /** Response type */
                type?: ("requestResponse"|"notification");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Response. */
            type $Shape = {
  requestResponse?: zmk.studio.RequestResponse.$Shape|null;
  notification?: zmk.studio.Notification.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ type?: undefined; requestResponse?: null; notification?: null }|{ type?: "requestResponse"; requestResponse: zmk.studio.RequestResponse.$Shape; notification?: null }|{ type?: "notification"; requestResponse?: null; notification: zmk.studio.Notification.$Shape })
);
        }

        /**
         * Properties of a RequestResponse.
         * @deprecated Use zmk.studio.RequestResponse.$Properties instead.
         */
        interface IRequestResponse extends zmk.studio.RequestResponse.$Properties {
        }

        /** Represents a RequestResponse. */
        class RequestResponse {

            /**
             * Constructs a new RequestResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.studio.RequestResponse.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** RequestResponse requestId. */
            requestId: number;

            /** RequestResponse meta. */
            meta?: (zmk.meta.Response.$Properties|null);

            /** RequestResponse core. */
            core?: (zmk.core.Response.$Properties|null);

            /** RequestResponse behaviors. */
            behaviors?: (zmk.behaviors.Response.$Properties|null);

            /** RequestResponse keymap. */
            keymap?: (zmk.keymap.Response.$Properties|null);

            /** RequestResponse subsystem. */
            subsystem?: ("meta"|"core"|"behaviors"|"keymap");

            /**
             * Creates a new RequestResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RequestResponse instance
             */
            static create(properties: zmk.studio.RequestResponse.$Shape): zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape;
            static create(properties?: zmk.studio.RequestResponse.$Properties): zmk.studio.RequestResponse;

            /**
             * Encodes the specified RequestResponse message. Does not implicitly {@link zmk.studio.RequestResponse.verify|verify} messages.
             * @param message RequestResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.studio.RequestResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestResponse message, length delimited. Does not implicitly {@link zmk.studio.RequestResponse.verify|verify} messages.
             * @param message RequestResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.studio.RequestResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape} RequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape;

            /**
             * Decodes a RequestResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape} RequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.studio.RequestResponse & zmk.studio.RequestResponse.$Shape;

            /**
             * Verifies a RequestResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestResponse
             */
            static fromObject(object: { [k: string]: any }): zmk.studio.RequestResponse;

            /**
             * Creates a plain object from a RequestResponse message. Also converts values to other types if specified.
             * @param message RequestResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.studio.RequestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestResponse to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for RequestResponse
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace RequestResponse {

            /** Properties of a RequestResponse. */
            interface $Properties {

                /** RequestResponse requestId */
                requestId?: (number|null);

                /** RequestResponse meta */
                meta?: (zmk.meta.Response.$Properties|null);

                /** RequestResponse core */
                core?: (zmk.core.Response.$Properties|null);

                /** RequestResponse behaviors */
                behaviors?: (zmk.behaviors.Response.$Properties|null);

                /** RequestResponse keymap */
                keymap?: (zmk.keymap.Response.$Properties|null);

                /** RequestResponse subsystem */
                subsystem?: ("meta"|"core"|"behaviors"|"keymap");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a RequestResponse. */
            type $Shape = {
  requestId?: number|null;
  meta?: zmk.meta.Response.$Shape|null;
  core?: zmk.core.Response.$Shape|null;
  behaviors?: zmk.behaviors.Response.$Shape|null;
  keymap?: zmk.keymap.Response.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ subsystem?: undefined; meta?: null; core?: null; behaviors?: null; keymap?: null }|{ subsystem?: "meta"; meta: zmk.meta.Response.$Shape; core?: null; behaviors?: null; keymap?: null }|{ subsystem?: "core"; meta?: null; core: zmk.core.Response.$Shape; behaviors?: null; keymap?: null }|{ subsystem?: "behaviors"; meta?: null; core?: null; behaviors: zmk.behaviors.Response.$Shape; keymap?: null }|{ subsystem?: "keymap"; meta?: null; core?: null; behaviors?: null; keymap: zmk.keymap.Response.$Shape })
);
        }

        /**
         * Properties of a Notification.
         * @deprecated Use zmk.studio.Notification.$Properties instead.
         */
        interface INotification extends zmk.studio.Notification.$Properties {
        }

        /** Represents a Notification. */
        class Notification {

            /**
             * Constructs a new Notification.
             * @param [properties] Properties to set
             */
            constructor(properties?: zmk.studio.Notification.$Properties);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];

            /** Notification core. */
            core?: (zmk.core.Notification.$Properties|null);

            /** Notification keymap. */
            keymap?: (zmk.keymap.Notification.$Properties|null);

            /** Notification subsystem. */
            subsystem?: ("core"|"keymap");

            /**
             * Creates a new Notification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Notification instance
             */
            static create(properties: zmk.studio.Notification.$Shape): zmk.studio.Notification & zmk.studio.Notification.$Shape;
            static create(properties?: zmk.studio.Notification.$Properties): zmk.studio.Notification;

            /**
             * Encodes the specified Notification message. Does not implicitly {@link zmk.studio.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: zmk.studio.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link zmk.studio.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: zmk.studio.Notification.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {zmk.studio.Notification & zmk.studio.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zmk.studio.Notification & zmk.studio.Notification.$Shape;

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {zmk.studio.Notification & zmk.studio.Notification.$Shape} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zmk.studio.Notification & zmk.studio.Notification.$Shape;

            /**
             * Verifies a Notification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Notification
             */
            static fromObject(object: { [k: string]: any }): zmk.studio.Notification;

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @param message Notification
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: zmk.studio.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Notification to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Notification
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Notification {

            /** Properties of a Notification. */
            interface $Properties {

                /** Notification core */
                core?: (zmk.core.Notification.$Properties|null);

                /** Notification keymap */
                keymap?: (zmk.keymap.Notification.$Properties|null);

                /** Notification subsystem */
                subsystem?: ("core"|"keymap");

                /** Unknown fields preserved while decoding */
                $unknowns?: Uint8Array[];
            }

            /** Narrowed shape of a Notification. */
            type $Shape = {
  core?: zmk.core.Notification.$Shape|null;
  keymap?: zmk.keymap.Notification.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ subsystem?: undefined; core?: null; keymap?: null }|{ subsystem?: "core"; core: zmk.core.Notification.$Shape; keymap?: null }|{ subsystem?: "keymap"; core?: null; keymap: zmk.keymap.Notification.$Shape })
);
        }
    }
}
