import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof auth
         * @interface ILoginRequest
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof auth
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {auth.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof auth.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginRequest)
                return object;
            let message = new $root.auth.LoginRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginRequest
         * @static
         * @param {auth.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof auth.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    auth.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof auth
         * @interface ILoginResponse
         * @property {string|null} [token] LoginResponse token
         * @property {number|null} [tokenExpire] LoginResponse tokenExpire
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof auth
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {auth.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse token.
         * @member {string} token
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.token = "";

        /**
         * LoginResponse tokenExpire.
         * @member {number} tokenExpire
         * @memberof auth.LoginResponse
         * @instance
         */
        LoginResponse.prototype.tokenExpire = 0;

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginResponse)
                return object;
            let message = new $root.auth.LoginResponse();
            if (object.token != null)
                message.token = String(object.token);
            if (object.tokenExpire != null)
                message.tokenExpire = object.tokenExpire | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginResponse
         * @static
         * @param {auth.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.token = "";
                object.tokenExpire = 0;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.tokenExpire != null && message.hasOwnProperty("tokenExpire"))
                object.tokenExpire = message.tokenExpire;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof auth.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    auth.CaptchaGetRequest = (function() {

        /**
         * Properties of a CaptchaGetRequest.
         * @memberof auth
         * @interface ICaptchaGetRequest
         */

        /**
         * Constructs a new CaptchaGetRequest.
         * @memberof auth
         * @classdesc Represents a CaptchaGetRequest.
         * @implements ICaptchaGetRequest
         * @constructor
         * @param {auth.ICaptchaGetRequest=} [properties] Properties to set
         */
        function CaptchaGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a CaptchaGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.CaptchaGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.CaptchaGetRequest} CaptchaGetRequest
         */
        CaptchaGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.CaptchaGetRequest)
                return object;
            return new $root.auth.CaptchaGetRequest();
        };

        /**
         * Creates a plain object from a CaptchaGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.CaptchaGetRequest
         * @static
         * @param {auth.CaptchaGetRequest} message CaptchaGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CaptchaGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CaptchaGetRequest to JSON.
         * @function toJSON
         * @memberof auth.CaptchaGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CaptchaGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CaptchaGetRequest;
    })();

    auth.CaptchaGetResponse = (function() {

        /**
         * Properties of a CaptchaGetResponse.
         * @memberof auth
         * @interface ICaptchaGetResponse
         * @property {string|null} [id] CaptchaGetResponse id
         * @property {string|null} [b64] CaptchaGetResponse b64
         */

        /**
         * Constructs a new CaptchaGetResponse.
         * @memberof auth
         * @classdesc Represents a CaptchaGetResponse.
         * @implements ICaptchaGetResponse
         * @constructor
         * @param {auth.ICaptchaGetResponse=} [properties] Properties to set
         */
        function CaptchaGetResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CaptchaGetResponse id.
         * @member {string} id
         * @memberof auth.CaptchaGetResponse
         * @instance
         */
        CaptchaGetResponse.prototype.id = "";

        /**
         * CaptchaGetResponse b64.
         * @member {string} b64
         * @memberof auth.CaptchaGetResponse
         * @instance
         */
        CaptchaGetResponse.prototype.b64 = "";

        /**
         * Creates a CaptchaGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.CaptchaGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.CaptchaGetResponse} CaptchaGetResponse
         */
        CaptchaGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.CaptchaGetResponse)
                return object;
            let message = new $root.auth.CaptchaGetResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.b64 != null)
                message.b64 = String(object.b64);
            return message;
        };

        /**
         * Creates a plain object from a CaptchaGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.CaptchaGetResponse
         * @static
         * @param {auth.CaptchaGetResponse} message CaptchaGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CaptchaGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.b64 = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.b64 != null && message.hasOwnProperty("b64"))
                object.b64 = message.b64;
            return object;
        };

        /**
         * Converts this CaptchaGetResponse to JSON.
         * @function toJSON
         * @memberof auth.CaptchaGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CaptchaGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CaptchaGetResponse;
    })();

    auth.AuthService = (function() {

        /**
         * Constructs a new AuthService service.
         * @memberof auth
         * @classdesc Represents an AuthService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AuthService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AuthService;

        /**
         * Callback as used by {@link auth.AuthService#login}.
         * @memberof auth.AuthService
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {auth.LoginResponse} [response] LoginResponse
         */

        /**
         * Calls Login.
         * @function login
         * @memberof auth.AuthService
         * @instance
         * @param {auth.ILoginRequest} request LoginRequest message or plain object
         * @param {auth.AuthService.LoginCallback} callback Node-style callback called with the error, if any, and LoginResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AuthService.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.auth.LoginRequest, $root.auth.LoginResponse, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof auth.AuthService
         * @instance
         * @param {auth.ILoginRequest} request LoginRequest message or plain object
         * @returns {Promise<auth.LoginResponse>} Promise
         * @variation 2
         */

        return AuthService;
    })();

    return auth;
})();