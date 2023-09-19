import * as $protobuf from "protobufjs";
/** Namespace auth. */
export namespace auth {

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest username */
        username?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginRequest);

        /** LoginRequest username. */
        public username: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse token */
        token?: (string|null);

        /** LoginResponse tokenExpire */
        tokenExpire?: (number|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginResponse);

        /** LoginResponse token. */
        public token: string;

        /** LoginResponse tokenExpire. */
        public tokenExpire: number;

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CaptchaGetRequest. */
    interface ICaptchaGetRequest {
    }

    /** Represents a CaptchaGetRequest. */
    class CaptchaGetRequest implements ICaptchaGetRequest {

        /**
         * Constructs a new CaptchaGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ICaptchaGetRequest);

        /**
         * Creates a CaptchaGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CaptchaGetRequest
         */
        public static fromObject(object: { [k: string]: any }): auth.CaptchaGetRequest;

        /**
         * Creates a plain object from a CaptchaGetRequest message. Also converts values to other types if specified.
         * @param message CaptchaGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.CaptchaGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CaptchaGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CaptchaGetResponse. */
    interface ICaptchaGetResponse {

        /** CaptchaGetResponse id */
        id?: (string|null);

        /** CaptchaGetResponse b64 */
        b64?: (string|null);
    }

    /** Represents a CaptchaGetResponse. */
    class CaptchaGetResponse implements ICaptchaGetResponse {

        /**
         * Constructs a new CaptchaGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ICaptchaGetResponse);

        /** CaptchaGetResponse id. */
        public id: string;

        /** CaptchaGetResponse b64. */
        public b64: string;

        /**
         * Creates a CaptchaGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CaptchaGetResponse
         */
        public static fromObject(object: { [k: string]: any }): auth.CaptchaGetResponse;

        /**
         * Creates a plain object from a CaptchaGetResponse message. Also converts values to other types if specified.
         * @param message CaptchaGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.CaptchaGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CaptchaGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an AuthService */
    class AuthService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AuthService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoginResponse
         */
        public login(request: auth.ILoginRequest, callback: auth.AuthService.LoginCallback): void;

        /**
         * Calls Login.
         * @param request LoginRequest message or plain object
         * @returns Promise
         */
        public login(request: auth.ILoginRequest): Promise<auth.LoginResponse>;
    }

    namespace AuthService {

        /**
         * Callback as used by {@link auth.AuthService#login}.
         * @param error Error, if any
         * @param [response] LoginResponse
         */
        type LoginCallback = (error: (Error|null), response?: auth.LoginResponse) => void;
    }
}
