import * as $protobuf from "protobufjs";

// Common aliases
const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const accsim = $root.accsim = (() => {

    /**
     * Namespace accsim.
     * @exports accsim
     * @namespace
     */
    const accsim = {};

    accsim.AccSceneGetRequest = (function() {

        /**
         * Properties of an AccSceneGetRequest.
         * @memberof accsim
         * @interface IAccSceneGetRequest
         */

        /**
         * Constructs a new AccSceneGetRequest.
         * @memberof accsim
         * @classdesc Represents an AccSceneGetRequest.
         * @implements IAccSceneGetRequest
         * @constructor
         * @param {accsim.IAccSceneGetRequest=} [properties] Properties to set
         */
        function AccSceneGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates an AccSceneGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneGetRequest} AccSceneGetRequest
         */
        AccSceneGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneGetRequest)
                return object;
            return new $root.accsim.AccSceneGetRequest();
        };

        /**
         * Creates a plain object from an AccSceneGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneGetRequest
         * @static
         * @param {accsim.AccSceneGetRequest} message AccSceneGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AccSceneGetRequest to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneGetRequest;
    })();

    accsim.AccScene = (function() {

        /**
         * Properties of an AccScene.
         * @memberof accsim
         * @interface IAccScene
         * @property {number|null} [id] AccScene id
         * @property {string|null} [name] AccScene name
         * @property {number|null} [deathRadius] AccScene deathRadius
         * @property {number|null} [bigInjuryRadius] AccScene bigInjuryRadius
         * @property {number|null} [smallInjuryRadius] AccScene smallInjuryRadius
         * @property {number|null} [longitude] AccScene longitude
         * @property {number|null} [latitude] AccScene latitude
         * @property {string|null} [windDirection] AccScene windDirection
         * @property {number|null} [windSpeed] AccScene windSpeed
         * @property {number|null} [targetDis] AccScene targetDis
         * @property {number|null} [liquidTankDiameter] AccScene liquidTankDiameter
         * @property {Array.<number>|null} [xs] AccScene xs
         * @property {Array.<number>|null} [ys] AccScene ys
         * @property {number|null} [safeRadius] AccScene safeRadius
         * @property {string|null} [type] AccScene type
         * @property {string|null} [addTime] AccScene addTime
         */

        /**
         * Constructs a new AccScene.
         * @memberof accsim
         * @classdesc Represents an AccScene.
         * @implements IAccScene
         * @constructor
         * @param {accsim.IAccScene=} [properties] Properties to set
         */
        function AccScene(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccScene id.
         * @member {number} id
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.id = 0;

        /**
         * AccScene name.
         * @member {string} name
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.name = "";

        /**
         * AccScene deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.deathRadius = 0;

        /**
         * AccScene bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.bigInjuryRadius = 0;

        /**
         * AccScene smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.smallInjuryRadius = 0;

        /**
         * AccScene longitude.
         * @member {number} longitude
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.longitude = 0;

        /**
         * AccScene latitude.
         * @member {number} latitude
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.latitude = 0;

        /**
         * AccScene windDirection.
         * @member {string} windDirection
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.windDirection = "";

        /**
         * AccScene windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.windSpeed = 0;

        /**
         * AccScene targetDis.
         * @member {number} targetDis
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.targetDis = 0;

        /**
         * AccScene liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.liquidTankDiameter = 0;

        /**
         * AccScene xs.
         * @member {Array.<number>} xs
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.xs = $util.emptyArray;

        /**
         * AccScene ys.
         * @member {Array.<number>} ys
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.ys = $util.emptyArray;

        /**
         * AccScene safeRadius.
         * @member {number} safeRadius
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.safeRadius = 0;

        /**
         * AccScene type.
         * @member {string} type
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.type = "";

        /**
         * AccScene addTime.
         * @member {string} addTime
         * @memberof accsim.AccScene
         * @instance
         */
        AccScene.prototype.addTime = "";

        /**
         * Creates an AccScene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccScene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccScene} AccScene
         */
        AccScene.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccScene)
                return object;
            let message = new $root.accsim.AccScene();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".accsim.AccScene.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = Number(object.xs[i]);
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".accsim.AccScene.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = Number(object.ys[i]);
            }
            if (object.safeRadius != null)
                message.safeRadius = Number(object.safeRadius);
            if (object.type != null)
                message.type = String(object.type);
            if (object.addTime != null)
                message.addTime = String(object.addTime);
            return message;
        };

        /**
         * Creates a plain object from an AccScene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccScene
         * @static
         * @param {accsim.AccScene} message AccScene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccScene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.smallInjuryRadius = 0;
                object.longitude = 0;
                object.latitude = 0;
                object.windDirection = "";
                object.windSpeed = 0;
                object.targetDis = 0;
                object.liquidTankDiameter = 0;
                object.safeRadius = 0;
                object.type = "";
                object.addTime = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = options.json && !isFinite(message.xs[j]) ? String(message.xs[j]) : message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = options.json && !isFinite(message.ys[j]) ? String(message.ys[j]) : message.ys[j];
            }
            if (message.safeRadius != null && message.hasOwnProperty("safeRadius"))
                object.safeRadius = options.json && !isFinite(message.safeRadius) ? String(message.safeRadius) : message.safeRadius;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.addTime != null && message.hasOwnProperty("addTime"))
                object.addTime = message.addTime;
            return object;
        };

        /**
         * Converts this AccScene to JSON.
         * @function toJSON
         * @memberof accsim.AccScene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccScene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccScene;
    })();

    accsim.AccSceneGetResponse = (function() {

        /**
         * Properties of an AccSceneGetResponse.
         * @memberof accsim
         * @interface IAccSceneGetResponse
         * @property {Array.<accsim.IAccScene>|null} [accScenes] AccSceneGetResponse accScenes
         */

        /**
         * Constructs a new AccSceneGetResponse.
         * @memberof accsim
         * @classdesc Represents an AccSceneGetResponse.
         * @implements IAccSceneGetResponse
         * @constructor
         * @param {accsim.IAccSceneGetResponse=} [properties] Properties to set
         */
        function AccSceneGetResponse(properties) {
            this.accScenes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccSceneGetResponse accScenes.
         * @member {Array.<accsim.IAccScene>} accScenes
         * @memberof accsim.AccSceneGetResponse
         * @instance
         */
        AccSceneGetResponse.prototype.accScenes = $util.emptyArray;

        /**
         * Creates an AccSceneGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneGetResponse} AccSceneGetResponse
         */
        AccSceneGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneGetResponse)
                return object;
            let message = new $root.accsim.AccSceneGetResponse();
            if (object.accScenes) {
                if (!Array.isArray(object.accScenes))
                    throw TypeError(".accsim.AccSceneGetResponse.accScenes: array expected");
                message.accScenes = [];
                for (let i = 0; i < object.accScenes.length; ++i) {
                    if (typeof object.accScenes[i] !== "object")
                        throw TypeError(".accsim.AccSceneGetResponse.accScenes: object expected");
                    message.accScenes[i] = $root.accsim.AccScene.fromObject(object.accScenes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AccSceneGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneGetResponse
         * @static
         * @param {accsim.AccSceneGetResponse} message AccSceneGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accScenes = [];
            if (message.accScenes && message.accScenes.length) {
                object.accScenes = [];
                for (let j = 0; j < message.accScenes.length; ++j)
                    object.accScenes[j] = $root.accsim.AccScene.toObject(message.accScenes[j], options);
            }
            return object;
        };

        /**
         * Converts this AccSceneGetResponse to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneGetResponse;
    })();

    accsim.AccSceneSaveRequest = (function() {

        /**
         * Properties of an AccSceneSaveRequest.
         * @memberof accsim
         * @interface IAccSceneSaveRequest
         * @property {string|null} [name] AccSceneSaveRequest name
         * @property {string|null} [type] AccSceneSaveRequest type
         * @property {number|null} [deathRadius] AccSceneSaveRequest deathRadius
         * @property {number|null} [bigInjuryRadius] AccSceneSaveRequest bigInjuryRadius
         * @property {number|null} [smallInjuryRadius] AccSceneSaveRequest smallInjuryRadius
         * @property {number|null} [longitude] AccSceneSaveRequest longitude
         * @property {number|null} [latitude] AccSceneSaveRequest latitude
         * @property {string|null} [windDirection] AccSceneSaveRequest windDirection
         * @property {number|null} [windSpeed] AccSceneSaveRequest windSpeed
         * @property {number|null} [targetDis] AccSceneSaveRequest targetDis
         * @property {number|null} [liquidTankDiameter] AccSceneSaveRequest liquidTankDiameter
         * @property {Array.<number>|null} [xs] AccSceneSaveRequest xs
         * @property {Array.<number>|null} [ys] AccSceneSaveRequest ys
         * @property {number|null} [safeRadius] AccSceneSaveRequest safeRadius
         */

        /**
         * Constructs a new AccSceneSaveRequest.
         * @memberof accsim
         * @classdesc Represents an AccSceneSaveRequest.
         * @implements IAccSceneSaveRequest
         * @constructor
         * @param {accsim.IAccSceneSaveRequest=} [properties] Properties to set
         */
        function AccSceneSaveRequest(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccSceneSaveRequest name.
         * @member {string} name
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.name = "";

        /**
         * AccSceneSaveRequest type.
         * @member {string} type
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.type = "";

        /**
         * AccSceneSaveRequest deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.deathRadius = 0;

        /**
         * AccSceneSaveRequest bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.bigInjuryRadius = 0;

        /**
         * AccSceneSaveRequest smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.smallInjuryRadius = 0;

        /**
         * AccSceneSaveRequest longitude.
         * @member {number} longitude
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.longitude = 0;

        /**
         * AccSceneSaveRequest latitude.
         * @member {number} latitude
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.latitude = 0;

        /**
         * AccSceneSaveRequest windDirection.
         * @member {string} windDirection
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.windDirection = "";

        /**
         * AccSceneSaveRequest windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.windSpeed = 0;

        /**
         * AccSceneSaveRequest targetDis.
         * @member {number} targetDis
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.targetDis = 0;

        /**
         * AccSceneSaveRequest liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.liquidTankDiameter = 0;

        /**
         * AccSceneSaveRequest xs.
         * @member {Array.<number>} xs
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.xs = $util.emptyArray;

        /**
         * AccSceneSaveRequest ys.
         * @member {Array.<number>} ys
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.ys = $util.emptyArray;

        /**
         * AccSceneSaveRequest safeRadius.
         * @member {number} safeRadius
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         */
        AccSceneSaveRequest.prototype.safeRadius = 0;

        /**
         * Creates an AccSceneSaveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneSaveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneSaveRequest} AccSceneSaveRequest
         */
        AccSceneSaveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneSaveRequest)
                return object;
            let message = new $root.accsim.AccSceneSaveRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = String(object.type);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".accsim.AccSceneSaveRequest.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = Number(object.xs[i]);
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".accsim.AccSceneSaveRequest.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = Number(object.ys[i]);
            }
            if (object.safeRadius != null)
                message.safeRadius = Number(object.safeRadius);
            return message;
        };

        /**
         * Creates a plain object from an AccSceneSaveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneSaveRequest
         * @static
         * @param {accsim.AccSceneSaveRequest} message AccSceneSaveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneSaveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.name = "";
                object.type = "";
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.smallInjuryRadius = 0;
                object.longitude = 0;
                object.latitude = 0;
                object.windDirection = "";
                object.windSpeed = 0;
                object.targetDis = 0;
                object.liquidTankDiameter = 0;
                object.safeRadius = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = options.json && !isFinite(message.xs[j]) ? String(message.xs[j]) : message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = options.json && !isFinite(message.ys[j]) ? String(message.ys[j]) : message.ys[j];
            }
            if (message.safeRadius != null && message.hasOwnProperty("safeRadius"))
                object.safeRadius = options.json && !isFinite(message.safeRadius) ? String(message.safeRadius) : message.safeRadius;
            return object;
        };

        /**
         * Converts this AccSceneSaveRequest to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneSaveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneSaveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneSaveRequest;
    })();

    accsim.AccSceneSaveResponse = (function() {

        /**
         * Properties of an AccSceneSaveResponse.
         * @memberof accsim
         * @interface IAccSceneSaveResponse
         */

        /**
         * Constructs a new AccSceneSaveResponse.
         * @memberof accsim
         * @classdesc Represents an AccSceneSaveResponse.
         * @implements IAccSceneSaveResponse
         * @constructor
         * @param {accsim.IAccSceneSaveResponse=} [properties] Properties to set
         */
        function AccSceneSaveResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates an AccSceneSaveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneSaveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneSaveResponse} AccSceneSaveResponse
         */
        AccSceneSaveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneSaveResponse)
                return object;
            return new $root.accsim.AccSceneSaveResponse();
        };

        /**
         * Creates a plain object from an AccSceneSaveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneSaveResponse
         * @static
         * @param {accsim.AccSceneSaveResponse} message AccSceneSaveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneSaveResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AccSceneSaveResponse to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneSaveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneSaveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneSaveResponse;
    })();

    accsim.AccSceneDeleteRequest = (function() {

        /**
         * Properties of an AccSceneDeleteRequest.
         * @memberof accsim
         * @interface IAccSceneDeleteRequest
         * @property {number|null} [id] AccSceneDeleteRequest id
         */

        /**
         * Constructs a new AccSceneDeleteRequest.
         * @memberof accsim
         * @classdesc Represents an AccSceneDeleteRequest.
         * @implements IAccSceneDeleteRequest
         * @constructor
         * @param {accsim.IAccSceneDeleteRequest=} [properties] Properties to set
         */
        function AccSceneDeleteRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccSceneDeleteRequest id.
         * @member {number} id
         * @memberof accsim.AccSceneDeleteRequest
         * @instance
         */
        AccSceneDeleteRequest.prototype.id = 0;

        /**
         * Creates an AccSceneDeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneDeleteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneDeleteRequest} AccSceneDeleteRequest
         */
        AccSceneDeleteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneDeleteRequest)
                return object;
            let message = new $root.accsim.AccSceneDeleteRequest();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccSceneDeleteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneDeleteRequest
         * @static
         * @param {accsim.AccSceneDeleteRequest} message AccSceneDeleteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneDeleteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AccSceneDeleteRequest to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneDeleteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneDeleteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneDeleteRequest;
    })();

    accsim.AccSceneDeleteResponse = (function() {

        /**
         * Properties of an AccSceneDeleteResponse.
         * @memberof accsim
         * @interface IAccSceneDeleteResponse
         */

        /**
         * Constructs a new AccSceneDeleteResponse.
         * @memberof accsim
         * @classdesc Represents an AccSceneDeleteResponse.
         * @implements IAccSceneDeleteResponse
         * @constructor
         * @param {accsim.IAccSceneDeleteResponse=} [properties] Properties to set
         */
        function AccSceneDeleteResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates an AccSceneDeleteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneDeleteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneDeleteResponse} AccSceneDeleteResponse
         */
        AccSceneDeleteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneDeleteResponse)
                return object;
            return new $root.accsim.AccSceneDeleteResponse();
        };

        /**
         * Creates a plain object from an AccSceneDeleteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneDeleteResponse
         * @static
         * @param {accsim.AccSceneDeleteResponse} message AccSceneDeleteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneDeleteResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AccSceneDeleteResponse to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneDeleteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneDeleteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneDeleteResponse;
    })();

    accsim.AccSceneInfoRequest = (function() {

        /**
         * Properties of an AccSceneInfoRequest.
         * @memberof accsim
         * @interface IAccSceneInfoRequest
         * @property {number|null} [id] AccSceneInfoRequest id
         */

        /**
         * Constructs a new AccSceneInfoRequest.
         * @memberof accsim
         * @classdesc Represents an AccSceneInfoRequest.
         * @implements IAccSceneInfoRequest
         * @constructor
         * @param {accsim.IAccSceneInfoRequest=} [properties] Properties to set
         */
        function AccSceneInfoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccSceneInfoRequest id.
         * @member {number} id
         * @memberof accsim.AccSceneInfoRequest
         * @instance
         */
        AccSceneInfoRequest.prototype.id = 0;

        /**
         * Creates an AccSceneInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneInfoRequest} AccSceneInfoRequest
         */
        AccSceneInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneInfoRequest)
                return object;
            let message = new $root.accsim.AccSceneInfoRequest();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccSceneInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneInfoRequest
         * @static
         * @param {accsim.AccSceneInfoRequest} message AccSceneInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneInfoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this AccSceneInfoRequest to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneInfoRequest;
    })();

    accsim.AccSceneInfoResponse = (function() {

        /**
         * Properties of an AccSceneInfoResponse.
         * @memberof accsim
         * @interface IAccSceneInfoResponse
         * @property {string|null} [name] AccSceneInfoResponse name
         * @property {string|null} [type] AccSceneInfoResponse type
         * @property {number|null} [deathRadius] AccSceneInfoResponse deathRadius
         * @property {number|null} [bigInjuryRadius] AccSceneInfoResponse bigInjuryRadius
         * @property {number|null} [smallInjuryRadius] AccSceneInfoResponse smallInjuryRadius
         * @property {number|null} [longitude] AccSceneInfoResponse longitude
         * @property {number|null} [latitude] AccSceneInfoResponse latitude
         * @property {string|null} [windDirection] AccSceneInfoResponse windDirection
         * @property {number|null} [windSpeed] AccSceneInfoResponse windSpeed
         * @property {number|null} [targetDis] AccSceneInfoResponse targetDis
         * @property {number|null} [liquidTankDiameter] AccSceneInfoResponse liquidTankDiameter
         * @property {Array.<number>|null} [xs] AccSceneInfoResponse xs
         * @property {Array.<number>|null} [ys] AccSceneInfoResponse ys
         * @property {number|null} [safeRadius] AccSceneInfoResponse safeRadius
         */

        /**
         * Constructs a new AccSceneInfoResponse.
         * @memberof accsim
         * @classdesc Represents an AccSceneInfoResponse.
         * @implements IAccSceneInfoResponse
         * @constructor
         * @param {accsim.IAccSceneInfoResponse=} [properties] Properties to set
         */
        function AccSceneInfoResponse(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccSceneInfoResponse name.
         * @member {string} name
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.name = "";

        /**
         * AccSceneInfoResponse type.
         * @member {string} type
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.type = "";

        /**
         * AccSceneInfoResponse deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.deathRadius = 0;

        /**
         * AccSceneInfoResponse bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.bigInjuryRadius = 0;

        /**
         * AccSceneInfoResponse smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.smallInjuryRadius = 0;

        /**
         * AccSceneInfoResponse longitude.
         * @member {number} longitude
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.longitude = 0;

        /**
         * AccSceneInfoResponse latitude.
         * @member {number} latitude
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.latitude = 0;

        /**
         * AccSceneInfoResponse windDirection.
         * @member {string} windDirection
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.windDirection = "";

        /**
         * AccSceneInfoResponse windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.windSpeed = 0;

        /**
         * AccSceneInfoResponse targetDis.
         * @member {number} targetDis
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.targetDis = 0;

        /**
         * AccSceneInfoResponse liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.liquidTankDiameter = 0;

        /**
         * AccSceneInfoResponse xs.
         * @member {Array.<number>} xs
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.xs = $util.emptyArray;

        /**
         * AccSceneInfoResponse ys.
         * @member {Array.<number>} ys
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.ys = $util.emptyArray;

        /**
         * AccSceneInfoResponse safeRadius.
         * @member {number} safeRadius
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         */
        AccSceneInfoResponse.prototype.safeRadius = 0;

        /**
         * Creates an AccSceneInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.AccSceneInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.AccSceneInfoResponse} AccSceneInfoResponse
         */
        AccSceneInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.AccSceneInfoResponse)
                return object;
            let message = new $root.accsim.AccSceneInfoResponse();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = String(object.type);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".accsim.AccSceneInfoResponse.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = Number(object.xs[i]);
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".accsim.AccSceneInfoResponse.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = Number(object.ys[i]);
            }
            if (object.safeRadius != null)
                message.safeRadius = Number(object.safeRadius);
            return message;
        };

        /**
         * Creates a plain object from an AccSceneInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.AccSceneInfoResponse
         * @static
         * @param {accsim.AccSceneInfoResponse} message AccSceneInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccSceneInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.name = "";
                object.type = "";
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.smallInjuryRadius = 0;
                object.longitude = 0;
                object.latitude = 0;
                object.windDirection = "";
                object.windSpeed = 0;
                object.targetDis = 0;
                object.liquidTankDiameter = 0;
                object.safeRadius = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = options.json && !isFinite(message.xs[j]) ? String(message.xs[j]) : message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = options.json && !isFinite(message.ys[j]) ? String(message.ys[j]) : message.ys[j];
            }
            if (message.safeRadius != null && message.hasOwnProperty("safeRadius"))
                object.safeRadius = options.json && !isFinite(message.safeRadius) ? String(message.safeRadius) : message.safeRadius;
            return object;
        };

        /**
         * Converts this AccSceneInfoResponse to JSON.
         * @function toJSON
         * @memberof accsim.AccSceneInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccSceneInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccSceneInfoResponse;
    })();

    accsim.PoolFireCalcRequest = (function() {

        /**
         * Properties of a PoolFireCalcRequest.
         * @memberof accsim
         * @interface IPoolFireCalcRequest
         * @property {string|null} [sceneName] PoolFireCalcRequest sceneName
         * @property {string|null} [windDirection] PoolFireCalcRequest windDirection
         * @property {number|null} [windSpeed] PoolFireCalcRequest windSpeed
         * @property {number|null} [liquidTankDiameter] PoolFireCalcRequest liquidTankDiameter
         * @property {number|null} [targetDis] PoolFireCalcRequest targetDis
         * @property {number|null} [density] PoolFireCalcRequest density
         * @property {number|null} [burningRate] PoolFireCalcRequest burningRate
         * @property {number|null} [burningHeat] PoolFireCalcRequest burningHeat
         */

        /**
         * Constructs a new PoolFireCalcRequest.
         * @memberof accsim
         * @classdesc Represents a PoolFireCalcRequest.
         * @implements IPoolFireCalcRequest
         * @constructor
         * @param {accsim.IPoolFireCalcRequest=} [properties] Properties to set
         */
        function PoolFireCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PoolFireCalcRequest sceneName.
         * @member {string} sceneName
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.sceneName = "";

        /**
         * PoolFireCalcRequest windDirection.
         * @member {string} windDirection
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.windDirection = "";

        /**
         * PoolFireCalcRequest windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.windSpeed = 0;

        /**
         * PoolFireCalcRequest liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.liquidTankDiameter = 0;

        /**
         * PoolFireCalcRequest targetDis.
         * @member {number} targetDis
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.targetDis = 0;

        /**
         * PoolFireCalcRequest density.
         * @member {number} density
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.density = 0;

        /**
         * PoolFireCalcRequest burningRate.
         * @member {number} burningRate
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.burningRate = 0;

        /**
         * PoolFireCalcRequest burningHeat.
         * @member {number} burningHeat
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         */
        PoolFireCalcRequest.prototype.burningHeat = 0;

        /**
         * Creates a PoolFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.PoolFireCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.PoolFireCalcRequest} PoolFireCalcRequest
         */
        PoolFireCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.PoolFireCalcRequest)
                return object;
            let message = new $root.accsim.PoolFireCalcRequest();
            if (object.sceneName != null)
                message.sceneName = String(object.sceneName);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.density != null)
                message.density = Number(object.density);
            if (object.burningRate != null)
                message.burningRate = Number(object.burningRate);
            if (object.burningHeat != null)
                message.burningHeat = Number(object.burningHeat);
            return message;
        };

        /**
         * Creates a plain object from a PoolFireCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.PoolFireCalcRequest
         * @static
         * @param {accsim.PoolFireCalcRequest} message PoolFireCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoolFireCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sceneName = "";
                object.windDirection = "";
                object.windSpeed = 0;
                object.liquidTankDiameter = 0;
                object.targetDis = 0;
                object.density = 0;
                object.burningRate = 0;
                object.burningHeat = 0;
            }
            if (message.sceneName != null && message.hasOwnProperty("sceneName"))
                object.sceneName = message.sceneName;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.density != null && message.hasOwnProperty("density"))
                object.density = options.json && !isFinite(message.density) ? String(message.density) : message.density;
            if (message.burningRate != null && message.hasOwnProperty("burningRate"))
                object.burningRate = options.json && !isFinite(message.burningRate) ? String(message.burningRate) : message.burningRate;
            if (message.burningHeat != null && message.hasOwnProperty("burningHeat"))
                object.burningHeat = options.json && !isFinite(message.burningHeat) ? String(message.burningHeat) : message.burningHeat;
            return object;
        };

        /**
         * Converts this PoolFireCalcRequest to JSON.
         * @function toJSON
         * @memberof accsim.PoolFireCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoolFireCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoolFireCalcRequest;
    })();

    accsim.PoolFireCalcResponse = (function() {

        /**
         * Properties of a PoolFireCalcResponse.
         * @memberof accsim
         * @interface IPoolFireCalcResponse
         * @property {number|null} [fireHeight] PoolFireCalcResponse fireHeight
         * @property {number|null} [tiltAngle] PoolFireCalcResponse tiltAngle
         * @property {string|null} [extendedFlameDiameter] PoolFireCalcResponse extendedFlameDiameter
         * @property {number|null} [thermalRadiationPower] PoolFireCalcResponse thermalRadiationPower
         * @property {number|null} [deathRadius] PoolFireCalcResponse deathRadius
         * @property {number|null} [bigInjuryRadius] PoolFireCalcResponse bigInjuryRadius
         * @property {number|null} [smallInjuryRadius] PoolFireCalcResponse smallInjuryRadius
         * @property {Array.<number>|null} [xs] PoolFireCalcResponse xs
         * @property {Array.<number>|null} [ys] PoolFireCalcResponse ys
         * @property {number|null} [safeRadius] PoolFireCalcResponse safeRadius
         */

        /**
         * Constructs a new PoolFireCalcResponse.
         * @memberof accsim
         * @classdesc Represents a PoolFireCalcResponse.
         * @implements IPoolFireCalcResponse
         * @constructor
         * @param {accsim.IPoolFireCalcResponse=} [properties] Properties to set
         */
        function PoolFireCalcResponse(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PoolFireCalcResponse fireHeight.
         * @member {number} fireHeight
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.fireHeight = 0;

        /**
         * PoolFireCalcResponse tiltAngle.
         * @member {number} tiltAngle
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.tiltAngle = 0;

        /**
         * PoolFireCalcResponse extendedFlameDiameter.
         * @member {string} extendedFlameDiameter
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.extendedFlameDiameter = "";

        /**
         * PoolFireCalcResponse thermalRadiationPower.
         * @member {number} thermalRadiationPower
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.thermalRadiationPower = 0;

        /**
         * PoolFireCalcResponse deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.deathRadius = 0;

        /**
         * PoolFireCalcResponse bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.bigInjuryRadius = 0;

        /**
         * PoolFireCalcResponse smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.smallInjuryRadius = 0;

        /**
         * PoolFireCalcResponse xs.
         * @member {Array.<number>} xs
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.xs = $util.emptyArray;

        /**
         * PoolFireCalcResponse ys.
         * @member {Array.<number>} ys
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.ys = $util.emptyArray;

        /**
         * PoolFireCalcResponse safeRadius.
         * @member {number} safeRadius
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         */
        PoolFireCalcResponse.prototype.safeRadius = 0;

        /**
         * Creates a PoolFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.PoolFireCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.PoolFireCalcResponse} PoolFireCalcResponse
         */
        PoolFireCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.PoolFireCalcResponse)
                return object;
            let message = new $root.accsim.PoolFireCalcResponse();
            if (object.fireHeight != null)
                message.fireHeight = Number(object.fireHeight);
            if (object.tiltAngle != null)
                message.tiltAngle = Number(object.tiltAngle);
            if (object.extendedFlameDiameter != null)
                message.extendedFlameDiameter = String(object.extendedFlameDiameter);
            if (object.thermalRadiationPower != null)
                message.thermalRadiationPower = Number(object.thermalRadiationPower);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".accsim.PoolFireCalcResponse.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = Number(object.xs[i]);
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".accsim.PoolFireCalcResponse.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = Number(object.ys[i]);
            }
            if (object.safeRadius != null)
                message.safeRadius = Number(object.safeRadius);
            return message;
        };

        /**
         * Creates a plain object from a PoolFireCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.PoolFireCalcResponse
         * @static
         * @param {accsim.PoolFireCalcResponse} message PoolFireCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoolFireCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.fireHeight = 0;
                object.tiltAngle = 0;
                object.extendedFlameDiameter = "";
                object.thermalRadiationPower = 0;
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.smallInjuryRadius = 0;
                object.safeRadius = 0;
            }
            if (message.fireHeight != null && message.hasOwnProperty("fireHeight"))
                object.fireHeight = options.json && !isFinite(message.fireHeight) ? String(message.fireHeight) : message.fireHeight;
            if (message.tiltAngle != null && message.hasOwnProperty("tiltAngle"))
                object.tiltAngle = options.json && !isFinite(message.tiltAngle) ? String(message.tiltAngle) : message.tiltAngle;
            if (message.extendedFlameDiameter != null && message.hasOwnProperty("extendedFlameDiameter"))
                object.extendedFlameDiameter = message.extendedFlameDiameter;
            if (message.thermalRadiationPower != null && message.hasOwnProperty("thermalRadiationPower"))
                object.thermalRadiationPower = options.json && !isFinite(message.thermalRadiationPower) ? String(message.thermalRadiationPower) : message.thermalRadiationPower;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = options.json && !isFinite(message.xs[j]) ? String(message.xs[j]) : message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = options.json && !isFinite(message.ys[j]) ? String(message.ys[j]) : message.ys[j];
            }
            if (message.safeRadius != null && message.hasOwnProperty("safeRadius"))
                object.safeRadius = options.json && !isFinite(message.safeRadius) ? String(message.safeRadius) : message.safeRadius;
            return object;
        };

        /**
         * Converts this PoolFireCalcResponse to JSON.
         * @function toJSON
         * @memberof accsim.PoolFireCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoolFireCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoolFireCalcResponse;
    })();

    accsim.FlowingFireCalcRequest = (function() {

        /**
         * Properties of a FlowingFireCalcRequest.
         * @memberof accsim
         * @interface IFlowingFireCalcRequest
         * @property {string|null} [fireTank] FlowingFireCalcRequest fireTank
         * @property {string|null} [sceneName] FlowingFireCalcRequest sceneName
         * @property {string|null} [materialType] FlowingFireCalcRequest materialType
         * @property {string|null} [windDirection] FlowingFireCalcRequest windDirection
         * @property {number|null} [windSpeed] FlowingFireCalcRequest windSpeed
         * @property {number|null} [liquidTankDiameter] FlowingFireCalcRequest liquidTankDiameter
         * @property {string|null} [sceneId] FlowingFireCalcRequest sceneId
         * @property {number|null} [targetDis] FlowingFireCalcRequest targetDis
         * @property {number|null} [density] FlowingFireCalcRequest density
         * @property {number|null} [burningRate] FlowingFireCalcRequest burningRate
         * @property {number|null} [burningHeat] FlowingFireCalcRequest burningHeat
         */

        /**
         * Constructs a new FlowingFireCalcRequest.
         * @memberof accsim
         * @classdesc Represents a FlowingFireCalcRequest.
         * @implements IFlowingFireCalcRequest
         * @constructor
         * @param {accsim.IFlowingFireCalcRequest=} [properties] Properties to set
         */
        function FlowingFireCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FlowingFireCalcRequest fireTank.
         * @member {string} fireTank
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.fireTank = "";

        /**
         * FlowingFireCalcRequest sceneName.
         * @member {string} sceneName
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.sceneName = "";

        /**
         * FlowingFireCalcRequest materialType.
         * @member {string} materialType
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.materialType = "";

        /**
         * FlowingFireCalcRequest windDirection.
         * @member {string} windDirection
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.windDirection = "";

        /**
         * FlowingFireCalcRequest windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.windSpeed = 0;

        /**
         * FlowingFireCalcRequest liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.liquidTankDiameter = 0;

        /**
         * FlowingFireCalcRequest sceneId.
         * @member {string} sceneId
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.sceneId = "";

        /**
         * FlowingFireCalcRequest targetDis.
         * @member {number} targetDis
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.targetDis = 0;

        /**
         * FlowingFireCalcRequest density.
         * @member {number} density
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.density = 0;

        /**
         * FlowingFireCalcRequest burningRate.
         * @member {number} burningRate
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.burningRate = 0;

        /**
         * FlowingFireCalcRequest burningHeat.
         * @member {number} burningHeat
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         */
        FlowingFireCalcRequest.prototype.burningHeat = 0;

        /**
         * Creates a FlowingFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.FlowingFireCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.FlowingFireCalcRequest} FlowingFireCalcRequest
         */
        FlowingFireCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.FlowingFireCalcRequest)
                return object;
            let message = new $root.accsim.FlowingFireCalcRequest();
            if (object.fireTank != null)
                message.fireTank = String(object.fireTank);
            if (object.sceneName != null)
                message.sceneName = String(object.sceneName);
            if (object.materialType != null)
                message.materialType = String(object.materialType);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            if (object.sceneId != null)
                message.sceneId = String(object.sceneId);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.density != null)
                message.density = Number(object.density);
            if (object.burningRate != null)
                message.burningRate = Number(object.burningRate);
            if (object.burningHeat != null)
                message.burningHeat = Number(object.burningHeat);
            return message;
        };

        /**
         * Creates a plain object from a FlowingFireCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.FlowingFireCalcRequest
         * @static
         * @param {accsim.FlowingFireCalcRequest} message FlowingFireCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FlowingFireCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fireTank = "";
                object.sceneName = "";
                object.materialType = "";
                object.windDirection = "";
                object.windSpeed = 0;
                object.liquidTankDiameter = 0;
                object.sceneId = "";
                object.targetDis = 0;
                object.density = 0;
                object.burningRate = 0;
                object.burningHeat = 0;
            }
            if (message.fireTank != null && message.hasOwnProperty("fireTank"))
                object.fireTank = message.fireTank;
            if (message.sceneName != null && message.hasOwnProperty("sceneName"))
                object.sceneName = message.sceneName;
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                object.materialType = message.materialType;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            if (message.sceneId != null && message.hasOwnProperty("sceneId"))
                object.sceneId = message.sceneId;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.density != null && message.hasOwnProperty("density"))
                object.density = options.json && !isFinite(message.density) ? String(message.density) : message.density;
            if (message.burningRate != null && message.hasOwnProperty("burningRate"))
                object.burningRate = options.json && !isFinite(message.burningRate) ? String(message.burningRate) : message.burningRate;
            if (message.burningHeat != null && message.hasOwnProperty("burningHeat"))
                object.burningHeat = options.json && !isFinite(message.burningHeat) ? String(message.burningHeat) : message.burningHeat;
            return object;
        };

        /**
         * Converts this FlowingFireCalcRequest to JSON.
         * @function toJSON
         * @memberof accsim.FlowingFireCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FlowingFireCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FlowingFireCalcRequest;
    })();

    accsim.FlowingFireCalcResponse = (function() {

        /**
         * Properties of a FlowingFireCalcResponse.
         * @memberof accsim
         * @interface IFlowingFireCalcResponse
         * @property {number|null} [fireHeight] FlowingFireCalcResponse fireHeight
         * @property {number|null} [tiltAngle] FlowingFireCalcResponse tiltAngle
         * @property {string|null} [extendedFlameDiameter] FlowingFireCalcResponse extendedFlameDiameter
         * @property {number|null} [thermalRadiationPower] FlowingFireCalcResponse thermalRadiationPower
         * @property {number|null} [deathRadius] FlowingFireCalcResponse deathRadius
         * @property {number|null} [bigInjuryRadius] FlowingFireCalcResponse bigInjuryRadius
         * @property {number|null} [smallInjuryRadius] FlowingFireCalcResponse smallInjuryRadius
         * @property {Array.<number>|null} [xs] FlowingFireCalcResponse xs
         * @property {Array.<number>|null} [ys] FlowingFireCalcResponse ys
         * @property {number|null} [safeRadius] FlowingFireCalcResponse safeRadius
         */

        /**
         * Constructs a new FlowingFireCalcResponse.
         * @memberof accsim
         * @classdesc Represents a FlowingFireCalcResponse.
         * @implements IFlowingFireCalcResponse
         * @constructor
         * @param {accsim.IFlowingFireCalcResponse=} [properties] Properties to set
         */
        function FlowingFireCalcResponse(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FlowingFireCalcResponse fireHeight.
         * @member {number} fireHeight
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.fireHeight = 0;

        /**
         * FlowingFireCalcResponse tiltAngle.
         * @member {number} tiltAngle
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.tiltAngle = 0;

        /**
         * FlowingFireCalcResponse extendedFlameDiameter.
         * @member {string} extendedFlameDiameter
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.extendedFlameDiameter = "";

        /**
         * FlowingFireCalcResponse thermalRadiationPower.
         * @member {number} thermalRadiationPower
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.thermalRadiationPower = 0;

        /**
         * FlowingFireCalcResponse deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.deathRadius = 0;

        /**
         * FlowingFireCalcResponse bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.bigInjuryRadius = 0;

        /**
         * FlowingFireCalcResponse smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.smallInjuryRadius = 0;

        /**
         * FlowingFireCalcResponse xs.
         * @member {Array.<number>} xs
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.xs = $util.emptyArray;

        /**
         * FlowingFireCalcResponse ys.
         * @member {Array.<number>} ys
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.ys = $util.emptyArray;

        /**
         * FlowingFireCalcResponse safeRadius.
         * @member {number} safeRadius
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         */
        FlowingFireCalcResponse.prototype.safeRadius = 0;

        /**
         * Creates a FlowingFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.FlowingFireCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.FlowingFireCalcResponse} FlowingFireCalcResponse
         */
        FlowingFireCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.FlowingFireCalcResponse)
                return object;
            let message = new $root.accsim.FlowingFireCalcResponse();
            if (object.fireHeight != null)
                message.fireHeight = Number(object.fireHeight);
            if (object.tiltAngle != null)
                message.tiltAngle = Number(object.tiltAngle);
            if (object.extendedFlameDiameter != null)
                message.extendedFlameDiameter = String(object.extendedFlameDiameter);
            if (object.thermalRadiationPower != null)
                message.thermalRadiationPower = Number(object.thermalRadiationPower);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".accsim.FlowingFireCalcResponse.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = Number(object.xs[i]);
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".accsim.FlowingFireCalcResponse.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = Number(object.ys[i]);
            }
            if (object.safeRadius != null)
                message.safeRadius = Number(object.safeRadius);
            return message;
        };

        /**
         * Creates a plain object from a FlowingFireCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.FlowingFireCalcResponse
         * @static
         * @param {accsim.FlowingFireCalcResponse} message FlowingFireCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FlowingFireCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.fireHeight = 0;
                object.tiltAngle = 0;
                object.extendedFlameDiameter = "";
                object.thermalRadiationPower = 0;
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.smallInjuryRadius = 0;
                object.safeRadius = 0;
            }
            if (message.fireHeight != null && message.hasOwnProperty("fireHeight"))
                object.fireHeight = options.json && !isFinite(message.fireHeight) ? String(message.fireHeight) : message.fireHeight;
            if (message.tiltAngle != null && message.hasOwnProperty("tiltAngle"))
                object.tiltAngle = options.json && !isFinite(message.tiltAngle) ? String(message.tiltAngle) : message.tiltAngle;
            if (message.extendedFlameDiameter != null && message.hasOwnProperty("extendedFlameDiameter"))
                object.extendedFlameDiameter = message.extendedFlameDiameter;
            if (message.thermalRadiationPower != null && message.hasOwnProperty("thermalRadiationPower"))
                object.thermalRadiationPower = options.json && !isFinite(message.thermalRadiationPower) ? String(message.thermalRadiationPower) : message.thermalRadiationPower;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = options.json && !isFinite(message.xs[j]) ? String(message.xs[j]) : message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = options.json && !isFinite(message.ys[j]) ? String(message.ys[j]) : message.ys[j];
            }
            if (message.safeRadius != null && message.hasOwnProperty("safeRadius"))
                object.safeRadius = options.json && !isFinite(message.safeRadius) ? String(message.safeRadius) : message.safeRadius;
            return object;
        };

        /**
         * Converts this FlowingFireCalcResponse to JSON.
         * @function toJSON
         * @memberof accsim.FlowingFireCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FlowingFireCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FlowingFireCalcResponse;
    })();

    accsim.SealRingCalcRequest = (function() {

        /**
         * Properties of a SealRingCalcRequest.
         * @memberof accsim
         * @interface ISealRingCalcRequest
         * @property {string|null} [fireTank] SealRingCalcRequest fireTank
         * @property {string|null} [sceneName] SealRingCalcRequest sceneName
         * @property {string|null} [materialType] SealRingCalcRequest materialType
         * @property {string|null} [windDirection] SealRingCalcRequest windDirection
         * @property {number|null} [windSpeed] SealRingCalcRequest windSpeed
         * @property {number|null} [liquidTankDiameter] SealRingCalcRequest liquidTankDiameter
         * @property {string|null} [sceneId] SealRingCalcRequest sceneId
         * @property {number|null} [targetDis] SealRingCalcRequest targetDis
         * @property {number|null} [density] SealRingCalcRequest density
         * @property {number|null} [burningRate] SealRingCalcRequest burningRate
         * @property {number|null} [burningHeat] SealRingCalcRequest burningHeat
         * @property {number|null} [ringWidth] SealRingCalcRequest ringWidth
         */

        /**
         * Constructs a new SealRingCalcRequest.
         * @memberof accsim
         * @classdesc Represents a SealRingCalcRequest.
         * @implements ISealRingCalcRequest
         * @constructor
         * @param {accsim.ISealRingCalcRequest=} [properties] Properties to set
         */
        function SealRingCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SealRingCalcRequest fireTank.
         * @member {string} fireTank
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.fireTank = "";

        /**
         * SealRingCalcRequest sceneName.
         * @member {string} sceneName
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.sceneName = "";

        /**
         * SealRingCalcRequest materialType.
         * @member {string} materialType
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.materialType = "";

        /**
         * SealRingCalcRequest windDirection.
         * @member {string} windDirection
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.windDirection = "";

        /**
         * SealRingCalcRequest windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.windSpeed = 0;

        /**
         * SealRingCalcRequest liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.liquidTankDiameter = 0;

        /**
         * SealRingCalcRequest sceneId.
         * @member {string} sceneId
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.sceneId = "";

        /**
         * SealRingCalcRequest targetDis.
         * @member {number} targetDis
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.targetDis = 0;

        /**
         * SealRingCalcRequest density.
         * @member {number} density
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.density = 0;

        /**
         * SealRingCalcRequest burningRate.
         * @member {number} burningRate
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.burningRate = 0;

        /**
         * SealRingCalcRequest burningHeat.
         * @member {number} burningHeat
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.burningHeat = 0;

        /**
         * SealRingCalcRequest ringWidth.
         * @member {number} ringWidth
         * @memberof accsim.SealRingCalcRequest
         * @instance
         */
        SealRingCalcRequest.prototype.ringWidth = 0;

        /**
         * Creates a SealRingCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.SealRingCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.SealRingCalcRequest} SealRingCalcRequest
         */
        SealRingCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.SealRingCalcRequest)
                return object;
            let message = new $root.accsim.SealRingCalcRequest();
            if (object.fireTank != null)
                message.fireTank = String(object.fireTank);
            if (object.sceneName != null)
                message.sceneName = String(object.sceneName);
            if (object.materialType != null)
                message.materialType = String(object.materialType);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            if (object.sceneId != null)
                message.sceneId = String(object.sceneId);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.density != null)
                message.density = Number(object.density);
            if (object.burningRate != null)
                message.burningRate = Number(object.burningRate);
            if (object.burningHeat != null)
                message.burningHeat = Number(object.burningHeat);
            if (object.ringWidth != null)
                message.ringWidth = Number(object.ringWidth);
            return message;
        };

        /**
         * Creates a plain object from a SealRingCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.SealRingCalcRequest
         * @static
         * @param {accsim.SealRingCalcRequest} message SealRingCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SealRingCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fireTank = "";
                object.sceneName = "";
                object.materialType = "";
                object.windDirection = "";
                object.windSpeed = 0;
                object.liquidTankDiameter = 0;
                object.sceneId = "";
                object.targetDis = 0;
                object.density = 0;
                object.burningRate = 0;
                object.burningHeat = 0;
                object.ringWidth = 0;
            }
            if (message.fireTank != null && message.hasOwnProperty("fireTank"))
                object.fireTank = message.fireTank;
            if (message.sceneName != null && message.hasOwnProperty("sceneName"))
                object.sceneName = message.sceneName;
            if (message.materialType != null && message.hasOwnProperty("materialType"))
                object.materialType = message.materialType;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            if (message.sceneId != null && message.hasOwnProperty("sceneId"))
                object.sceneId = message.sceneId;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.density != null && message.hasOwnProperty("density"))
                object.density = options.json && !isFinite(message.density) ? String(message.density) : message.density;
            if (message.burningRate != null && message.hasOwnProperty("burningRate"))
                object.burningRate = options.json && !isFinite(message.burningRate) ? String(message.burningRate) : message.burningRate;
            if (message.burningHeat != null && message.hasOwnProperty("burningHeat"))
                object.burningHeat = options.json && !isFinite(message.burningHeat) ? String(message.burningHeat) : message.burningHeat;
            if (message.ringWidth != null && message.hasOwnProperty("ringWidth"))
                object.ringWidth = options.json && !isFinite(message.ringWidth) ? String(message.ringWidth) : message.ringWidth;
            return object;
        };

        /**
         * Converts this SealRingCalcRequest to JSON.
         * @function toJSON
         * @memberof accsim.SealRingCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SealRingCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SealRingCalcRequest;
    })();

    accsim.SealRingCalcResponse = (function() {

        /**
         * Properties of a SealRingCalcResponse.
         * @memberof accsim
         * @interface ISealRingCalcResponse
         * @property {number|null} [thermalRadiationPower] SealRingCalcResponse thermalRadiationPower
         * @property {number|null} [deathRadius] SealRingCalcResponse deathRadius
         * @property {number|null} [bigInjuryRadius] SealRingCalcResponse bigInjuryRadius
         * @property {number|null} [smallInjuryRadius] SealRingCalcResponse smallInjuryRadius
         * @property {number|null} [safeRadius] SealRingCalcResponse safeRadius
         */

        /**
         * Constructs a new SealRingCalcResponse.
         * @memberof accsim
         * @classdesc Represents a SealRingCalcResponse.
         * @implements ISealRingCalcResponse
         * @constructor
         * @param {accsim.ISealRingCalcResponse=} [properties] Properties to set
         */
        function SealRingCalcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SealRingCalcResponse thermalRadiationPower.
         * @member {number} thermalRadiationPower
         * @memberof accsim.SealRingCalcResponse
         * @instance
         */
        SealRingCalcResponse.prototype.thermalRadiationPower = 0;

        /**
         * SealRingCalcResponse deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.SealRingCalcResponse
         * @instance
         */
        SealRingCalcResponse.prototype.deathRadius = 0;

        /**
         * SealRingCalcResponse bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.SealRingCalcResponse
         * @instance
         */
        SealRingCalcResponse.prototype.bigInjuryRadius = 0;

        /**
         * SealRingCalcResponse smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.SealRingCalcResponse
         * @instance
         */
        SealRingCalcResponse.prototype.smallInjuryRadius = 0;

        /**
         * SealRingCalcResponse safeRadius.
         * @member {number} safeRadius
         * @memberof accsim.SealRingCalcResponse
         * @instance
         */
        SealRingCalcResponse.prototype.safeRadius = 0;

        /**
         * Creates a SealRingCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.SealRingCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.SealRingCalcResponse} SealRingCalcResponse
         */
        SealRingCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.SealRingCalcResponse)
                return object;
            let message = new $root.accsim.SealRingCalcResponse();
            if (object.thermalRadiationPower != null)
                message.thermalRadiationPower = Number(object.thermalRadiationPower);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.safeRadius != null)
                message.safeRadius = Number(object.safeRadius);
            return message;
        };

        /**
         * Creates a plain object from a SealRingCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.SealRingCalcResponse
         * @static
         * @param {accsim.SealRingCalcResponse} message SealRingCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SealRingCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.thermalRadiationPower = 0;
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.smallInjuryRadius = 0;
                object.safeRadius = 0;
            }
            if (message.thermalRadiationPower != null && message.hasOwnProperty("thermalRadiationPower"))
                object.thermalRadiationPower = options.json && !isFinite(message.thermalRadiationPower) ? String(message.thermalRadiationPower) : message.thermalRadiationPower;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.safeRadius != null && message.hasOwnProperty("safeRadius"))
                object.safeRadius = options.json && !isFinite(message.safeRadius) ? String(message.safeRadius) : message.safeRadius;
            return object;
        };

        /**
         * Converts this SealRingCalcResponse to JSON.
         * @function toJSON
         * @memberof accsim.SealRingCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SealRingCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SealRingCalcResponse;
    })();

    accsim.JetFireCalcRequest = (function() {

        /**
         * Properties of a JetFireCalcRequest.
         * @memberof accsim
         * @interface IJetFireCalcRequest
         * @property {number|null} [aperture] JetFireCalcRequest aperture
         * @property {number|null} [pressure] JetFireCalcRequest pressure
         * @property {number|null} [specificHeatCapacity] JetFireCalcRequest specificHeatCapacity
         * @property {number|null} [molecularWeight] JetFireCalcRequest molecularWeight
         * @property {number|null} [burningHeat] JetFireCalcRequest burningHeat
         * @property {number|null} [targetDis] JetFireCalcRequest targetDis
         * @property {number|null} [pipelinePressure] JetFireCalcRequest pipelinePressure
         * @property {number|null} [windSpeed] JetFireCalcRequest windSpeed
         * @property {string|null} [sceneName] JetFireCalcRequest sceneName
         * @property {string|null} [windDirection] JetFireCalcRequest windDirection
         */

        /**
         * Constructs a new JetFireCalcRequest.
         * @memberof accsim
         * @classdesc Represents a JetFireCalcRequest.
         * @implements IJetFireCalcRequest
         * @constructor
         * @param {accsim.IJetFireCalcRequest=} [properties] Properties to set
         */
        function JetFireCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JetFireCalcRequest aperture.
         * @member {number} aperture
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.aperture = 0;

        /**
         * JetFireCalcRequest pressure.
         * @member {number} pressure
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.pressure = 0;

        /**
         * JetFireCalcRequest specificHeatCapacity.
         * @member {number} specificHeatCapacity
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.specificHeatCapacity = 0;

        /**
         * JetFireCalcRequest molecularWeight.
         * @member {number} molecularWeight
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.molecularWeight = 0;

        /**
         * JetFireCalcRequest burningHeat.
         * @member {number} burningHeat
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.burningHeat = 0;

        /**
         * JetFireCalcRequest targetDis.
         * @member {number} targetDis
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.targetDis = 0;

        /**
         * JetFireCalcRequest pipelinePressure.
         * @member {number} pipelinePressure
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.pipelinePressure = 0;

        /**
         * JetFireCalcRequest windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.windSpeed = 0;

        /**
         * JetFireCalcRequest sceneName.
         * @member {string} sceneName
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.sceneName = "";

        /**
         * JetFireCalcRequest windDirection.
         * @member {string} windDirection
         * @memberof accsim.JetFireCalcRequest
         * @instance
         */
        JetFireCalcRequest.prototype.windDirection = "";

        /**
         * Creates a JetFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.JetFireCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.JetFireCalcRequest} JetFireCalcRequest
         */
        JetFireCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.JetFireCalcRequest)
                return object;
            let message = new $root.accsim.JetFireCalcRequest();
            if (object.aperture != null)
                message.aperture = Number(object.aperture);
            if (object.pressure != null)
                message.pressure = Number(object.pressure);
            if (object.specificHeatCapacity != null)
                message.specificHeatCapacity = Number(object.specificHeatCapacity);
            if (object.molecularWeight != null)
                message.molecularWeight = Number(object.molecularWeight);
            if (object.burningHeat != null)
                message.burningHeat = Number(object.burningHeat);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.pipelinePressure != null)
                message.pipelinePressure = Number(object.pipelinePressure);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.sceneName != null)
                message.sceneName = String(object.sceneName);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            return message;
        };

        /**
         * Creates a plain object from a JetFireCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.JetFireCalcRequest
         * @static
         * @param {accsim.JetFireCalcRequest} message JetFireCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JetFireCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.aperture = 0;
                object.pressure = 0;
                object.specificHeatCapacity = 0;
                object.molecularWeight = 0;
                object.burningHeat = 0;
                object.targetDis = 0;
                object.pipelinePressure = 0;
                object.windSpeed = 0;
                object.sceneName = "";
                object.windDirection = "";
            }
            if (message.aperture != null && message.hasOwnProperty("aperture"))
                object.aperture = options.json && !isFinite(message.aperture) ? String(message.aperture) : message.aperture;
            if (message.pressure != null && message.hasOwnProperty("pressure"))
                object.pressure = options.json && !isFinite(message.pressure) ? String(message.pressure) : message.pressure;
            if (message.specificHeatCapacity != null && message.hasOwnProperty("specificHeatCapacity"))
                object.specificHeatCapacity = options.json && !isFinite(message.specificHeatCapacity) ? String(message.specificHeatCapacity) : message.specificHeatCapacity;
            if (message.molecularWeight != null && message.hasOwnProperty("molecularWeight"))
                object.molecularWeight = options.json && !isFinite(message.molecularWeight) ? String(message.molecularWeight) : message.molecularWeight;
            if (message.burningHeat != null && message.hasOwnProperty("burningHeat"))
                object.burningHeat = options.json && !isFinite(message.burningHeat) ? String(message.burningHeat) : message.burningHeat;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.pipelinePressure != null && message.hasOwnProperty("pipelinePressure"))
                object.pipelinePressure = options.json && !isFinite(message.pipelinePressure) ? String(message.pipelinePressure) : message.pipelinePressure;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.sceneName != null && message.hasOwnProperty("sceneName"))
                object.sceneName = message.sceneName;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            return object;
        };

        /**
         * Converts this JetFireCalcRequest to JSON.
         * @function toJSON
         * @memberof accsim.JetFireCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JetFireCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JetFireCalcRequest;
    })();

    accsim.JetFireCalcResponse = (function() {

        /**
         * Properties of a JetFireCalcResponse.
         * @memberof accsim
         * @interface IJetFireCalcResponse
         * @property {number|null} [smallInjuryRadius] JetFireCalcResponse smallInjuryRadius
         * @property {number|null} [deathRadius] JetFireCalcResponse deathRadius
         * @property {number|null} [bigInjuryRadius] JetFireCalcResponse bigInjuryRadius
         * @property {Array.<number>|null} [xs] JetFireCalcResponse xs
         * @property {Array.<number>|null} [ys] JetFireCalcResponse ys
         * @property {number|null} [heatRadiationFlux] JetFireCalcResponse heatRadiationFlux
         * @property {number|null} [fireHeight] JetFireCalcResponse fireHeight
         * @property {number|null} [fireDiameter] JetFireCalcResponse fireDiameter
         */

        /**
         * Constructs a new JetFireCalcResponse.
         * @memberof accsim
         * @classdesc Represents a JetFireCalcResponse.
         * @implements IJetFireCalcResponse
         * @constructor
         * @param {accsim.IJetFireCalcResponse=} [properties] Properties to set
         */
        function JetFireCalcResponse(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JetFireCalcResponse smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.smallInjuryRadius = 0;

        /**
         * JetFireCalcResponse deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.deathRadius = 0;

        /**
         * JetFireCalcResponse bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.bigInjuryRadius = 0;

        /**
         * JetFireCalcResponse xs.
         * @member {Array.<number>} xs
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.xs = $util.emptyArray;

        /**
         * JetFireCalcResponse ys.
         * @member {Array.<number>} ys
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.ys = $util.emptyArray;

        /**
         * JetFireCalcResponse heatRadiationFlux.
         * @member {number} heatRadiationFlux
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.heatRadiationFlux = 0;

        /**
         * JetFireCalcResponse fireHeight.
         * @member {number} fireHeight
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.fireHeight = 0;

        /**
         * JetFireCalcResponse fireDiameter.
         * @member {number} fireDiameter
         * @memberof accsim.JetFireCalcResponse
         * @instance
         */
        JetFireCalcResponse.prototype.fireDiameter = 0;

        /**
         * Creates a JetFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.JetFireCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.JetFireCalcResponse} JetFireCalcResponse
         */
        JetFireCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.JetFireCalcResponse)
                return object;
            let message = new $root.accsim.JetFireCalcResponse();
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".accsim.JetFireCalcResponse.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = Number(object.xs[i]);
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".accsim.JetFireCalcResponse.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = Number(object.ys[i]);
            }
            if (object.heatRadiationFlux != null)
                message.heatRadiationFlux = Number(object.heatRadiationFlux);
            if (object.fireHeight != null)
                message.fireHeight = Number(object.fireHeight);
            if (object.fireDiameter != null)
                message.fireDiameter = Number(object.fireDiameter);
            return message;
        };

        /**
         * Creates a plain object from a JetFireCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.JetFireCalcResponse
         * @static
         * @param {accsim.JetFireCalcResponse} message JetFireCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JetFireCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.smallInjuryRadius = 0;
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.heatRadiationFlux = 0;
                object.fireHeight = 0;
                object.fireDiameter = 0;
            }
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = options.json && !isFinite(message.xs[j]) ? String(message.xs[j]) : message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = options.json && !isFinite(message.ys[j]) ? String(message.ys[j]) : message.ys[j];
            }
            if (message.heatRadiationFlux != null && message.hasOwnProperty("heatRadiationFlux"))
                object.heatRadiationFlux = options.json && !isFinite(message.heatRadiationFlux) ? String(message.heatRadiationFlux) : message.heatRadiationFlux;
            if (message.fireHeight != null && message.hasOwnProperty("fireHeight"))
                object.fireHeight = options.json && !isFinite(message.fireHeight) ? String(message.fireHeight) : message.fireHeight;
            if (message.fireDiameter != null && message.hasOwnProperty("fireDiameter"))
                object.fireDiameter = options.json && !isFinite(message.fireDiameter) ? String(message.fireDiameter) : message.fireDiameter;
            return object;
        };

        /**
         * Converts this JetFireCalcResponse to JSON.
         * @function toJSON
         * @memberof accsim.JetFireCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JetFireCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JetFireCalcResponse;
    })();

    accsim.BallFireCalcRequest = (function() {

        /**
         * Properties of a BallFireCalcRequest.
         * @memberof accsim
         * @interface IBallFireCalcRequest
         * @property {number|null} [leakage] BallFireCalcRequest leakage
         * @property {number|null} [burningHeat] BallFireCalcRequest burningHeat
         * @property {number|null} [targetDis] BallFireCalcRequest targetDis
         * @property {number|null} [windSpeed] BallFireCalcRequest windSpeed
         * @property {string|null} [sceneName] BallFireCalcRequest sceneName
         * @property {string|null} [windDirection] BallFireCalcRequest windDirection
         */

        /**
         * Constructs a new BallFireCalcRequest.
         * @memberof accsim
         * @classdesc Represents a BallFireCalcRequest.
         * @implements IBallFireCalcRequest
         * @constructor
         * @param {accsim.IBallFireCalcRequest=} [properties] Properties to set
         */
        function BallFireCalcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BallFireCalcRequest leakage.
         * @member {number} leakage
         * @memberof accsim.BallFireCalcRequest
         * @instance
         */
        BallFireCalcRequest.prototype.leakage = 0;

        /**
         * BallFireCalcRequest burningHeat.
         * @member {number} burningHeat
         * @memberof accsim.BallFireCalcRequest
         * @instance
         */
        BallFireCalcRequest.prototype.burningHeat = 0;

        /**
         * BallFireCalcRequest targetDis.
         * @member {number} targetDis
         * @memberof accsim.BallFireCalcRequest
         * @instance
         */
        BallFireCalcRequest.prototype.targetDis = 0;

        /**
         * BallFireCalcRequest windSpeed.
         * @member {number} windSpeed
         * @memberof accsim.BallFireCalcRequest
         * @instance
         */
        BallFireCalcRequest.prototype.windSpeed = 0;

        /**
         * BallFireCalcRequest sceneName.
         * @member {string} sceneName
         * @memberof accsim.BallFireCalcRequest
         * @instance
         */
        BallFireCalcRequest.prototype.sceneName = "";

        /**
         * BallFireCalcRequest windDirection.
         * @member {string} windDirection
         * @memberof accsim.BallFireCalcRequest
         * @instance
         */
        BallFireCalcRequest.prototype.windDirection = "";

        /**
         * Creates a BallFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.BallFireCalcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.BallFireCalcRequest} BallFireCalcRequest
         */
        BallFireCalcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.BallFireCalcRequest)
                return object;
            let message = new $root.accsim.BallFireCalcRequest();
            if (object.leakage != null)
                message.leakage = Number(object.leakage);
            if (object.burningHeat != null)
                message.burningHeat = Number(object.burningHeat);
            if (object.targetDis != null)
                message.targetDis = Number(object.targetDis);
            if (object.windSpeed != null)
                message.windSpeed = Number(object.windSpeed);
            if (object.sceneName != null)
                message.sceneName = String(object.sceneName);
            if (object.windDirection != null)
                message.windDirection = String(object.windDirection);
            return message;
        };

        /**
         * Creates a plain object from a BallFireCalcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.BallFireCalcRequest
         * @static
         * @param {accsim.BallFireCalcRequest} message BallFireCalcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BallFireCalcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.leakage = 0;
                object.burningHeat = 0;
                object.targetDis = 0;
                object.windSpeed = 0;
                object.sceneName = "";
                object.windDirection = "";
            }
            if (message.leakage != null && message.hasOwnProperty("leakage"))
                object.leakage = options.json && !isFinite(message.leakage) ? String(message.leakage) : message.leakage;
            if (message.burningHeat != null && message.hasOwnProperty("burningHeat"))
                object.burningHeat = options.json && !isFinite(message.burningHeat) ? String(message.burningHeat) : message.burningHeat;
            if (message.targetDis != null && message.hasOwnProperty("targetDis"))
                object.targetDis = options.json && !isFinite(message.targetDis) ? String(message.targetDis) : message.targetDis;
            if (message.windSpeed != null && message.hasOwnProperty("windSpeed"))
                object.windSpeed = options.json && !isFinite(message.windSpeed) ? String(message.windSpeed) : message.windSpeed;
            if (message.sceneName != null && message.hasOwnProperty("sceneName"))
                object.sceneName = message.sceneName;
            if (message.windDirection != null && message.hasOwnProperty("windDirection"))
                object.windDirection = message.windDirection;
            return object;
        };

        /**
         * Converts this BallFireCalcRequest to JSON.
         * @function toJSON
         * @memberof accsim.BallFireCalcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BallFireCalcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BallFireCalcRequest;
    })();

    accsim.BallFireCalcResponse = (function() {

        /**
         * Properties of a BallFireCalcResponse.
         * @memberof accsim
         * @interface IBallFireCalcResponse
         * @property {number|null} [smallInjuryRadius] BallFireCalcResponse smallInjuryRadius
         * @property {number|null} [deathRadius] BallFireCalcResponse deathRadius
         * @property {number|null} [bigInjuryRadius] BallFireCalcResponse bigInjuryRadius
         * @property {Array.<number>|null} [xs] BallFireCalcResponse xs
         * @property {Array.<number>|null} [ys] BallFireCalcResponse ys
         * @property {number|null} [maxRadius] BallFireCalcResponse maxRadius
         * @property {number|null} [duration] BallFireCalcResponse duration
         * @property {number|null} [heatRadiationFlux] BallFireCalcResponse heatRadiationFlux
         */

        /**
         * Constructs a new BallFireCalcResponse.
         * @memberof accsim
         * @classdesc Represents a BallFireCalcResponse.
         * @implements IBallFireCalcResponse
         * @constructor
         * @param {accsim.IBallFireCalcResponse=} [properties] Properties to set
         */
        function BallFireCalcResponse(properties) {
            this.xs = [];
            this.ys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BallFireCalcResponse smallInjuryRadius.
         * @member {number} smallInjuryRadius
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.smallInjuryRadius = 0;

        /**
         * BallFireCalcResponse deathRadius.
         * @member {number} deathRadius
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.deathRadius = 0;

        /**
         * BallFireCalcResponse bigInjuryRadius.
         * @member {number} bigInjuryRadius
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.bigInjuryRadius = 0;

        /**
         * BallFireCalcResponse xs.
         * @member {Array.<number>} xs
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.xs = $util.emptyArray;

        /**
         * BallFireCalcResponse ys.
         * @member {Array.<number>} ys
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.ys = $util.emptyArray;

        /**
         * BallFireCalcResponse maxRadius.
         * @member {number} maxRadius
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.maxRadius = 0;

        /**
         * BallFireCalcResponse duration.
         * @member {number} duration
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.duration = 0;

        /**
         * BallFireCalcResponse heatRadiationFlux.
         * @member {number} heatRadiationFlux
         * @memberof accsim.BallFireCalcResponse
         * @instance
         */
        BallFireCalcResponse.prototype.heatRadiationFlux = 0;

        /**
         * Creates a BallFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.BallFireCalcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.BallFireCalcResponse} BallFireCalcResponse
         */
        BallFireCalcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.BallFireCalcResponse)
                return object;
            let message = new $root.accsim.BallFireCalcResponse();
            if (object.smallInjuryRadius != null)
                message.smallInjuryRadius = Number(object.smallInjuryRadius);
            if (object.deathRadius != null)
                message.deathRadius = Number(object.deathRadius);
            if (object.bigInjuryRadius != null)
                message.bigInjuryRadius = Number(object.bigInjuryRadius);
            if (object.xs) {
                if (!Array.isArray(object.xs))
                    throw TypeError(".accsim.BallFireCalcResponse.xs: array expected");
                message.xs = [];
                for (let i = 0; i < object.xs.length; ++i)
                    message.xs[i] = Number(object.xs[i]);
            }
            if (object.ys) {
                if (!Array.isArray(object.ys))
                    throw TypeError(".accsim.BallFireCalcResponse.ys: array expected");
                message.ys = [];
                for (let i = 0; i < object.ys.length; ++i)
                    message.ys[i] = Number(object.ys[i]);
            }
            if (object.maxRadius != null)
                message.maxRadius = Number(object.maxRadius);
            if (object.duration != null)
                message.duration = Number(object.duration);
            if (object.heatRadiationFlux != null)
                message.heatRadiationFlux = Number(object.heatRadiationFlux);
            return message;
        };

        /**
         * Creates a plain object from a BallFireCalcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.BallFireCalcResponse
         * @static
         * @param {accsim.BallFireCalcResponse} message BallFireCalcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BallFireCalcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.xs = [];
                object.ys = [];
            }
            if (options.defaults) {
                object.smallInjuryRadius = 0;
                object.deathRadius = 0;
                object.bigInjuryRadius = 0;
                object.maxRadius = 0;
                object.duration = 0;
                object.heatRadiationFlux = 0;
            }
            if (message.smallInjuryRadius != null && message.hasOwnProperty("smallInjuryRadius"))
                object.smallInjuryRadius = options.json && !isFinite(message.smallInjuryRadius) ? String(message.smallInjuryRadius) : message.smallInjuryRadius;
            if (message.deathRadius != null && message.hasOwnProperty("deathRadius"))
                object.deathRadius = options.json && !isFinite(message.deathRadius) ? String(message.deathRadius) : message.deathRadius;
            if (message.bigInjuryRadius != null && message.hasOwnProperty("bigInjuryRadius"))
                object.bigInjuryRadius = options.json && !isFinite(message.bigInjuryRadius) ? String(message.bigInjuryRadius) : message.bigInjuryRadius;
            if (message.xs && message.xs.length) {
                object.xs = [];
                for (let j = 0; j < message.xs.length; ++j)
                    object.xs[j] = options.json && !isFinite(message.xs[j]) ? String(message.xs[j]) : message.xs[j];
            }
            if (message.ys && message.ys.length) {
                object.ys = [];
                for (let j = 0; j < message.ys.length; ++j)
                    object.ys[j] = options.json && !isFinite(message.ys[j]) ? String(message.ys[j]) : message.ys[j];
            }
            if (message.maxRadius != null && message.hasOwnProperty("maxRadius"))
                object.maxRadius = options.json && !isFinite(message.maxRadius) ? String(message.maxRadius) : message.maxRadius;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = options.json && !isFinite(message.duration) ? String(message.duration) : message.duration;
            if (message.heatRadiationFlux != null && message.hasOwnProperty("heatRadiationFlux"))
                object.heatRadiationFlux = options.json && !isFinite(message.heatRadiationFlux) ? String(message.heatRadiationFlux) : message.heatRadiationFlux;
            return object;
        };

        /**
         * Converts this BallFireCalcResponse to JSON.
         * @function toJSON
         * @memberof accsim.BallFireCalcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BallFireCalcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BallFireCalcResponse;
    })();

    accsim.FireExtinguishingDemandRequest = (function() {

        /**
         * Properties of a FireExtinguishingDemandRequest.
         * @memberof accsim
         * @interface IFireExtinguishingDemandRequest
         * @property {number|null} [liquidTankDiameter] FireExtinguishingDemandRequest liquidTankDiameter
         * @property {number|null} [supplyStrength] FireExtinguishingDemandRequest supplyStrength
         * @property {number|null} [supplyTime] FireExtinguishingDemandRequest supplyTime
         * @property {number|null} [mixRatio] FireExtinguishingDemandRequest mixRatio
         */

        /**
         * Constructs a new FireExtinguishingDemandRequest.
         * @memberof accsim
         * @classdesc Represents a FireExtinguishingDemandRequest.
         * @implements IFireExtinguishingDemandRequest
         * @constructor
         * @param {accsim.IFireExtinguishingDemandRequest=} [properties] Properties to set
         */
        function FireExtinguishingDemandRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireExtinguishingDemandRequest liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.FireExtinguishingDemandRequest
         * @instance
         */
        FireExtinguishingDemandRequest.prototype.liquidTankDiameter = 0;

        /**
         * FireExtinguishingDemandRequest supplyStrength.
         * @member {number} supplyStrength
         * @memberof accsim.FireExtinguishingDemandRequest
         * @instance
         */
        FireExtinguishingDemandRequest.prototype.supplyStrength = 0;

        /**
         * FireExtinguishingDemandRequest supplyTime.
         * @member {number} supplyTime
         * @memberof accsim.FireExtinguishingDemandRequest
         * @instance
         */
        FireExtinguishingDemandRequest.prototype.supplyTime = 0;

        /**
         * FireExtinguishingDemandRequest mixRatio.
         * @member {number} mixRatio
         * @memberof accsim.FireExtinguishingDemandRequest
         * @instance
         */
        FireExtinguishingDemandRequest.prototype.mixRatio = 0;

        /**
         * Creates a FireExtinguishingDemandRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.FireExtinguishingDemandRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.FireExtinguishingDemandRequest} FireExtinguishingDemandRequest
         */
        FireExtinguishingDemandRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.FireExtinguishingDemandRequest)
                return object;
            let message = new $root.accsim.FireExtinguishingDemandRequest();
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            if (object.supplyStrength != null)
                message.supplyStrength = Number(object.supplyStrength);
            if (object.supplyTime != null)
                message.supplyTime = Number(object.supplyTime);
            if (object.mixRatio != null)
                message.mixRatio = Number(object.mixRatio);
            return message;
        };

        /**
         * Creates a plain object from a FireExtinguishingDemandRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.FireExtinguishingDemandRequest
         * @static
         * @param {accsim.FireExtinguishingDemandRequest} message FireExtinguishingDemandRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireExtinguishingDemandRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.liquidTankDiameter = 0;
                object.supplyStrength = 0;
                object.supplyTime = 0;
                object.mixRatio = 0;
            }
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            if (message.supplyStrength != null && message.hasOwnProperty("supplyStrength"))
                object.supplyStrength = options.json && !isFinite(message.supplyStrength) ? String(message.supplyStrength) : message.supplyStrength;
            if (message.supplyTime != null && message.hasOwnProperty("supplyTime"))
                object.supplyTime = options.json && !isFinite(message.supplyTime) ? String(message.supplyTime) : message.supplyTime;
            if (message.mixRatio != null && message.hasOwnProperty("mixRatio"))
                object.mixRatio = options.json && !isFinite(message.mixRatio) ? String(message.mixRatio) : message.mixRatio;
            return object;
        };

        /**
         * Converts this FireExtinguishingDemandRequest to JSON.
         * @function toJSON
         * @memberof accsim.FireExtinguishingDemandRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireExtinguishingDemandRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireExtinguishingDemandRequest;
    })();

    accsim.FireExtinguishingDemandResponse = (function() {

        /**
         * Properties of a FireExtinguishingDemandResponse.
         * @memberof accsim
         * @interface IFireExtinguishingDemandResponse
         * @property {number|null} [fireExtinguishingFlowTheory] FireExtinguishingDemandResponse fireExtinguishingFlowTheory
         * @property {number|null} [fireExtinguishingFlowActual] FireExtinguishingDemandResponse fireExtinguishingFlowActual
         * @property {number|null} [primaryLiquidFlowTheory] FireExtinguishingDemandResponse primaryLiquidFlowTheory
         * @property {number|null} [primaryLiquidFlowActual] FireExtinguishingDemandResponse primaryLiquidFlowActual
         * @property {number|null} [primaryLiquidUsageTheory] FireExtinguishingDemandResponse primaryLiquidUsageTheory
         * @property {number|null} [primaryLiquidUsageActual] FireExtinguishingDemandResponse primaryLiquidUsageActual
         * @property {number|null} [fireExtinguishingUsageTheory] FireExtinguishingDemandResponse fireExtinguishingUsageTheory
         * @property {number|null} [fireExtinguishingUsageActual] FireExtinguishingDemandResponse fireExtinguishingUsageActual
         * @property {number|null} [configFireExtinguishingFlowTheory] FireExtinguishingDemandResponse configFireExtinguishingFlowTheory
         * @property {number|null} [configFireExtinguishingFlowActual] FireExtinguishingDemandResponse configFireExtinguishingFlowActual
         * @property {number|null} [configFireExtinguishingUsageTheory] FireExtinguishingDemandResponse configFireExtinguishingUsageTheory
         * @property {number|null} [configFireExtinguishingUsageActual] FireExtinguishingDemandResponse configFireExtinguishingUsageActual
         */

        /**
         * Constructs a new FireExtinguishingDemandResponse.
         * @memberof accsim
         * @classdesc Represents a FireExtinguishingDemandResponse.
         * @implements IFireExtinguishingDemandResponse
         * @constructor
         * @param {accsim.IFireExtinguishingDemandResponse=} [properties] Properties to set
         */
        function FireExtinguishingDemandResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireExtinguishingDemandResponse fireExtinguishingFlowTheory.
         * @member {number} fireExtinguishingFlowTheory
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.fireExtinguishingFlowTheory = 0;

        /**
         * FireExtinguishingDemandResponse fireExtinguishingFlowActual.
         * @member {number} fireExtinguishingFlowActual
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.fireExtinguishingFlowActual = 0;

        /**
         * FireExtinguishingDemandResponse primaryLiquidFlowTheory.
         * @member {number} primaryLiquidFlowTheory
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.primaryLiquidFlowTheory = 0;

        /**
         * FireExtinguishingDemandResponse primaryLiquidFlowActual.
         * @member {number} primaryLiquidFlowActual
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.primaryLiquidFlowActual = 0;

        /**
         * FireExtinguishingDemandResponse primaryLiquidUsageTheory.
         * @member {number} primaryLiquidUsageTheory
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.primaryLiquidUsageTheory = 0;

        /**
         * FireExtinguishingDemandResponse primaryLiquidUsageActual.
         * @member {number} primaryLiquidUsageActual
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.primaryLiquidUsageActual = 0;

        /**
         * FireExtinguishingDemandResponse fireExtinguishingUsageTheory.
         * @member {number} fireExtinguishingUsageTheory
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.fireExtinguishingUsageTheory = 0;

        /**
         * FireExtinguishingDemandResponse fireExtinguishingUsageActual.
         * @member {number} fireExtinguishingUsageActual
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.fireExtinguishingUsageActual = 0;

        /**
         * FireExtinguishingDemandResponse configFireExtinguishingFlowTheory.
         * @member {number} configFireExtinguishingFlowTheory
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.configFireExtinguishingFlowTheory = 0;

        /**
         * FireExtinguishingDemandResponse configFireExtinguishingFlowActual.
         * @member {number} configFireExtinguishingFlowActual
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.configFireExtinguishingFlowActual = 0;

        /**
         * FireExtinguishingDemandResponse configFireExtinguishingUsageTheory.
         * @member {number} configFireExtinguishingUsageTheory
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.configFireExtinguishingUsageTheory = 0;

        /**
         * FireExtinguishingDemandResponse configFireExtinguishingUsageActual.
         * @member {number} configFireExtinguishingUsageActual
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         */
        FireExtinguishingDemandResponse.prototype.configFireExtinguishingUsageActual = 0;

        /**
         * Creates a FireExtinguishingDemandResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.FireExtinguishingDemandResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.FireExtinguishingDemandResponse} FireExtinguishingDemandResponse
         */
        FireExtinguishingDemandResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.FireExtinguishingDemandResponse)
                return object;
            let message = new $root.accsim.FireExtinguishingDemandResponse();
            if (object.fireExtinguishingFlowTheory != null)
                message.fireExtinguishingFlowTheory = Number(object.fireExtinguishingFlowTheory);
            if (object.fireExtinguishingFlowActual != null)
                message.fireExtinguishingFlowActual = Number(object.fireExtinguishingFlowActual);
            if (object.primaryLiquidFlowTheory != null)
                message.primaryLiquidFlowTheory = Number(object.primaryLiquidFlowTheory);
            if (object.primaryLiquidFlowActual != null)
                message.primaryLiquidFlowActual = Number(object.primaryLiquidFlowActual);
            if (object.primaryLiquidUsageTheory != null)
                message.primaryLiquidUsageTheory = Number(object.primaryLiquidUsageTheory);
            if (object.primaryLiquidUsageActual != null)
                message.primaryLiquidUsageActual = Number(object.primaryLiquidUsageActual);
            if (object.fireExtinguishingUsageTheory != null)
                message.fireExtinguishingUsageTheory = Number(object.fireExtinguishingUsageTheory);
            if (object.fireExtinguishingUsageActual != null)
                message.fireExtinguishingUsageActual = Number(object.fireExtinguishingUsageActual);
            if (object.configFireExtinguishingFlowTheory != null)
                message.configFireExtinguishingFlowTheory = Number(object.configFireExtinguishingFlowTheory);
            if (object.configFireExtinguishingFlowActual != null)
                message.configFireExtinguishingFlowActual = Number(object.configFireExtinguishingFlowActual);
            if (object.configFireExtinguishingUsageTheory != null)
                message.configFireExtinguishingUsageTheory = Number(object.configFireExtinguishingUsageTheory);
            if (object.configFireExtinguishingUsageActual != null)
                message.configFireExtinguishingUsageActual = Number(object.configFireExtinguishingUsageActual);
            return message;
        };

        /**
         * Creates a plain object from a FireExtinguishingDemandResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.FireExtinguishingDemandResponse
         * @static
         * @param {accsim.FireExtinguishingDemandResponse} message FireExtinguishingDemandResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireExtinguishingDemandResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fireExtinguishingFlowTheory = 0;
                object.fireExtinguishingFlowActual = 0;
                object.primaryLiquidFlowTheory = 0;
                object.primaryLiquidFlowActual = 0;
                object.primaryLiquidUsageTheory = 0;
                object.primaryLiquidUsageActual = 0;
                object.fireExtinguishingUsageTheory = 0;
                object.fireExtinguishingUsageActual = 0;
                object.configFireExtinguishingFlowTheory = 0;
                object.configFireExtinguishingFlowActual = 0;
                object.configFireExtinguishingUsageTheory = 0;
                object.configFireExtinguishingUsageActual = 0;
            }
            if (message.fireExtinguishingFlowTheory != null && message.hasOwnProperty("fireExtinguishingFlowTheory"))
                object.fireExtinguishingFlowTheory = options.json && !isFinite(message.fireExtinguishingFlowTheory) ? String(message.fireExtinguishingFlowTheory) : message.fireExtinguishingFlowTheory;
            if (message.fireExtinguishingFlowActual != null && message.hasOwnProperty("fireExtinguishingFlowActual"))
                object.fireExtinguishingFlowActual = options.json && !isFinite(message.fireExtinguishingFlowActual) ? String(message.fireExtinguishingFlowActual) : message.fireExtinguishingFlowActual;
            if (message.primaryLiquidFlowTheory != null && message.hasOwnProperty("primaryLiquidFlowTheory"))
                object.primaryLiquidFlowTheory = options.json && !isFinite(message.primaryLiquidFlowTheory) ? String(message.primaryLiquidFlowTheory) : message.primaryLiquidFlowTheory;
            if (message.primaryLiquidFlowActual != null && message.hasOwnProperty("primaryLiquidFlowActual"))
                object.primaryLiquidFlowActual = options.json && !isFinite(message.primaryLiquidFlowActual) ? String(message.primaryLiquidFlowActual) : message.primaryLiquidFlowActual;
            if (message.primaryLiquidUsageTheory != null && message.hasOwnProperty("primaryLiquidUsageTheory"))
                object.primaryLiquidUsageTheory = options.json && !isFinite(message.primaryLiquidUsageTheory) ? String(message.primaryLiquidUsageTheory) : message.primaryLiquidUsageTheory;
            if (message.primaryLiquidUsageActual != null && message.hasOwnProperty("primaryLiquidUsageActual"))
                object.primaryLiquidUsageActual = options.json && !isFinite(message.primaryLiquidUsageActual) ? String(message.primaryLiquidUsageActual) : message.primaryLiquidUsageActual;
            if (message.fireExtinguishingUsageTheory != null && message.hasOwnProperty("fireExtinguishingUsageTheory"))
                object.fireExtinguishingUsageTheory = options.json && !isFinite(message.fireExtinguishingUsageTheory) ? String(message.fireExtinguishingUsageTheory) : message.fireExtinguishingUsageTheory;
            if (message.fireExtinguishingUsageActual != null && message.hasOwnProperty("fireExtinguishingUsageActual"))
                object.fireExtinguishingUsageActual = options.json && !isFinite(message.fireExtinguishingUsageActual) ? String(message.fireExtinguishingUsageActual) : message.fireExtinguishingUsageActual;
            if (message.configFireExtinguishingFlowTheory != null && message.hasOwnProperty("configFireExtinguishingFlowTheory"))
                object.configFireExtinguishingFlowTheory = options.json && !isFinite(message.configFireExtinguishingFlowTheory) ? String(message.configFireExtinguishingFlowTheory) : message.configFireExtinguishingFlowTheory;
            if (message.configFireExtinguishingFlowActual != null && message.hasOwnProperty("configFireExtinguishingFlowActual"))
                object.configFireExtinguishingFlowActual = options.json && !isFinite(message.configFireExtinguishingFlowActual) ? String(message.configFireExtinguishingFlowActual) : message.configFireExtinguishingFlowActual;
            if (message.configFireExtinguishingUsageTheory != null && message.hasOwnProperty("configFireExtinguishingUsageTheory"))
                object.configFireExtinguishingUsageTheory = options.json && !isFinite(message.configFireExtinguishingUsageTheory) ? String(message.configFireExtinguishingUsageTheory) : message.configFireExtinguishingUsageTheory;
            if (message.configFireExtinguishingUsageActual != null && message.hasOwnProperty("configFireExtinguishingUsageActual"))
                object.configFireExtinguishingUsageActual = options.json && !isFinite(message.configFireExtinguishingUsageActual) ? String(message.configFireExtinguishingUsageActual) : message.configFireExtinguishingUsageActual;
            return object;
        };

        /**
         * Converts this FireExtinguishingDemandResponse to JSON.
         * @function toJSON
         * @memberof accsim.FireExtinguishingDemandResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireExtinguishingDemandResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireExtinguishingDemandResponse;
    })();

    accsim.FireExtinguishingSaveRequest = (function() {

        /**
         * Properties of a FireExtinguishingSaveRequest.
         * @memberof accsim
         * @interface IFireExtinguishingSaveRequest
         * @property {number|null} [fireExtinguishingFlowTheory] FireExtinguishingSaveRequest fireExtinguishingFlowTheory
         * @property {number|null} [fireExtinguishingFlowActual] FireExtinguishingSaveRequest fireExtinguishingFlowActual
         * @property {number|null} [primaryLiquidFlowTheory] FireExtinguishingSaveRequest primaryLiquidFlowTheory
         * @property {number|null} [primaryLiquidFlowActual] FireExtinguishingSaveRequest primaryLiquidFlowActual
         * @property {number|null} [primaryLiquidUsageTheory] FireExtinguishingSaveRequest primaryLiquidUsageTheory
         * @property {number|null} [primaryLiquidUsageActual] FireExtinguishingSaveRequest primaryLiquidUsageActual
         * @property {number|null} [fireExtinguishingUsageTheory] FireExtinguishingSaveRequest fireExtinguishingUsageTheory
         * @property {number|null} [fireExtinguishingUsageActual] FireExtinguishingSaveRequest fireExtinguishingUsageActual
         * @property {number|null} [configFireExtinguishingFlowTheory] FireExtinguishingSaveRequest configFireExtinguishingFlowTheory
         * @property {number|null} [configFireExtinguishingFlowActual] FireExtinguishingSaveRequest configFireExtinguishingFlowActual
         * @property {number|null} [configFireExtinguishingUsageTheory] FireExtinguishingSaveRequest configFireExtinguishingUsageTheory
         * @property {number|null} [configFireExtinguishingUsageActual] FireExtinguishingSaveRequest configFireExtinguishingUsageActual
         * @property {number|null} [sceneId] FireExtinguishingSaveRequest sceneId
         * @property {number|null} [supplyStrength] FireExtinguishingSaveRequest supplyStrength
         * @property {number|null} [supplyTime] FireExtinguishingSaveRequest supplyTime
         * @property {number|null} [mixRatio] FireExtinguishingSaveRequest mixRatio
         * @property {number|null} [liquidTankDiameter] FireExtinguishingSaveRequest liquidTankDiameter
         */

        /**
         * Constructs a new FireExtinguishingSaveRequest.
         * @memberof accsim
         * @classdesc Represents a FireExtinguishingSaveRequest.
         * @implements IFireExtinguishingSaveRequest
         * @constructor
         * @param {accsim.IFireExtinguishingSaveRequest=} [properties] Properties to set
         */
        function FireExtinguishingSaveRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireExtinguishingSaveRequest fireExtinguishingFlowTheory.
         * @member {number} fireExtinguishingFlowTheory
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.fireExtinguishingFlowTheory = 0;

        /**
         * FireExtinguishingSaveRequest fireExtinguishingFlowActual.
         * @member {number} fireExtinguishingFlowActual
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.fireExtinguishingFlowActual = 0;

        /**
         * FireExtinguishingSaveRequest primaryLiquidFlowTheory.
         * @member {number} primaryLiquidFlowTheory
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.primaryLiquidFlowTheory = 0;

        /**
         * FireExtinguishingSaveRequest primaryLiquidFlowActual.
         * @member {number} primaryLiquidFlowActual
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.primaryLiquidFlowActual = 0;

        /**
         * FireExtinguishingSaveRequest primaryLiquidUsageTheory.
         * @member {number} primaryLiquidUsageTheory
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.primaryLiquidUsageTheory = 0;

        /**
         * FireExtinguishingSaveRequest primaryLiquidUsageActual.
         * @member {number} primaryLiquidUsageActual
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.primaryLiquidUsageActual = 0;

        /**
         * FireExtinguishingSaveRequest fireExtinguishingUsageTheory.
         * @member {number} fireExtinguishingUsageTheory
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.fireExtinguishingUsageTheory = 0;

        /**
         * FireExtinguishingSaveRequest fireExtinguishingUsageActual.
         * @member {number} fireExtinguishingUsageActual
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.fireExtinguishingUsageActual = 0;

        /**
         * FireExtinguishingSaveRequest configFireExtinguishingFlowTheory.
         * @member {number} configFireExtinguishingFlowTheory
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.configFireExtinguishingFlowTheory = 0;

        /**
         * FireExtinguishingSaveRequest configFireExtinguishingFlowActual.
         * @member {number} configFireExtinguishingFlowActual
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.configFireExtinguishingFlowActual = 0;

        /**
         * FireExtinguishingSaveRequest configFireExtinguishingUsageTheory.
         * @member {number} configFireExtinguishingUsageTheory
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.configFireExtinguishingUsageTheory = 0;

        /**
         * FireExtinguishingSaveRequest configFireExtinguishingUsageActual.
         * @member {number} configFireExtinguishingUsageActual
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.configFireExtinguishingUsageActual = 0;

        /**
         * FireExtinguishingSaveRequest sceneId.
         * @member {number} sceneId
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.sceneId = 0;

        /**
         * FireExtinguishingSaveRequest supplyStrength.
         * @member {number} supplyStrength
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.supplyStrength = 0;

        /**
         * FireExtinguishingSaveRequest supplyTime.
         * @member {number} supplyTime
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.supplyTime = 0;

        /**
         * FireExtinguishingSaveRequest mixRatio.
         * @member {number} mixRatio
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.mixRatio = 0;

        /**
         * FireExtinguishingSaveRequest liquidTankDiameter.
         * @member {number} liquidTankDiameter
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         */
        FireExtinguishingSaveRequest.prototype.liquidTankDiameter = 0;

        /**
         * Creates a FireExtinguishingSaveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.FireExtinguishingSaveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.FireExtinguishingSaveRequest} FireExtinguishingSaveRequest
         */
        FireExtinguishingSaveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.FireExtinguishingSaveRequest)
                return object;
            let message = new $root.accsim.FireExtinguishingSaveRequest();
            if (object.fireExtinguishingFlowTheory != null)
                message.fireExtinguishingFlowTheory = Number(object.fireExtinguishingFlowTheory);
            if (object.fireExtinguishingFlowActual != null)
                message.fireExtinguishingFlowActual = Number(object.fireExtinguishingFlowActual);
            if (object.primaryLiquidFlowTheory != null)
                message.primaryLiquidFlowTheory = Number(object.primaryLiquidFlowTheory);
            if (object.primaryLiquidFlowActual != null)
                message.primaryLiquidFlowActual = Number(object.primaryLiquidFlowActual);
            if (object.primaryLiquidUsageTheory != null)
                message.primaryLiquidUsageTheory = Number(object.primaryLiquidUsageTheory);
            if (object.primaryLiquidUsageActual != null)
                message.primaryLiquidUsageActual = Number(object.primaryLiquidUsageActual);
            if (object.fireExtinguishingUsageTheory != null)
                message.fireExtinguishingUsageTheory = Number(object.fireExtinguishingUsageTheory);
            if (object.fireExtinguishingUsageActual != null)
                message.fireExtinguishingUsageActual = Number(object.fireExtinguishingUsageActual);
            if (object.configFireExtinguishingFlowTheory != null)
                message.configFireExtinguishingFlowTheory = Number(object.configFireExtinguishingFlowTheory);
            if (object.configFireExtinguishingFlowActual != null)
                message.configFireExtinguishingFlowActual = Number(object.configFireExtinguishingFlowActual);
            if (object.configFireExtinguishingUsageTheory != null)
                message.configFireExtinguishingUsageTheory = Number(object.configFireExtinguishingUsageTheory);
            if (object.configFireExtinguishingUsageActual != null)
                message.configFireExtinguishingUsageActual = Number(object.configFireExtinguishingUsageActual);
            if (object.sceneId != null)
                message.sceneId = object.sceneId | 0;
            if (object.supplyStrength != null)
                message.supplyStrength = Number(object.supplyStrength);
            if (object.supplyTime != null)
                message.supplyTime = Number(object.supplyTime);
            if (object.mixRatio != null)
                message.mixRatio = Number(object.mixRatio);
            if (object.liquidTankDiameter != null)
                message.liquidTankDiameter = Number(object.liquidTankDiameter);
            return message;
        };

        /**
         * Creates a plain object from a FireExtinguishingSaveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.FireExtinguishingSaveRequest
         * @static
         * @param {accsim.FireExtinguishingSaveRequest} message FireExtinguishingSaveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireExtinguishingSaveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fireExtinguishingFlowTheory = 0;
                object.fireExtinguishingFlowActual = 0;
                object.primaryLiquidFlowTheory = 0;
                object.primaryLiquidFlowActual = 0;
                object.primaryLiquidUsageTheory = 0;
                object.primaryLiquidUsageActual = 0;
                object.fireExtinguishingUsageTheory = 0;
                object.fireExtinguishingUsageActual = 0;
                object.configFireExtinguishingFlowTheory = 0;
                object.configFireExtinguishingFlowActual = 0;
                object.configFireExtinguishingUsageTheory = 0;
                object.configFireExtinguishingUsageActual = 0;
                object.sceneId = 0;
                object.supplyStrength = 0;
                object.supplyTime = 0;
                object.mixRatio = 0;
                object.liquidTankDiameter = 0;
            }
            if (message.fireExtinguishingFlowTheory != null && message.hasOwnProperty("fireExtinguishingFlowTheory"))
                object.fireExtinguishingFlowTheory = options.json && !isFinite(message.fireExtinguishingFlowTheory) ? String(message.fireExtinguishingFlowTheory) : message.fireExtinguishingFlowTheory;
            if (message.fireExtinguishingFlowActual != null && message.hasOwnProperty("fireExtinguishingFlowActual"))
                object.fireExtinguishingFlowActual = options.json && !isFinite(message.fireExtinguishingFlowActual) ? String(message.fireExtinguishingFlowActual) : message.fireExtinguishingFlowActual;
            if (message.primaryLiquidFlowTheory != null && message.hasOwnProperty("primaryLiquidFlowTheory"))
                object.primaryLiquidFlowTheory = options.json && !isFinite(message.primaryLiquidFlowTheory) ? String(message.primaryLiquidFlowTheory) : message.primaryLiquidFlowTheory;
            if (message.primaryLiquidFlowActual != null && message.hasOwnProperty("primaryLiquidFlowActual"))
                object.primaryLiquidFlowActual = options.json && !isFinite(message.primaryLiquidFlowActual) ? String(message.primaryLiquidFlowActual) : message.primaryLiquidFlowActual;
            if (message.primaryLiquidUsageTheory != null && message.hasOwnProperty("primaryLiquidUsageTheory"))
                object.primaryLiquidUsageTheory = options.json && !isFinite(message.primaryLiquidUsageTheory) ? String(message.primaryLiquidUsageTheory) : message.primaryLiquidUsageTheory;
            if (message.primaryLiquidUsageActual != null && message.hasOwnProperty("primaryLiquidUsageActual"))
                object.primaryLiquidUsageActual = options.json && !isFinite(message.primaryLiquidUsageActual) ? String(message.primaryLiquidUsageActual) : message.primaryLiquidUsageActual;
            if (message.fireExtinguishingUsageTheory != null && message.hasOwnProperty("fireExtinguishingUsageTheory"))
                object.fireExtinguishingUsageTheory = options.json && !isFinite(message.fireExtinguishingUsageTheory) ? String(message.fireExtinguishingUsageTheory) : message.fireExtinguishingUsageTheory;
            if (message.fireExtinguishingUsageActual != null && message.hasOwnProperty("fireExtinguishingUsageActual"))
                object.fireExtinguishingUsageActual = options.json && !isFinite(message.fireExtinguishingUsageActual) ? String(message.fireExtinguishingUsageActual) : message.fireExtinguishingUsageActual;
            if (message.configFireExtinguishingFlowTheory != null && message.hasOwnProperty("configFireExtinguishingFlowTheory"))
                object.configFireExtinguishingFlowTheory = options.json && !isFinite(message.configFireExtinguishingFlowTheory) ? String(message.configFireExtinguishingFlowTheory) : message.configFireExtinguishingFlowTheory;
            if (message.configFireExtinguishingFlowActual != null && message.hasOwnProperty("configFireExtinguishingFlowActual"))
                object.configFireExtinguishingFlowActual = options.json && !isFinite(message.configFireExtinguishingFlowActual) ? String(message.configFireExtinguishingFlowActual) : message.configFireExtinguishingFlowActual;
            if (message.configFireExtinguishingUsageTheory != null && message.hasOwnProperty("configFireExtinguishingUsageTheory"))
                object.configFireExtinguishingUsageTheory = options.json && !isFinite(message.configFireExtinguishingUsageTheory) ? String(message.configFireExtinguishingUsageTheory) : message.configFireExtinguishingUsageTheory;
            if (message.configFireExtinguishingUsageActual != null && message.hasOwnProperty("configFireExtinguishingUsageActual"))
                object.configFireExtinguishingUsageActual = options.json && !isFinite(message.configFireExtinguishingUsageActual) ? String(message.configFireExtinguishingUsageActual) : message.configFireExtinguishingUsageActual;
            if (message.sceneId != null && message.hasOwnProperty("sceneId"))
                object.sceneId = message.sceneId;
            if (message.supplyStrength != null && message.hasOwnProperty("supplyStrength"))
                object.supplyStrength = options.json && !isFinite(message.supplyStrength) ? String(message.supplyStrength) : message.supplyStrength;
            if (message.supplyTime != null && message.hasOwnProperty("supplyTime"))
                object.supplyTime = options.json && !isFinite(message.supplyTime) ? String(message.supplyTime) : message.supplyTime;
            if (message.mixRatio != null && message.hasOwnProperty("mixRatio"))
                object.mixRatio = options.json && !isFinite(message.mixRatio) ? String(message.mixRatio) : message.mixRatio;
            if (message.liquidTankDiameter != null && message.hasOwnProperty("liquidTankDiameter"))
                object.liquidTankDiameter = options.json && !isFinite(message.liquidTankDiameter) ? String(message.liquidTankDiameter) : message.liquidTankDiameter;
            return object;
        };

        /**
         * Converts this FireExtinguishingSaveRequest to JSON.
         * @function toJSON
         * @memberof accsim.FireExtinguishingSaveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireExtinguishingSaveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireExtinguishingSaveRequest;
    })();

    accsim.FireExtinguishingSaveResponse = (function() {

        /**
         * Properties of a FireExtinguishingSaveResponse.
         * @memberof accsim
         * @interface IFireExtinguishingSaveResponse
         */

        /**
         * Constructs a new FireExtinguishingSaveResponse.
         * @memberof accsim
         * @classdesc Represents a FireExtinguishingSaveResponse.
         * @implements IFireExtinguishingSaveResponse
         * @constructor
         * @param {accsim.IFireExtinguishingSaveResponse=} [properties] Properties to set
         */
        function FireExtinguishingSaveResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a FireExtinguishingSaveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.FireExtinguishingSaveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.FireExtinguishingSaveResponse} FireExtinguishingSaveResponse
         */
        FireExtinguishingSaveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.FireExtinguishingSaveResponse)
                return object;
            return new $root.accsim.FireExtinguishingSaveResponse();
        };

        /**
         * Creates a plain object from a FireExtinguishingSaveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.FireExtinguishingSaveResponse
         * @static
         * @param {accsim.FireExtinguishingSaveResponse} message FireExtinguishingSaveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireExtinguishingSaveResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FireExtinguishingSaveResponse to JSON.
         * @function toJSON
         * @memberof accsim.FireExtinguishingSaveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireExtinguishingSaveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireExtinguishingSaveResponse;
    })();

    accsim.CoolingWaterDemandRequest = (function() {

        /**
         * Properties of a CoolingWaterDemandRequest.
         * @memberof accsim
         * @interface ICoolingWaterDemandRequest
         * @property {number|null} [num] CoolingWaterDemandRequest num
         * @property {number|null} [nearNum] CoolingWaterDemandRequest nearNum
         * @property {number|null} [diameter] CoolingWaterDemandRequest diameter
         * @property {number|null} [nearDiameter] CoolingWaterDemandRequest nearDiameter
         * @property {number|null} [coolingTime] CoolingWaterDemandRequest coolingTime
         * @property {number|null} [nearCoolingTime] CoolingWaterDemandRequest nearCoolingTime
         * @property {number|null} [supplyStrength] CoolingWaterDemandRequest supplyStrength
         * @property {number|null} [nearSupplyStrength] CoolingWaterDemandRequest nearSupplyStrength
         * @property {number|null} [singleFlow] CoolingWaterDemandRequest singleFlow
         */

        /**
         * Constructs a new CoolingWaterDemandRequest.
         * @memberof accsim
         * @classdesc Represents a CoolingWaterDemandRequest.
         * @implements ICoolingWaterDemandRequest
         * @constructor
         * @param {accsim.ICoolingWaterDemandRequest=} [properties] Properties to set
         */
        function CoolingWaterDemandRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CoolingWaterDemandRequest num.
         * @member {number} num
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.num = 0;

        /**
         * CoolingWaterDemandRequest nearNum.
         * @member {number} nearNum
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.nearNum = 0;

        /**
         * CoolingWaterDemandRequest diameter.
         * @member {number} diameter
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.diameter = 0;

        /**
         * CoolingWaterDemandRequest nearDiameter.
         * @member {number} nearDiameter
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.nearDiameter = 0;

        /**
         * CoolingWaterDemandRequest coolingTime.
         * @member {number} coolingTime
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.coolingTime = 0;

        /**
         * CoolingWaterDemandRequest nearCoolingTime.
         * @member {number} nearCoolingTime
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.nearCoolingTime = 0;

        /**
         * CoolingWaterDemandRequest supplyStrength.
         * @member {number} supplyStrength
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.supplyStrength = 0;

        /**
         * CoolingWaterDemandRequest nearSupplyStrength.
         * @member {number} nearSupplyStrength
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.nearSupplyStrength = 0;

        /**
         * CoolingWaterDemandRequest singleFlow.
         * @member {number} singleFlow
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         */
        CoolingWaterDemandRequest.prototype.singleFlow = 0;

        /**
         * Creates a CoolingWaterDemandRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.CoolingWaterDemandRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.CoolingWaterDemandRequest} CoolingWaterDemandRequest
         */
        CoolingWaterDemandRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.CoolingWaterDemandRequest)
                return object;
            let message = new $root.accsim.CoolingWaterDemandRequest();
            if (object.num != null)
                message.num = object.num | 0;
            if (object.nearNum != null)
                message.nearNum = object.nearNum | 0;
            if (object.diameter != null)
                message.diameter = Number(object.diameter);
            if (object.nearDiameter != null)
                message.nearDiameter = Number(object.nearDiameter);
            if (object.coolingTime != null)
                message.coolingTime = object.coolingTime | 0;
            if (object.nearCoolingTime != null)
                message.nearCoolingTime = object.nearCoolingTime | 0;
            if (object.supplyStrength != null)
                message.supplyStrength = Number(object.supplyStrength);
            if (object.nearSupplyStrength != null)
                message.nearSupplyStrength = Number(object.nearSupplyStrength);
            if (object.singleFlow != null)
                message.singleFlow = Number(object.singleFlow);
            return message;
        };

        /**
         * Creates a plain object from a CoolingWaterDemandRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.CoolingWaterDemandRequest
         * @static
         * @param {accsim.CoolingWaterDemandRequest} message CoolingWaterDemandRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CoolingWaterDemandRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.num = 0;
                object.nearNum = 0;
                object.diameter = 0;
                object.nearDiameter = 0;
                object.coolingTime = 0;
                object.nearCoolingTime = 0;
                object.supplyStrength = 0;
                object.nearSupplyStrength = 0;
                object.singleFlow = 0;
            }
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.nearNum != null && message.hasOwnProperty("nearNum"))
                object.nearNum = message.nearNum;
            if (message.diameter != null && message.hasOwnProperty("diameter"))
                object.diameter = options.json && !isFinite(message.diameter) ? String(message.diameter) : message.diameter;
            if (message.nearDiameter != null && message.hasOwnProperty("nearDiameter"))
                object.nearDiameter = options.json && !isFinite(message.nearDiameter) ? String(message.nearDiameter) : message.nearDiameter;
            if (message.coolingTime != null && message.hasOwnProperty("coolingTime"))
                object.coolingTime = message.coolingTime;
            if (message.nearCoolingTime != null && message.hasOwnProperty("nearCoolingTime"))
                object.nearCoolingTime = message.nearCoolingTime;
            if (message.supplyStrength != null && message.hasOwnProperty("supplyStrength"))
                object.supplyStrength = options.json && !isFinite(message.supplyStrength) ? String(message.supplyStrength) : message.supplyStrength;
            if (message.nearSupplyStrength != null && message.hasOwnProperty("nearSupplyStrength"))
                object.nearSupplyStrength = options.json && !isFinite(message.nearSupplyStrength) ? String(message.nearSupplyStrength) : message.nearSupplyStrength;
            if (message.singleFlow != null && message.hasOwnProperty("singleFlow"))
                object.singleFlow = options.json && !isFinite(message.singleFlow) ? String(message.singleFlow) : message.singleFlow;
            return object;
        };

        /**
         * Converts this CoolingWaterDemandRequest to JSON.
         * @function toJSON
         * @memberof accsim.CoolingWaterDemandRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoolingWaterDemandRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoolingWaterDemandRequest;
    })();

    accsim.CoolingWaterDemandResponse = (function() {

        /**
         * Properties of a CoolingWaterDemandResponse.
         * @memberof accsim
         * @interface ICoolingWaterDemandResponse
         * @property {number|null} [flowTheory] CoolingWaterDemandResponse flowTheory
         * @property {number|null} [flowActual] CoolingWaterDemandResponse flowActual
         * @property {number|null} [nearFlowTheory] CoolingWaterDemandResponse nearFlowTheory
         * @property {number|null} [nearFlowActual] CoolingWaterDemandResponse nearFlowActual
         * @property {number|null} [usageTheory] CoolingWaterDemandResponse usageTheory
         * @property {number|null} [usageActual] CoolingWaterDemandResponse usageActual
         * @property {number|null} [nearUsageTheory] CoolingWaterDemandResponse nearUsageTheory
         * @property {number|null} [nearUsageActual] CoolingWaterDemandResponse nearUsageActual
         * @property {number|null} [totalUsageTheory] CoolingWaterDemandResponse totalUsageTheory
         * @property {number|null} [totalUsageActual] CoolingWaterDemandResponse totalUsageActual
         */

        /**
         * Constructs a new CoolingWaterDemandResponse.
         * @memberof accsim
         * @classdesc Represents a CoolingWaterDemandResponse.
         * @implements ICoolingWaterDemandResponse
         * @constructor
         * @param {accsim.ICoolingWaterDemandResponse=} [properties] Properties to set
         */
        function CoolingWaterDemandResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CoolingWaterDemandResponse flowTheory.
         * @member {number} flowTheory
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.flowTheory = 0;

        /**
         * CoolingWaterDemandResponse flowActual.
         * @member {number} flowActual
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.flowActual = 0;

        /**
         * CoolingWaterDemandResponse nearFlowTheory.
         * @member {number} nearFlowTheory
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.nearFlowTheory = 0;

        /**
         * CoolingWaterDemandResponse nearFlowActual.
         * @member {number} nearFlowActual
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.nearFlowActual = 0;

        /**
         * CoolingWaterDemandResponse usageTheory.
         * @member {number} usageTheory
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.usageTheory = 0;

        /**
         * CoolingWaterDemandResponse usageActual.
         * @member {number} usageActual
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.usageActual = 0;

        /**
         * CoolingWaterDemandResponse nearUsageTheory.
         * @member {number} nearUsageTheory
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.nearUsageTheory = 0;

        /**
         * CoolingWaterDemandResponse nearUsageActual.
         * @member {number} nearUsageActual
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.nearUsageActual = 0;

        /**
         * CoolingWaterDemandResponse totalUsageTheory.
         * @member {number} totalUsageTheory
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.totalUsageTheory = 0;

        /**
         * CoolingWaterDemandResponse totalUsageActual.
         * @member {number} totalUsageActual
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         */
        CoolingWaterDemandResponse.prototype.totalUsageActual = 0;

        /**
         * Creates a CoolingWaterDemandResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.CoolingWaterDemandResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.CoolingWaterDemandResponse} CoolingWaterDemandResponse
         */
        CoolingWaterDemandResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.CoolingWaterDemandResponse)
                return object;
            let message = new $root.accsim.CoolingWaterDemandResponse();
            if (object.flowTheory != null)
                message.flowTheory = Number(object.flowTheory);
            if (object.flowActual != null)
                message.flowActual = Number(object.flowActual);
            if (object.nearFlowTheory != null)
                message.nearFlowTheory = Number(object.nearFlowTheory);
            if (object.nearFlowActual != null)
                message.nearFlowActual = Number(object.nearFlowActual);
            if (object.usageTheory != null)
                message.usageTheory = Number(object.usageTheory);
            if (object.usageActual != null)
                message.usageActual = Number(object.usageActual);
            if (object.nearUsageTheory != null)
                message.nearUsageTheory = Number(object.nearUsageTheory);
            if (object.nearUsageActual != null)
                message.nearUsageActual = Number(object.nearUsageActual);
            if (object.totalUsageTheory != null)
                message.totalUsageTheory = Number(object.totalUsageTheory);
            if (object.totalUsageActual != null)
                message.totalUsageActual = Number(object.totalUsageActual);
            return message;
        };

        /**
         * Creates a plain object from a CoolingWaterDemandResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.CoolingWaterDemandResponse
         * @static
         * @param {accsim.CoolingWaterDemandResponse} message CoolingWaterDemandResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CoolingWaterDemandResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.flowTheory = 0;
                object.flowActual = 0;
                object.nearFlowTheory = 0;
                object.nearFlowActual = 0;
                object.usageTheory = 0;
                object.usageActual = 0;
                object.nearUsageTheory = 0;
                object.nearUsageActual = 0;
                object.totalUsageTheory = 0;
                object.totalUsageActual = 0;
            }
            if (message.flowTheory != null && message.hasOwnProperty("flowTheory"))
                object.flowTheory = options.json && !isFinite(message.flowTheory) ? String(message.flowTheory) : message.flowTheory;
            if (message.flowActual != null && message.hasOwnProperty("flowActual"))
                object.flowActual = options.json && !isFinite(message.flowActual) ? String(message.flowActual) : message.flowActual;
            if (message.nearFlowTheory != null && message.hasOwnProperty("nearFlowTheory"))
                object.nearFlowTheory = options.json && !isFinite(message.nearFlowTheory) ? String(message.nearFlowTheory) : message.nearFlowTheory;
            if (message.nearFlowActual != null && message.hasOwnProperty("nearFlowActual"))
                object.nearFlowActual = options.json && !isFinite(message.nearFlowActual) ? String(message.nearFlowActual) : message.nearFlowActual;
            if (message.usageTheory != null && message.hasOwnProperty("usageTheory"))
                object.usageTheory = options.json && !isFinite(message.usageTheory) ? String(message.usageTheory) : message.usageTheory;
            if (message.usageActual != null && message.hasOwnProperty("usageActual"))
                object.usageActual = options.json && !isFinite(message.usageActual) ? String(message.usageActual) : message.usageActual;
            if (message.nearUsageTheory != null && message.hasOwnProperty("nearUsageTheory"))
                object.nearUsageTheory = options.json && !isFinite(message.nearUsageTheory) ? String(message.nearUsageTheory) : message.nearUsageTheory;
            if (message.nearUsageActual != null && message.hasOwnProperty("nearUsageActual"))
                object.nearUsageActual = options.json && !isFinite(message.nearUsageActual) ? String(message.nearUsageActual) : message.nearUsageActual;
            if (message.totalUsageTheory != null && message.hasOwnProperty("totalUsageTheory"))
                object.totalUsageTheory = options.json && !isFinite(message.totalUsageTheory) ? String(message.totalUsageTheory) : message.totalUsageTheory;
            if (message.totalUsageActual != null && message.hasOwnProperty("totalUsageActual"))
                object.totalUsageActual = options.json && !isFinite(message.totalUsageActual) ? String(message.totalUsageActual) : message.totalUsageActual;
            return object;
        };

        /**
         * Converts this CoolingWaterDemandResponse to JSON.
         * @function toJSON
         * @memberof accsim.CoolingWaterDemandResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoolingWaterDemandResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoolingWaterDemandResponse;
    })();

    accsim.CoolingWaterSaveRequest = (function() {

        /**
         * Properties of a CoolingWaterSaveRequest.
         * @memberof accsim
         * @interface ICoolingWaterSaveRequest
         * @property {number|null} [flowTheory] CoolingWaterSaveRequest flowTheory
         * @property {number|null} [flowActual] CoolingWaterSaveRequest flowActual
         * @property {number|null} [nearFlowTheory] CoolingWaterSaveRequest nearFlowTheory
         * @property {number|null} [nearFlowActual] CoolingWaterSaveRequest nearFlowActual
         * @property {number|null} [usageTheory] CoolingWaterSaveRequest usageTheory
         * @property {number|null} [usageActual] CoolingWaterSaveRequest usageActual
         * @property {number|null} [nearUsageTheory] CoolingWaterSaveRequest nearUsageTheory
         * @property {number|null} [nearUsageActual] CoolingWaterSaveRequest nearUsageActual
         * @property {number|null} [totalUsageTheory] CoolingWaterSaveRequest totalUsageTheory
         * @property {number|null} [totalUsageActual] CoolingWaterSaveRequest totalUsageActual
         * @property {number|null} [sceneId] CoolingWaterSaveRequest sceneId
         * @property {number|null} [num] CoolingWaterSaveRequest num
         * @property {number|null} [nearNum] CoolingWaterSaveRequest nearNum
         * @property {number|null} [diameter] CoolingWaterSaveRequest diameter
         * @property {number|null} [nearDiameter] CoolingWaterSaveRequest nearDiameter
         * @property {number|null} [coolingTime] CoolingWaterSaveRequest coolingTime
         * @property {number|null} [nearCoolingTime] CoolingWaterSaveRequest nearCoolingTime
         * @property {number|null} [supplyStrength] CoolingWaterSaveRequest supplyStrength
         * @property {number|null} [nearSupplyStrength] CoolingWaterSaveRequest nearSupplyStrength
         * @property {number|null} [singleFlow] CoolingWaterSaveRequest singleFlow
         */

        /**
         * Constructs a new CoolingWaterSaveRequest.
         * @memberof accsim
         * @classdesc Represents a CoolingWaterSaveRequest.
         * @implements ICoolingWaterSaveRequest
         * @constructor
         * @param {accsim.ICoolingWaterSaveRequest=} [properties] Properties to set
         */
        function CoolingWaterSaveRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CoolingWaterSaveRequest flowTheory.
         * @member {number} flowTheory
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.flowTheory = 0;

        /**
         * CoolingWaterSaveRequest flowActual.
         * @member {number} flowActual
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.flowActual = 0;

        /**
         * CoolingWaterSaveRequest nearFlowTheory.
         * @member {number} nearFlowTheory
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearFlowTheory = 0;

        /**
         * CoolingWaterSaveRequest nearFlowActual.
         * @member {number} nearFlowActual
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearFlowActual = 0;

        /**
         * CoolingWaterSaveRequest usageTheory.
         * @member {number} usageTheory
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.usageTheory = 0;

        /**
         * CoolingWaterSaveRequest usageActual.
         * @member {number} usageActual
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.usageActual = 0;

        /**
         * CoolingWaterSaveRequest nearUsageTheory.
         * @member {number} nearUsageTheory
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearUsageTheory = 0;

        /**
         * CoolingWaterSaveRequest nearUsageActual.
         * @member {number} nearUsageActual
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearUsageActual = 0;

        /**
         * CoolingWaterSaveRequest totalUsageTheory.
         * @member {number} totalUsageTheory
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.totalUsageTheory = 0;

        /**
         * CoolingWaterSaveRequest totalUsageActual.
         * @member {number} totalUsageActual
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.totalUsageActual = 0;

        /**
         * CoolingWaterSaveRequest sceneId.
         * @member {number} sceneId
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.sceneId = 0;

        /**
         * CoolingWaterSaveRequest num.
         * @member {number} num
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.num = 0;

        /**
         * CoolingWaterSaveRequest nearNum.
         * @member {number} nearNum
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearNum = 0;

        /**
         * CoolingWaterSaveRequest diameter.
         * @member {number} diameter
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.diameter = 0;

        /**
         * CoolingWaterSaveRequest nearDiameter.
         * @member {number} nearDiameter
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearDiameter = 0;

        /**
         * CoolingWaterSaveRequest coolingTime.
         * @member {number} coolingTime
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.coolingTime = 0;

        /**
         * CoolingWaterSaveRequest nearCoolingTime.
         * @member {number} nearCoolingTime
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearCoolingTime = 0;

        /**
         * CoolingWaterSaveRequest supplyStrength.
         * @member {number} supplyStrength
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.supplyStrength = 0;

        /**
         * CoolingWaterSaveRequest nearSupplyStrength.
         * @member {number} nearSupplyStrength
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.nearSupplyStrength = 0;

        /**
         * CoolingWaterSaveRequest singleFlow.
         * @member {number} singleFlow
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         */
        CoolingWaterSaveRequest.prototype.singleFlow = 0;

        /**
         * Creates a CoolingWaterSaveRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.CoolingWaterSaveRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.CoolingWaterSaveRequest} CoolingWaterSaveRequest
         */
        CoolingWaterSaveRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.CoolingWaterSaveRequest)
                return object;
            let message = new $root.accsim.CoolingWaterSaveRequest();
            if (object.flowTheory != null)
                message.flowTheory = Number(object.flowTheory);
            if (object.flowActual != null)
                message.flowActual = Number(object.flowActual);
            if (object.nearFlowTheory != null)
                message.nearFlowTheory = Number(object.nearFlowTheory);
            if (object.nearFlowActual != null)
                message.nearFlowActual = Number(object.nearFlowActual);
            if (object.usageTheory != null)
                message.usageTheory = Number(object.usageTheory);
            if (object.usageActual != null)
                message.usageActual = Number(object.usageActual);
            if (object.nearUsageTheory != null)
                message.nearUsageTheory = Number(object.nearUsageTheory);
            if (object.nearUsageActual != null)
                message.nearUsageActual = Number(object.nearUsageActual);
            if (object.totalUsageTheory != null)
                message.totalUsageTheory = Number(object.totalUsageTheory);
            if (object.totalUsageActual != null)
                message.totalUsageActual = Number(object.totalUsageActual);
            if (object.sceneId != null)
                message.sceneId = object.sceneId | 0;
            if (object.num != null)
                message.num = object.num | 0;
            if (object.nearNum != null)
                message.nearNum = object.nearNum | 0;
            if (object.diameter != null)
                message.diameter = Number(object.diameter);
            if (object.nearDiameter != null)
                message.nearDiameter = Number(object.nearDiameter);
            if (object.coolingTime != null)
                message.coolingTime = object.coolingTime | 0;
            if (object.nearCoolingTime != null)
                message.nearCoolingTime = object.nearCoolingTime | 0;
            if (object.supplyStrength != null)
                message.supplyStrength = Number(object.supplyStrength);
            if (object.nearSupplyStrength != null)
                message.nearSupplyStrength = Number(object.nearSupplyStrength);
            if (object.singleFlow != null)
                message.singleFlow = Number(object.singleFlow);
            return message;
        };

        /**
         * Creates a plain object from a CoolingWaterSaveRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.CoolingWaterSaveRequest
         * @static
         * @param {accsim.CoolingWaterSaveRequest} message CoolingWaterSaveRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CoolingWaterSaveRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.flowTheory = 0;
                object.flowActual = 0;
                object.nearFlowTheory = 0;
                object.nearFlowActual = 0;
                object.usageTheory = 0;
                object.usageActual = 0;
                object.nearUsageTheory = 0;
                object.nearUsageActual = 0;
                object.totalUsageTheory = 0;
                object.totalUsageActual = 0;
                object.sceneId = 0;
                object.num = 0;
                object.nearNum = 0;
                object.diameter = 0;
                object.nearDiameter = 0;
                object.coolingTime = 0;
                object.nearCoolingTime = 0;
                object.supplyStrength = 0;
                object.nearSupplyStrength = 0;
                object.singleFlow = 0;
            }
            if (message.flowTheory != null && message.hasOwnProperty("flowTheory"))
                object.flowTheory = options.json && !isFinite(message.flowTheory) ? String(message.flowTheory) : message.flowTheory;
            if (message.flowActual != null && message.hasOwnProperty("flowActual"))
                object.flowActual = options.json && !isFinite(message.flowActual) ? String(message.flowActual) : message.flowActual;
            if (message.nearFlowTheory != null && message.hasOwnProperty("nearFlowTheory"))
                object.nearFlowTheory = options.json && !isFinite(message.nearFlowTheory) ? String(message.nearFlowTheory) : message.nearFlowTheory;
            if (message.nearFlowActual != null && message.hasOwnProperty("nearFlowActual"))
                object.nearFlowActual = options.json && !isFinite(message.nearFlowActual) ? String(message.nearFlowActual) : message.nearFlowActual;
            if (message.usageTheory != null && message.hasOwnProperty("usageTheory"))
                object.usageTheory = options.json && !isFinite(message.usageTheory) ? String(message.usageTheory) : message.usageTheory;
            if (message.usageActual != null && message.hasOwnProperty("usageActual"))
                object.usageActual = options.json && !isFinite(message.usageActual) ? String(message.usageActual) : message.usageActual;
            if (message.nearUsageTheory != null && message.hasOwnProperty("nearUsageTheory"))
                object.nearUsageTheory = options.json && !isFinite(message.nearUsageTheory) ? String(message.nearUsageTheory) : message.nearUsageTheory;
            if (message.nearUsageActual != null && message.hasOwnProperty("nearUsageActual"))
                object.nearUsageActual = options.json && !isFinite(message.nearUsageActual) ? String(message.nearUsageActual) : message.nearUsageActual;
            if (message.totalUsageTheory != null && message.hasOwnProperty("totalUsageTheory"))
                object.totalUsageTheory = options.json && !isFinite(message.totalUsageTheory) ? String(message.totalUsageTheory) : message.totalUsageTheory;
            if (message.totalUsageActual != null && message.hasOwnProperty("totalUsageActual"))
                object.totalUsageActual = options.json && !isFinite(message.totalUsageActual) ? String(message.totalUsageActual) : message.totalUsageActual;
            if (message.sceneId != null && message.hasOwnProperty("sceneId"))
                object.sceneId = message.sceneId;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.nearNum != null && message.hasOwnProperty("nearNum"))
                object.nearNum = message.nearNum;
            if (message.diameter != null && message.hasOwnProperty("diameter"))
                object.diameter = options.json && !isFinite(message.diameter) ? String(message.diameter) : message.diameter;
            if (message.nearDiameter != null && message.hasOwnProperty("nearDiameter"))
                object.nearDiameter = options.json && !isFinite(message.nearDiameter) ? String(message.nearDiameter) : message.nearDiameter;
            if (message.coolingTime != null && message.hasOwnProperty("coolingTime"))
                object.coolingTime = message.coolingTime;
            if (message.nearCoolingTime != null && message.hasOwnProperty("nearCoolingTime"))
                object.nearCoolingTime = message.nearCoolingTime;
            if (message.supplyStrength != null && message.hasOwnProperty("supplyStrength"))
                object.supplyStrength = options.json && !isFinite(message.supplyStrength) ? String(message.supplyStrength) : message.supplyStrength;
            if (message.nearSupplyStrength != null && message.hasOwnProperty("nearSupplyStrength"))
                object.nearSupplyStrength = options.json && !isFinite(message.nearSupplyStrength) ? String(message.nearSupplyStrength) : message.nearSupplyStrength;
            if (message.singleFlow != null && message.hasOwnProperty("singleFlow"))
                object.singleFlow = options.json && !isFinite(message.singleFlow) ? String(message.singleFlow) : message.singleFlow;
            return object;
        };

        /**
         * Converts this CoolingWaterSaveRequest to JSON.
         * @function toJSON
         * @memberof accsim.CoolingWaterSaveRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoolingWaterSaveRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoolingWaterSaveRequest;
    })();

    accsim.CoolingWaterSaveResponse = (function() {

        /**
         * Properties of a CoolingWaterSaveResponse.
         * @memberof accsim
         * @interface ICoolingWaterSaveResponse
         */

        /**
         * Constructs a new CoolingWaterSaveResponse.
         * @memberof accsim
         * @classdesc Represents a CoolingWaterSaveResponse.
         * @implements ICoolingWaterSaveResponse
         * @constructor
         * @param {accsim.ICoolingWaterSaveResponse=} [properties] Properties to set
         */
        function CoolingWaterSaveResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a CoolingWaterSaveResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.CoolingWaterSaveResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.CoolingWaterSaveResponse} CoolingWaterSaveResponse
         */
        CoolingWaterSaveResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.CoolingWaterSaveResponse)
                return object;
            return new $root.accsim.CoolingWaterSaveResponse();
        };

        /**
         * Creates a plain object from a CoolingWaterSaveResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.CoolingWaterSaveResponse
         * @static
         * @param {accsim.CoolingWaterSaveResponse} message CoolingWaterSaveResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CoolingWaterSaveResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CoolingWaterSaveResponse to JSON.
         * @function toJSON
         * @memberof accsim.CoolingWaterSaveResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoolingWaterSaveResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoolingWaterSaveResponse;
    })();

    accsim.FireExtinguishing = (function() {

        /**
         * Properties of a FireExtinguishing.
         * @memberof accsim
         * @interface IFireExtinguishing
         * @property {number|null} [type] FireExtinguishing type
         * @property {number|null} [num] FireExtinguishing num
         */

        /**
         * Constructs a new FireExtinguishing.
         * @memberof accsim
         * @classdesc Represents a FireExtinguishing.
         * @implements IFireExtinguishing
         * @constructor
         * @param {accsim.IFireExtinguishing=} [properties] Properties to set
         */
        function FireExtinguishing(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FireExtinguishing type.
         * @member {number} type
         * @memberof accsim.FireExtinguishing
         * @instance
         */
        FireExtinguishing.prototype.type = 0;

        /**
         * FireExtinguishing num.
         * @member {number} num
         * @memberof accsim.FireExtinguishing
         * @instance
         */
        FireExtinguishing.prototype.num = 0;

        /**
         * Creates a FireExtinguishing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.FireExtinguishing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.FireExtinguishing} FireExtinguishing
         */
        FireExtinguishing.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.FireExtinguishing)
                return object;
            let message = new $root.accsim.FireExtinguishing();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a FireExtinguishing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.FireExtinguishing
         * @static
         * @param {accsim.FireExtinguishing} message FireExtinguishing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FireExtinguishing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = 0;
                object.num = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this FireExtinguishing to JSON.
         * @function toJSON
         * @memberof accsim.FireExtinguishing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FireExtinguishing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FireExtinguishing;
    })();

    accsim.EquipmentPersonDemandRequest = (function() {

        /**
         * Properties of an EquipmentPersonDemandRequest.
         * @memberof accsim
         * @interface IEquipmentPersonDemandRequest
         * @property {Array.<accsim.IFireExtinguishing>|null} [foams] EquipmentPersonDemandRequest foams
         * @property {Array.<accsim.IFireExtinguishing>|null} [coolingTanks] EquipmentPersonDemandRequest coolingTanks
         * @property {Array.<accsim.IFireExtinguishing>|null} [coolingNearTanks] EquipmentPersonDemandRequest coolingNearTanks
         * @property {number|null} [foamFlow] EquipmentPersonDemandRequest foamFlow
         * @property {number|null} [coolingFlow] EquipmentPersonDemandRequest coolingFlow
         * @property {number|null} [coolingNearFlow] EquipmentPersonDemandRequest coolingNearFlow
         * @property {number|null} [foamTruckFlow] EquipmentPersonDemandRequest foamTruckFlow
         * @property {number|null} [waterTruckFlow] EquipmentPersonDemandRequest waterTruckFlow
         */

        /**
         * Constructs a new EquipmentPersonDemandRequest.
         * @memberof accsim
         * @classdesc Represents an EquipmentPersonDemandRequest.
         * @implements IEquipmentPersonDemandRequest
         * @constructor
         * @param {accsim.IEquipmentPersonDemandRequest=} [properties] Properties to set
         */
        function EquipmentPersonDemandRequest(properties) {
            this.foams = [];
            this.coolingTanks = [];
            this.coolingNearTanks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipmentPersonDemandRequest foams.
         * @member {Array.<accsim.IFireExtinguishing>} foams
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.foams = $util.emptyArray;

        /**
         * EquipmentPersonDemandRequest coolingTanks.
         * @member {Array.<accsim.IFireExtinguishing>} coolingTanks
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.coolingTanks = $util.emptyArray;

        /**
         * EquipmentPersonDemandRequest coolingNearTanks.
         * @member {Array.<accsim.IFireExtinguishing>} coolingNearTanks
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.coolingNearTanks = $util.emptyArray;

        /**
         * EquipmentPersonDemandRequest foamFlow.
         * @member {number} foamFlow
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.foamFlow = 0;

        /**
         * EquipmentPersonDemandRequest coolingFlow.
         * @member {number} coolingFlow
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.coolingFlow = 0;

        /**
         * EquipmentPersonDemandRequest coolingNearFlow.
         * @member {number} coolingNearFlow
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.coolingNearFlow = 0;

        /**
         * EquipmentPersonDemandRequest foamTruckFlow.
         * @member {number} foamTruckFlow
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.foamTruckFlow = 0;

        /**
         * EquipmentPersonDemandRequest waterTruckFlow.
         * @member {number} waterTruckFlow
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         */
        EquipmentPersonDemandRequest.prototype.waterTruckFlow = 0;

        /**
         * Creates an EquipmentPersonDemandRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EquipmentPersonDemandRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EquipmentPersonDemandRequest} EquipmentPersonDemandRequest
         */
        EquipmentPersonDemandRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EquipmentPersonDemandRequest)
                return object;
            let message = new $root.accsim.EquipmentPersonDemandRequest();
            if (object.foams) {
                if (!Array.isArray(object.foams))
                    throw TypeError(".accsim.EquipmentPersonDemandRequest.foams: array expected");
                message.foams = [];
                for (let i = 0; i < object.foams.length; ++i) {
                    if (typeof object.foams[i] !== "object")
                        throw TypeError(".accsim.EquipmentPersonDemandRequest.foams: object expected");
                    message.foams[i] = $root.accsim.FireExtinguishing.fromObject(object.foams[i]);
                }
            }
            if (object.coolingTanks) {
                if (!Array.isArray(object.coolingTanks))
                    throw TypeError(".accsim.EquipmentPersonDemandRequest.coolingTanks: array expected");
                message.coolingTanks = [];
                for (let i = 0; i < object.coolingTanks.length; ++i) {
                    if (typeof object.coolingTanks[i] !== "object")
                        throw TypeError(".accsim.EquipmentPersonDemandRequest.coolingTanks: object expected");
                    message.coolingTanks[i] = $root.accsim.FireExtinguishing.fromObject(object.coolingTanks[i]);
                }
            }
            if (object.coolingNearTanks) {
                if (!Array.isArray(object.coolingNearTanks))
                    throw TypeError(".accsim.EquipmentPersonDemandRequest.coolingNearTanks: array expected");
                message.coolingNearTanks = [];
                for (let i = 0; i < object.coolingNearTanks.length; ++i) {
                    if (typeof object.coolingNearTanks[i] !== "object")
                        throw TypeError(".accsim.EquipmentPersonDemandRequest.coolingNearTanks: object expected");
                    message.coolingNearTanks[i] = $root.accsim.FireExtinguishing.fromObject(object.coolingNearTanks[i]);
                }
            }
            if (object.foamFlow != null)
                message.foamFlow = Number(object.foamFlow);
            if (object.coolingFlow != null)
                message.coolingFlow = Number(object.coolingFlow);
            if (object.coolingNearFlow != null)
                message.coolingNearFlow = Number(object.coolingNearFlow);
            if (object.foamTruckFlow != null)
                message.foamTruckFlow = Number(object.foamTruckFlow);
            if (object.waterTruckFlow != null)
                message.waterTruckFlow = Number(object.waterTruckFlow);
            return message;
        };

        /**
         * Creates a plain object from an EquipmentPersonDemandRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EquipmentPersonDemandRequest
         * @static
         * @param {accsim.EquipmentPersonDemandRequest} message EquipmentPersonDemandRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipmentPersonDemandRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.foams = [];
                object.coolingTanks = [];
                object.coolingNearTanks = [];
            }
            if (options.defaults) {
                object.foamFlow = 0;
                object.coolingFlow = 0;
                object.coolingNearFlow = 0;
                object.foamTruckFlow = 0;
                object.waterTruckFlow = 0;
            }
            if (message.foams && message.foams.length) {
                object.foams = [];
                for (let j = 0; j < message.foams.length; ++j)
                    object.foams[j] = $root.accsim.FireExtinguishing.toObject(message.foams[j], options);
            }
            if (message.coolingTanks && message.coolingTanks.length) {
                object.coolingTanks = [];
                for (let j = 0; j < message.coolingTanks.length; ++j)
                    object.coolingTanks[j] = $root.accsim.FireExtinguishing.toObject(message.coolingTanks[j], options);
            }
            if (message.coolingNearTanks && message.coolingNearTanks.length) {
                object.coolingNearTanks = [];
                for (let j = 0; j < message.coolingNearTanks.length; ++j)
                    object.coolingNearTanks[j] = $root.accsim.FireExtinguishing.toObject(message.coolingNearTanks[j], options);
            }
            if (message.foamFlow != null && message.hasOwnProperty("foamFlow"))
                object.foamFlow = options.json && !isFinite(message.foamFlow) ? String(message.foamFlow) : message.foamFlow;
            if (message.coolingFlow != null && message.hasOwnProperty("coolingFlow"))
                object.coolingFlow = options.json && !isFinite(message.coolingFlow) ? String(message.coolingFlow) : message.coolingFlow;
            if (message.coolingNearFlow != null && message.hasOwnProperty("coolingNearFlow"))
                object.coolingNearFlow = options.json && !isFinite(message.coolingNearFlow) ? String(message.coolingNearFlow) : message.coolingNearFlow;
            if (message.foamTruckFlow != null && message.hasOwnProperty("foamTruckFlow"))
                object.foamTruckFlow = options.json && !isFinite(message.foamTruckFlow) ? String(message.foamTruckFlow) : message.foamTruckFlow;
            if (message.waterTruckFlow != null && message.hasOwnProperty("waterTruckFlow"))
                object.waterTruckFlow = options.json && !isFinite(message.waterTruckFlow) ? String(message.waterTruckFlow) : message.waterTruckFlow;
            return object;
        };

        /**
         * Converts this EquipmentPersonDemandRequest to JSON.
         * @function toJSON
         * @memberof accsim.EquipmentPersonDemandRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipmentPersonDemandRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EquipmentPersonDemandRequest;
    })();

    accsim.Equipment = (function() {

        /**
         * Properties of an Equipment.
         * @memberof accsim
         * @interface IEquipment
         * @property {string|null} [type] Equipment type
         * @property {string|null} [modelVersion] Equipment modelVersion
         * @property {number|null} [operatorNum] Equipment operatorNum
         * @property {number|null} [num] Equipment num
         */

        /**
         * Constructs a new Equipment.
         * @memberof accsim
         * @classdesc Represents an Equipment.
         * @implements IEquipment
         * @constructor
         * @param {accsim.IEquipment=} [properties] Properties to set
         */
        function Equipment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Equipment type.
         * @member {string} type
         * @memberof accsim.Equipment
         * @instance
         */
        Equipment.prototype.type = "";

        /**
         * Equipment modelVersion.
         * @member {string} modelVersion
         * @memberof accsim.Equipment
         * @instance
         */
        Equipment.prototype.modelVersion = "";

        /**
         * Equipment operatorNum.
         * @member {number} operatorNum
         * @memberof accsim.Equipment
         * @instance
         */
        Equipment.prototype.operatorNum = 0;

        /**
         * Equipment num.
         * @member {number} num
         * @memberof accsim.Equipment
         * @instance
         */
        Equipment.prototype.num = 0;

        /**
         * Creates an Equipment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.Equipment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.Equipment} Equipment
         */
        Equipment.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.Equipment)
                return object;
            let message = new $root.accsim.Equipment();
            if (object.type != null)
                message.type = String(object.type);
            if (object.modelVersion != null)
                message.modelVersion = String(object.modelVersion);
            if (object.operatorNum != null)
                message.operatorNum = object.operatorNum | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from an Equipment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.Equipment
         * @static
         * @param {accsim.Equipment} message Equipment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Equipment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = "";
                object.modelVersion = "";
                object.operatorNum = 0;
                object.num = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                object.modelVersion = message.modelVersion;
            if (message.operatorNum != null && message.hasOwnProperty("operatorNum"))
                object.operatorNum = message.operatorNum;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this Equipment to JSON.
         * @function toJSON
         * @memberof accsim.Equipment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Equipment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Equipment;
    })();

    accsim.EquipmentPersonDemandResponse = (function() {

        /**
         * Properties of an EquipmentPersonDemandResponse.
         * @memberof accsim
         * @interface IEquipmentPersonDemandResponse
         * @property {Array.<accsim.IEquipment>|null} [eqs] EquipmentPersonDemandResponse eqs
         */

        /**
         * Constructs a new EquipmentPersonDemandResponse.
         * @memberof accsim
         * @classdesc Represents an EquipmentPersonDemandResponse.
         * @implements IEquipmentPersonDemandResponse
         * @constructor
         * @param {accsim.IEquipmentPersonDemandResponse=} [properties] Properties to set
         */
        function EquipmentPersonDemandResponse(properties) {
            this.eqs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipmentPersonDemandResponse eqs.
         * @member {Array.<accsim.IEquipment>} eqs
         * @memberof accsim.EquipmentPersonDemandResponse
         * @instance
         */
        EquipmentPersonDemandResponse.prototype.eqs = $util.emptyArray;

        /**
         * Creates an EquipmentPersonDemandResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EquipmentPersonDemandResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EquipmentPersonDemandResponse} EquipmentPersonDemandResponse
         */
        EquipmentPersonDemandResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EquipmentPersonDemandResponse)
                return object;
            let message = new $root.accsim.EquipmentPersonDemandResponse();
            if (object.eqs) {
                if (!Array.isArray(object.eqs))
                    throw TypeError(".accsim.EquipmentPersonDemandResponse.eqs: array expected");
                message.eqs = [];
                for (let i = 0; i < object.eqs.length; ++i) {
                    if (typeof object.eqs[i] !== "object")
                        throw TypeError(".accsim.EquipmentPersonDemandResponse.eqs: object expected");
                    message.eqs[i] = $root.accsim.Equipment.fromObject(object.eqs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EquipmentPersonDemandResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EquipmentPersonDemandResponse
         * @static
         * @param {accsim.EquipmentPersonDemandResponse} message EquipmentPersonDemandResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipmentPersonDemandResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.eqs = [];
            if (message.eqs && message.eqs.length) {
                object.eqs = [];
                for (let j = 0; j < message.eqs.length; ++j)
                    object.eqs[j] = $root.accsim.Equipment.toObject(message.eqs[j], options);
            }
            return object;
        };

        /**
         * Converts this EquipmentPersonDemandResponse to JSON.
         * @function toJSON
         * @memberof accsim.EquipmentPersonDemandResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipmentPersonDemandResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EquipmentPersonDemandResponse;
    })();

    accsim.EquipmentRequireRequest = (function() {

        /**
         * Properties of an EquipmentRequireRequest.
         * @memberof accsim
         * @interface IEquipmentRequireRequest
         * @property {number|null} [sceneId] EquipmentRequireRequest sceneId
         */

        /**
         * Constructs a new EquipmentRequireRequest.
         * @memberof accsim
         * @classdesc Represents an EquipmentRequireRequest.
         * @implements IEquipmentRequireRequest
         * @constructor
         * @param {accsim.IEquipmentRequireRequest=} [properties] Properties to set
         */
        function EquipmentRequireRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipmentRequireRequest sceneId.
         * @member {number} sceneId
         * @memberof accsim.EquipmentRequireRequest
         * @instance
         */
        EquipmentRequireRequest.prototype.sceneId = 0;

        /**
         * Creates an EquipmentRequireRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EquipmentRequireRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EquipmentRequireRequest} EquipmentRequireRequest
         */
        EquipmentRequireRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EquipmentRequireRequest)
                return object;
            let message = new $root.accsim.EquipmentRequireRequest();
            if (object.sceneId != null)
                message.sceneId = object.sceneId | 0;
            return message;
        };

        /**
         * Creates a plain object from an EquipmentRequireRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EquipmentRequireRequest
         * @static
         * @param {accsim.EquipmentRequireRequest} message EquipmentRequireRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipmentRequireRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.sceneId = 0;
            if (message.sceneId != null && message.hasOwnProperty("sceneId"))
                object.sceneId = message.sceneId;
            return object;
        };

        /**
         * Converts this EquipmentRequireRequest to JSON.
         * @function toJSON
         * @memberof accsim.EquipmentRequireRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipmentRequireRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EquipmentRequireRequest;
    })();

    accsim.EquipmentRequireResponse = (function() {

        /**
         * Properties of an EquipmentRequireResponse.
         * @memberof accsim
         * @interface IEquipmentRequireResponse
         * @property {number|null} [foamFlow] EquipmentRequireResponse foamFlow
         * @property {number|null} [flow] EquipmentRequireResponse flow
         * @property {number|null} [nearFlow] EquipmentRequireResponse nearFlow
         */

        /**
         * Constructs a new EquipmentRequireResponse.
         * @memberof accsim
         * @classdesc Represents an EquipmentRequireResponse.
         * @implements IEquipmentRequireResponse
         * @constructor
         * @param {accsim.IEquipmentRequireResponse=} [properties] Properties to set
         */
        function EquipmentRequireResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EquipmentRequireResponse foamFlow.
         * @member {number} foamFlow
         * @memberof accsim.EquipmentRequireResponse
         * @instance
         */
        EquipmentRequireResponse.prototype.foamFlow = 0;

        /**
         * EquipmentRequireResponse flow.
         * @member {number} flow
         * @memberof accsim.EquipmentRequireResponse
         * @instance
         */
        EquipmentRequireResponse.prototype.flow = 0;

        /**
         * EquipmentRequireResponse nearFlow.
         * @member {number} nearFlow
         * @memberof accsim.EquipmentRequireResponse
         * @instance
         */
        EquipmentRequireResponse.prototype.nearFlow = 0;

        /**
         * Creates an EquipmentRequireResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EquipmentRequireResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EquipmentRequireResponse} EquipmentRequireResponse
         */
        EquipmentRequireResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EquipmentRequireResponse)
                return object;
            let message = new $root.accsim.EquipmentRequireResponse();
            if (object.foamFlow != null)
                message.foamFlow = Number(object.foamFlow);
            if (object.flow != null)
                message.flow = Number(object.flow);
            if (object.nearFlow != null)
                message.nearFlow = Number(object.nearFlow);
            return message;
        };

        /**
         * Creates a plain object from an EquipmentRequireResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EquipmentRequireResponse
         * @static
         * @param {accsim.EquipmentRequireResponse} message EquipmentRequireResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EquipmentRequireResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.foamFlow = 0;
                object.flow = 0;
                object.nearFlow = 0;
            }
            if (message.foamFlow != null && message.hasOwnProperty("foamFlow"))
                object.foamFlow = options.json && !isFinite(message.foamFlow) ? String(message.foamFlow) : message.foamFlow;
            if (message.flow != null && message.hasOwnProperty("flow"))
                object.flow = options.json && !isFinite(message.flow) ? String(message.flow) : message.flow;
            if (message.nearFlow != null && message.hasOwnProperty("nearFlow"))
                object.nearFlow = options.json && !isFinite(message.nearFlow) ? String(message.nearFlow) : message.nearFlow;
            return object;
        };

        /**
         * Converts this EquipmentRequireResponse to JSON.
         * @function toJSON
         * @memberof accsim.EquipmentRequireResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EquipmentRequireResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EquipmentRequireResponse;
    })();

    accsim.MaterialBurningHeatGetRequest = (function() {

        /**
         * Properties of a MaterialBurningHeatGetRequest.
         * @memberof accsim
         * @interface IMaterialBurningHeatGetRequest
         */

        /**
         * Constructs a new MaterialBurningHeatGetRequest.
         * @memberof accsim
         * @classdesc Represents a MaterialBurningHeatGetRequest.
         * @implements IMaterialBurningHeatGetRequest
         * @constructor
         * @param {accsim.IMaterialBurningHeatGetRequest=} [properties] Properties to set
         */
        function MaterialBurningHeatGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a MaterialBurningHeatGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.MaterialBurningHeatGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.MaterialBurningHeatGetRequest} MaterialBurningHeatGetRequest
         */
        MaterialBurningHeatGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.MaterialBurningHeatGetRequest)
                return object;
            return new $root.accsim.MaterialBurningHeatGetRequest();
        };

        /**
         * Creates a plain object from a MaterialBurningHeatGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.MaterialBurningHeatGetRequest
         * @static
         * @param {accsim.MaterialBurningHeatGetRequest} message MaterialBurningHeatGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialBurningHeatGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MaterialBurningHeatGetRequest to JSON.
         * @function toJSON
         * @memberof accsim.MaterialBurningHeatGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialBurningHeatGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialBurningHeatGetRequest;
    })();

    accsim.Material = (function() {

        /**
         * Properties of a Material.
         * @memberof accsim
         * @interface IMaterial
         * @property {string|null} [name] Material name
         * @property {number|null} [burningHeat] Material burningHeat
         */

        /**
         * Constructs a new Material.
         * @memberof accsim
         * @classdesc Represents a Material.
         * @implements IMaterial
         * @constructor
         * @param {accsim.IMaterial=} [properties] Properties to set
         */
        function Material(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Material name.
         * @member {string} name
         * @memberof accsim.Material
         * @instance
         */
        Material.prototype.name = "";

        /**
         * Material burningHeat.
         * @member {number} burningHeat
         * @memberof accsim.Material
         * @instance
         */
        Material.prototype.burningHeat = 0;

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.Material
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.Material} Material
         */
        Material.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.Material)
                return object;
            let message = new $root.accsim.Material();
            if (object.name != null)
                message.name = String(object.name);
            if (object.burningHeat != null)
                message.burningHeat = Number(object.burningHeat);
            return message;
        };

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.Material
         * @static
         * @param {accsim.Material} message Material
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Material.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.burningHeat = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.burningHeat != null && message.hasOwnProperty("burningHeat"))
                object.burningHeat = options.json && !isFinite(message.burningHeat) ? String(message.burningHeat) : message.burningHeat;
            return object;
        };

        /**
         * Converts this Material to JSON.
         * @function toJSON
         * @memberof accsim.Material
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Material.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Material;
    })();

    accsim.MaterialBurningHeatGetResponse = (function() {

        /**
         * Properties of a MaterialBurningHeatGetResponse.
         * @memberof accsim
         * @interface IMaterialBurningHeatGetResponse
         * @property {Array.<accsim.IMaterial>|null} [materials] MaterialBurningHeatGetResponse materials
         */

        /**
         * Constructs a new MaterialBurningHeatGetResponse.
         * @memberof accsim
         * @classdesc Represents a MaterialBurningHeatGetResponse.
         * @implements IMaterialBurningHeatGetResponse
         * @constructor
         * @param {accsim.IMaterialBurningHeatGetResponse=} [properties] Properties to set
         */
        function MaterialBurningHeatGetResponse(properties) {
            this.materials = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialBurningHeatGetResponse materials.
         * @member {Array.<accsim.IMaterial>} materials
         * @memberof accsim.MaterialBurningHeatGetResponse
         * @instance
         */
        MaterialBurningHeatGetResponse.prototype.materials = $util.emptyArray;

        /**
         * Creates a MaterialBurningHeatGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.MaterialBurningHeatGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.MaterialBurningHeatGetResponse} MaterialBurningHeatGetResponse
         */
        MaterialBurningHeatGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.MaterialBurningHeatGetResponse)
                return object;
            let message = new $root.accsim.MaterialBurningHeatGetResponse();
            if (object.materials) {
                if (!Array.isArray(object.materials))
                    throw TypeError(".accsim.MaterialBurningHeatGetResponse.materials: array expected");
                message.materials = [];
                for (let i = 0; i < object.materials.length; ++i) {
                    if (typeof object.materials[i] !== "object")
                        throw TypeError(".accsim.MaterialBurningHeatGetResponse.materials: object expected");
                    message.materials[i] = $root.accsim.Material.fromObject(object.materials[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MaterialBurningHeatGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.MaterialBurningHeatGetResponse
         * @static
         * @param {accsim.MaterialBurningHeatGetResponse} message MaterialBurningHeatGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialBurningHeatGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.materials = [];
            if (message.materials && message.materials.length) {
                object.materials = [];
                for (let j = 0; j < message.materials.length; ++j)
                    object.materials[j] = $root.accsim.Material.toObject(message.materials[j], options);
            }
            return object;
        };

        /**
         * Converts this MaterialBurningHeatGetResponse to JSON.
         * @function toJSON
         * @memberof accsim.MaterialBurningHeatGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialBurningHeatGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialBurningHeatGetResponse;
    })();

    accsim.EnterpriseAreaGetRequest = (function() {

        /**
         * Properties of an EnterpriseAreaGetRequest.
         * @memberof accsim
         * @interface IEnterpriseAreaGetRequest
         * @property {number|null} [enterpriseId] EnterpriseAreaGetRequest enterpriseId
         */

        /**
         * Constructs a new EnterpriseAreaGetRequest.
         * @memberof accsim
         * @classdesc Represents an EnterpriseAreaGetRequest.
         * @implements IEnterpriseAreaGetRequest
         * @constructor
         * @param {accsim.IEnterpriseAreaGetRequest=} [properties] Properties to set
         */
        function EnterpriseAreaGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterpriseAreaGetRequest enterpriseId.
         * @member {number} enterpriseId
         * @memberof accsim.EnterpriseAreaGetRequest
         * @instance
         */
        EnterpriseAreaGetRequest.prototype.enterpriseId = 0;

        /**
         * Creates an EnterpriseAreaGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EnterpriseAreaGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EnterpriseAreaGetRequest} EnterpriseAreaGetRequest
         */
        EnterpriseAreaGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EnterpriseAreaGetRequest)
                return object;
            let message = new $root.accsim.EnterpriseAreaGetRequest();
            if (object.enterpriseId != null)
                message.enterpriseId = object.enterpriseId | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterpriseAreaGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EnterpriseAreaGetRequest
         * @static
         * @param {accsim.EnterpriseAreaGetRequest} message EnterpriseAreaGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterpriseAreaGetRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.enterpriseId = 0;
            if (message.enterpriseId != null && message.hasOwnProperty("enterpriseId"))
                object.enterpriseId = message.enterpriseId;
            return object;
        };

        /**
         * Converts this EnterpriseAreaGetRequest to JSON.
         * @function toJSON
         * @memberof accsim.EnterpriseAreaGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterpriseAreaGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterpriseAreaGetRequest;
    })();

    accsim.LngLat = (function() {

        /**
         * Properties of a LngLat.
         * @memberof accsim
         * @interface ILngLat
         * @property {number|null} [lng] LngLat lng
         * @property {number|null} [lat] LngLat lat
         */

        /**
         * Constructs a new LngLat.
         * @memberof accsim
         * @classdesc Represents a LngLat.
         * @implements ILngLat
         * @constructor
         * @param {accsim.ILngLat=} [properties] Properties to set
         */
        function LngLat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LngLat lng.
         * @member {number} lng
         * @memberof accsim.LngLat
         * @instance
         */
        LngLat.prototype.lng = 0;

        /**
         * LngLat lat.
         * @member {number} lat
         * @memberof accsim.LngLat
         * @instance
         */
        LngLat.prototype.lat = 0;

        /**
         * Creates a LngLat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.LngLat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.LngLat} LngLat
         */
        LngLat.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.LngLat)
                return object;
            let message = new $root.accsim.LngLat();
            if (object.lng != null)
                message.lng = Number(object.lng);
            if (object.lat != null)
                message.lat = Number(object.lat);
            return message;
        };

        /**
         * Creates a plain object from a LngLat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.LngLat
         * @static
         * @param {accsim.LngLat} message LngLat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LngLat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lng = 0;
                object.lat = 0;
            }
            if (message.lng != null && message.hasOwnProperty("lng"))
                object.lng = options.json && !isFinite(message.lng) ? String(message.lng) : message.lng;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            return object;
        };

        /**
         * Converts this LngLat to JSON.
         * @function toJSON
         * @memberof accsim.LngLat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LngLat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LngLat;
    })();

    accsim.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof accsim
         * @interface IPoint
         * @property {string|null} [name] Point name
         * @property {Array.<accsim.ILngLat>|null} [path] Point path
         */

        /**
         * Constructs a new Point.
         * @memberof accsim
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {accsim.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            this.path = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point name.
         * @member {string} name
         * @memberof accsim.Point
         * @instance
         */
        Point.prototype.name = "";

        /**
         * Point path.
         * @member {Array.<accsim.ILngLat>} path
         * @memberof accsim.Point
         * @instance
         */
        Point.prototype.path = $util.emptyArray;

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.Point)
                return object;
            let message = new $root.accsim.Point();
            if (object.name != null)
                message.name = String(object.name);
            if (object.path) {
                if (!Array.isArray(object.path))
                    throw TypeError(".accsim.Point.path: array expected");
                message.path = [];
                for (let i = 0; i < object.path.length; ++i) {
                    if (typeof object.path[i] !== "object")
                        throw TypeError(".accsim.Point.path: object expected");
                    message.path[i] = $root.accsim.LngLat.fromObject(object.path[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.Point
         * @static
         * @param {accsim.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.path = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.path && message.path.length) {
                object.path = [];
                for (let j = 0; j < message.path.length; ++j)
                    object.path[j] = $root.accsim.LngLat.toObject(message.path[j], options);
            }
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof accsim.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    accsim.EnterpriseAreaGetResponse = (function() {

        /**
         * Properties of an EnterpriseAreaGetResponse.
         * @memberof accsim
         * @interface IEnterpriseAreaGetResponse
         * @property {Array.<accsim.IPoint>|null} [points] EnterpriseAreaGetResponse points
         */

        /**
         * Constructs a new EnterpriseAreaGetResponse.
         * @memberof accsim
         * @classdesc Represents an EnterpriseAreaGetResponse.
         * @implements IEnterpriseAreaGetResponse
         * @constructor
         * @param {accsim.IEnterpriseAreaGetResponse=} [properties] Properties to set
         */
        function EnterpriseAreaGetResponse(properties) {
            this.points = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterpriseAreaGetResponse points.
         * @member {Array.<accsim.IPoint>} points
         * @memberof accsim.EnterpriseAreaGetResponse
         * @instance
         */
        EnterpriseAreaGetResponse.prototype.points = $util.emptyArray;

        /**
         * Creates an EnterpriseAreaGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EnterpriseAreaGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EnterpriseAreaGetResponse} EnterpriseAreaGetResponse
         */
        EnterpriseAreaGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EnterpriseAreaGetResponse)
                return object;
            let message = new $root.accsim.EnterpriseAreaGetResponse();
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".accsim.EnterpriseAreaGetResponse.points: array expected");
                message.points = [];
                for (let i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".accsim.EnterpriseAreaGetResponse.points: object expected");
                    message.points[i] = $root.accsim.Point.fromObject(object.points[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterpriseAreaGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EnterpriseAreaGetResponse
         * @static
         * @param {accsim.EnterpriseAreaGetResponse} message EnterpriseAreaGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterpriseAreaGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (message.points && message.points.length) {
                object.points = [];
                for (let j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.accsim.Point.toObject(message.points[j], options);
            }
            return object;
        };

        /**
         * Converts this EnterpriseAreaGetResponse to JSON.
         * @function toJSON
         * @memberof accsim.EnterpriseAreaGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterpriseAreaGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterpriseAreaGetResponse;
    })();

    accsim.EnterprisesGetRequest = (function() {

        /**
         * Properties of an EnterprisesGetRequest.
         * @memberof accsim
         * @interface IEnterprisesGetRequest
         */

        /**
         * Constructs a new EnterprisesGetRequest.
         * @memberof accsim
         * @classdesc Represents an EnterprisesGetRequest.
         * @implements IEnterprisesGetRequest
         * @constructor
         * @param {accsim.IEnterprisesGetRequest=} [properties] Properties to set
         */
        function EnterprisesGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates an EnterprisesGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EnterprisesGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EnterprisesGetRequest} EnterprisesGetRequest
         */
        EnterprisesGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EnterprisesGetRequest)
                return object;
            return new $root.accsim.EnterprisesGetRequest();
        };

        /**
         * Creates a plain object from an EnterprisesGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EnterprisesGetRequest
         * @static
         * @param {accsim.EnterprisesGetRequest} message EnterprisesGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterprisesGetRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this EnterprisesGetRequest to JSON.
         * @function toJSON
         * @memberof accsim.EnterprisesGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterprisesGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterprisesGetRequest;
    })();

    accsim.Enterprise = (function() {

        /**
         * Properties of an Enterprise.
         * @memberof accsim
         * @interface IEnterprise
         * @property {number|null} [id] Enterprise id
         * @property {string|null} [name] Enterprise name
         * @property {number|null} [lng] Enterprise lng
         * @property {number|null} [lat] Enterprise lat
         */

        /**
         * Constructs a new Enterprise.
         * @memberof accsim
         * @classdesc Represents an Enterprise.
         * @implements IEnterprise
         * @constructor
         * @param {accsim.IEnterprise=} [properties] Properties to set
         */
        function Enterprise(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Enterprise id.
         * @member {number} id
         * @memberof accsim.Enterprise
         * @instance
         */
        Enterprise.prototype.id = 0;

        /**
         * Enterprise name.
         * @member {string} name
         * @memberof accsim.Enterprise
         * @instance
         */
        Enterprise.prototype.name = "";

        /**
         * Enterprise lng.
         * @member {number} lng
         * @memberof accsim.Enterprise
         * @instance
         */
        Enterprise.prototype.lng = 0;

        /**
         * Enterprise lat.
         * @member {number} lat
         * @memberof accsim.Enterprise
         * @instance
         */
        Enterprise.prototype.lat = 0;

        /**
         * Creates an Enterprise message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.Enterprise
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.Enterprise} Enterprise
         */
        Enterprise.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.Enterprise)
                return object;
            let message = new $root.accsim.Enterprise();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.lng != null)
                message.lng = Number(object.lng);
            if (object.lat != null)
                message.lat = Number(object.lat);
            return message;
        };

        /**
         * Creates a plain object from an Enterprise message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.Enterprise
         * @static
         * @param {accsim.Enterprise} message Enterprise
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Enterprise.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.lng = 0;
                object.lat = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.lng != null && message.hasOwnProperty("lng"))
                object.lng = options.json && !isFinite(message.lng) ? String(message.lng) : message.lng;
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            return object;
        };

        /**
         * Converts this Enterprise to JSON.
         * @function toJSON
         * @memberof accsim.Enterprise
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Enterprise.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Enterprise;
    })();

    accsim.EnterprisesGetResponse = (function() {

        /**
         * Properties of an EnterprisesGetResponse.
         * @memberof accsim
         * @interface IEnterprisesGetResponse
         * @property {Array.<accsim.IEnterprise>|null} [enterprises] EnterprisesGetResponse enterprises
         */

        /**
         * Constructs a new EnterprisesGetResponse.
         * @memberof accsim
         * @classdesc Represents an EnterprisesGetResponse.
         * @implements IEnterprisesGetResponse
         * @constructor
         * @param {accsim.IEnterprisesGetResponse=} [properties] Properties to set
         */
        function EnterprisesGetResponse(properties) {
            this.enterprises = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterprisesGetResponse enterprises.
         * @member {Array.<accsim.IEnterprise>} enterprises
         * @memberof accsim.EnterprisesGetResponse
         * @instance
         */
        EnterprisesGetResponse.prototype.enterprises = $util.emptyArray;

        /**
         * Creates an EnterprisesGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EnterprisesGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EnterprisesGetResponse} EnterprisesGetResponse
         */
        EnterprisesGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EnterprisesGetResponse)
                return object;
            let message = new $root.accsim.EnterprisesGetResponse();
            if (object.enterprises) {
                if (!Array.isArray(object.enterprises))
                    throw TypeError(".accsim.EnterprisesGetResponse.enterprises: array expected");
                message.enterprises = [];
                for (let i = 0; i < object.enterprises.length; ++i) {
                    if (typeof object.enterprises[i] !== "object")
                        throw TypeError(".accsim.EnterprisesGetResponse.enterprises: object expected");
                    message.enterprises[i] = $root.accsim.Enterprise.fromObject(object.enterprises[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterprisesGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EnterprisesGetResponse
         * @static
         * @param {accsim.EnterprisesGetResponse} message EnterprisesGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterprisesGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.enterprises = [];
            if (message.enterprises && message.enterprises.length) {
                object.enterprises = [];
                for (let j = 0; j < message.enterprises.length; ++j)
                    object.enterprises[j] = $root.accsim.Enterprise.toObject(message.enterprises[j], options);
            }
            return object;
        };

        /**
         * Converts this EnterprisesGetResponse to JSON.
         * @function toJSON
         * @memberof accsim.EnterprisesGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterprisesGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterprisesGetResponse;
    })();

    accsim.EnterpriseGetRequest = (function() {

        /**
         * Properties of an EnterpriseGetRequest.
         * @memberof accsim
         * @interface IEnterpriseGetRequest
         * @property {number|null} [id] EnterpriseGetRequest id
         */

        /**
         * Constructs a new EnterpriseGetRequest.
         * @memberof accsim
         * @classdesc Represents an EnterpriseGetRequest.
         * @implements IEnterpriseGetRequest
         * @constructor
         * @param {accsim.IEnterpriseGetRequest=} [properties] Properties to set
         */
        function EnterpriseGetRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterpriseGetRequest id.
         * @member {number} id
         * @memberof accsim.EnterpriseGetRequest
         * @instance
         */
        EnterpriseGetRequest.prototype.id = 0;

        /**
         * Creates an EnterpriseGetRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EnterpriseGetRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EnterpriseGetRequest} EnterpriseGetRequest
         */
        EnterpriseGetRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EnterpriseGetRequest)
                return object;
            let message = new $root.accsim.EnterpriseGetRequest();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterpriseGetRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EnterpriseGetRequest
         * @static
         * @param {accsim.EnterpriseGetRequest} message EnterpriseGetRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterpriseGetRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this EnterpriseGetRequest to JSON.
         * @function toJSON
         * @memberof accsim.EnterpriseGetRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterpriseGetRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterpriseGetRequest;
    })();

    accsim.EnterpriseGetResponse = (function() {

        /**
         * Properties of an EnterpriseGetResponse.
         * @memberof accsim
         * @interface IEnterpriseGetResponse
         * @property {accsim.IEnterprise|null} [enterprise] EnterpriseGetResponse enterprise
         */

        /**
         * Constructs a new EnterpriseGetResponse.
         * @memberof accsim
         * @classdesc Represents an EnterpriseGetResponse.
         * @implements IEnterpriseGetResponse
         * @constructor
         * @param {accsim.IEnterpriseGetResponse=} [properties] Properties to set
         */
        function EnterpriseGetResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterpriseGetResponse enterprise.
         * @member {accsim.IEnterprise|null|undefined} enterprise
         * @memberof accsim.EnterpriseGetResponse
         * @instance
         */
        EnterpriseGetResponse.prototype.enterprise = null;

        /**
         * Creates an EnterpriseGetResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof accsim.EnterpriseGetResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {accsim.EnterpriseGetResponse} EnterpriseGetResponse
         */
        EnterpriseGetResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.accsim.EnterpriseGetResponse)
                return object;
            let message = new $root.accsim.EnterpriseGetResponse();
            if (object.enterprise != null) {
                if (typeof object.enterprise !== "object")
                    throw TypeError(".accsim.EnterpriseGetResponse.enterprise: object expected");
                message.enterprise = $root.accsim.Enterprise.fromObject(object.enterprise);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterpriseGetResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof accsim.EnterpriseGetResponse
         * @static
         * @param {accsim.EnterpriseGetResponse} message EnterpriseGetResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterpriseGetResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.enterprise = null;
            if (message.enterprise != null && message.hasOwnProperty("enterprise"))
                object.enterprise = $root.accsim.Enterprise.toObject(message.enterprise, options);
            return object;
        };

        /**
         * Converts this EnterpriseGetResponse to JSON.
         * @function toJSON
         * @memberof accsim.EnterpriseGetResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterpriseGetResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterpriseGetResponse;
    })();

    accsim.AccSimService = (function() {

        /**
         * Constructs a new AccSimService service.
         * @memberof accsim
         * @classdesc Represents an AccSimService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AccSimService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AccSimService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccSimService;

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneGet}.
         * @memberof accsim.AccSimService
         * @typedef AccSceneGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.AccSceneGetResponse} [response] AccSceneGetResponse
         */

        /**
         * Calls AccSceneGet.
         * @function accSceneGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneGetRequest} request AccSceneGetRequest message or plain object
         * @param {accsim.AccSimService.AccSceneGetCallback} callback Node-style callback called with the error, if any, and AccSceneGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.accSceneGet = function accSceneGet(request, callback) {
            return this.rpcCall(accSceneGet, $root.accsim.AccSceneGetRequest, $root.accsim.AccSceneGetResponse, request, callback);
        }, "name", { value: "AccSceneGet" });

        /**
         * Calls AccSceneGet.
         * @function accSceneGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneGetRequest} request AccSceneGetRequest message or plain object
         * @returns {Promise<accsim.AccSceneGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneSave}.
         * @memberof accsim.AccSimService
         * @typedef AccSceneSaveCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.AccSceneSaveResponse} [response] AccSceneSaveResponse
         */

        /**
         * Calls AccSceneSave.
         * @function accSceneSave
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneSaveRequest} request AccSceneSaveRequest message or plain object
         * @param {accsim.AccSimService.AccSceneSaveCallback} callback Node-style callback called with the error, if any, and AccSceneSaveResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.accSceneSave = function accSceneSave(request, callback) {
            return this.rpcCall(accSceneSave, $root.accsim.AccSceneSaveRequest, $root.accsim.AccSceneSaveResponse, request, callback);
        }, "name", { value: "AccSceneSave" });

        /**
         * Calls AccSceneSave.
         * @function accSceneSave
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneSaveRequest} request AccSceneSaveRequest message or plain object
         * @returns {Promise<accsim.AccSceneSaveResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneDelete}.
         * @memberof accsim.AccSimService
         * @typedef AccSceneDeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.AccSceneDeleteResponse} [response] AccSceneDeleteResponse
         */

        /**
         * Calls AccSceneDelete.
         * @function accSceneDelete
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneDeleteRequest} request AccSceneDeleteRequest message or plain object
         * @param {accsim.AccSimService.AccSceneDeleteCallback} callback Node-style callback called with the error, if any, and AccSceneDeleteResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.accSceneDelete = function accSceneDelete(request, callback) {
            return this.rpcCall(accSceneDelete, $root.accsim.AccSceneDeleteRequest, $root.accsim.AccSceneDeleteResponse, request, callback);
        }, "name", { value: "AccSceneDelete" });

        /**
         * Calls AccSceneDelete.
         * @function accSceneDelete
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneDeleteRequest} request AccSceneDeleteRequest message or plain object
         * @returns {Promise<accsim.AccSceneDeleteResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneInfo}.
         * @memberof accsim.AccSimService
         * @typedef AccSceneInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.AccSceneInfoResponse} [response] AccSceneInfoResponse
         */

        /**
         * Calls AccSceneInfo.
         * @function accSceneInfo
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneInfoRequest} request AccSceneInfoRequest message or plain object
         * @param {accsim.AccSimService.AccSceneInfoCallback} callback Node-style callback called with the error, if any, and AccSceneInfoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.accSceneInfo = function accSceneInfo(request, callback) {
            return this.rpcCall(accSceneInfo, $root.accsim.AccSceneInfoRequest, $root.accsim.AccSceneInfoResponse, request, callback);
        }, "name", { value: "AccSceneInfo" });

        /**
         * Calls AccSceneInfo.
         * @function accSceneInfo
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IAccSceneInfoRequest} request AccSceneInfoRequest message or plain object
         * @returns {Promise<accsim.AccSceneInfoResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#poolFireCalc}.
         * @memberof accsim.AccSimService
         * @typedef PoolFireCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.PoolFireCalcResponse} [response] PoolFireCalcResponse
         */

        /**
         * Calls PoolFireCalc.
         * @function poolFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IPoolFireCalcRequest} request PoolFireCalcRequest message or plain object
         * @param {accsim.AccSimService.PoolFireCalcCallback} callback Node-style callback called with the error, if any, and PoolFireCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.poolFireCalc = function poolFireCalc(request, callback) {
            return this.rpcCall(poolFireCalc, $root.accsim.PoolFireCalcRequest, $root.accsim.PoolFireCalcResponse, request, callback);
        }, "name", { value: "PoolFireCalc" });

        /**
         * Calls PoolFireCalc.
         * @function poolFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IPoolFireCalcRequest} request PoolFireCalcRequest message or plain object
         * @returns {Promise<accsim.PoolFireCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#flowingFireCalc}.
         * @memberof accsim.AccSimService
         * @typedef FlowingFireCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.FlowingFireCalcResponse} [response] FlowingFireCalcResponse
         */

        /**
         * Calls FlowingFireCalc.
         * @function flowingFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IFlowingFireCalcRequest} request FlowingFireCalcRequest message or plain object
         * @param {accsim.AccSimService.FlowingFireCalcCallback} callback Node-style callback called with the error, if any, and FlowingFireCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.flowingFireCalc = function flowingFireCalc(request, callback) {
            return this.rpcCall(flowingFireCalc, $root.accsim.FlowingFireCalcRequest, $root.accsim.FlowingFireCalcResponse, request, callback);
        }, "name", { value: "FlowingFireCalc" });

        /**
         * Calls FlowingFireCalc.
         * @function flowingFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IFlowingFireCalcRequest} request FlowingFireCalcRequest message or plain object
         * @returns {Promise<accsim.FlowingFireCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#sealRingCalc}.
         * @memberof accsim.AccSimService
         * @typedef SealRingCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.SealRingCalcResponse} [response] SealRingCalcResponse
         */

        /**
         * Calls SealRingCalc.
         * @function sealRingCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.ISealRingCalcRequest} request SealRingCalcRequest message or plain object
         * @param {accsim.AccSimService.SealRingCalcCallback} callback Node-style callback called with the error, if any, and SealRingCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.sealRingCalc = function sealRingCalc(request, callback) {
            return this.rpcCall(sealRingCalc, $root.accsim.SealRingCalcRequest, $root.accsim.SealRingCalcResponse, request, callback);
        }, "name", { value: "SealRingCalc" });

        /**
         * Calls SealRingCalc.
         * @function sealRingCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.ISealRingCalcRequest} request SealRingCalcRequest message or plain object
         * @returns {Promise<accsim.SealRingCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#jetFireCalc}.
         * @memberof accsim.AccSimService
         * @typedef JetFireCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.JetFireCalcResponse} [response] JetFireCalcResponse
         */

        /**
         * Calls JetFireCalc.
         * @function jetFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IJetFireCalcRequest} request JetFireCalcRequest message or plain object
         * @param {accsim.AccSimService.JetFireCalcCallback} callback Node-style callback called with the error, if any, and JetFireCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.jetFireCalc = function jetFireCalc(request, callback) {
            return this.rpcCall(jetFireCalc, $root.accsim.JetFireCalcRequest, $root.accsim.JetFireCalcResponse, request, callback);
        }, "name", { value: "JetFireCalc" });

        /**
         * Calls JetFireCalc.
         * @function jetFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IJetFireCalcRequest} request JetFireCalcRequest message or plain object
         * @returns {Promise<accsim.JetFireCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#ballFireCalc}.
         * @memberof accsim.AccSimService
         * @typedef BallFireCalcCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.BallFireCalcResponse} [response] BallFireCalcResponse
         */

        /**
         * Calls BallFireCalc.
         * @function ballFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IBallFireCalcRequest} request BallFireCalcRequest message or plain object
         * @param {accsim.AccSimService.BallFireCalcCallback} callback Node-style callback called with the error, if any, and BallFireCalcResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.ballFireCalc = function ballFireCalc(request, callback) {
            return this.rpcCall(ballFireCalc, $root.accsim.BallFireCalcRequest, $root.accsim.BallFireCalcResponse, request, callback);
        }, "name", { value: "BallFireCalc" });

        /**
         * Calls BallFireCalc.
         * @function ballFireCalc
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IBallFireCalcRequest} request BallFireCalcRequest message or plain object
         * @returns {Promise<accsim.BallFireCalcResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#fireExtinguishingDemand}.
         * @memberof accsim.AccSimService
         * @typedef FireExtinguishingDemandCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.FireExtinguishingDemandResponse} [response] FireExtinguishingDemandResponse
         */

        /**
         * Calls FireExtinguishingDemand.
         * @function fireExtinguishingDemand
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IFireExtinguishingDemandRequest} request FireExtinguishingDemandRequest message or plain object
         * @param {accsim.AccSimService.FireExtinguishingDemandCallback} callback Node-style callback called with the error, if any, and FireExtinguishingDemandResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.fireExtinguishingDemand = function fireExtinguishingDemand(request, callback) {
            return this.rpcCall(fireExtinguishingDemand, $root.accsim.FireExtinguishingDemandRequest, $root.accsim.FireExtinguishingDemandResponse, request, callback);
        }, "name", { value: "FireExtinguishingDemand" });

        /**
         * Calls FireExtinguishingDemand.
         * @function fireExtinguishingDemand
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IFireExtinguishingDemandRequest} request FireExtinguishingDemandRequest message or plain object
         * @returns {Promise<accsim.FireExtinguishingDemandResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#fireExtinguishingSave}.
         * @memberof accsim.AccSimService
         * @typedef FireExtinguishingSaveCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.FireExtinguishingSaveResponse} [response] FireExtinguishingSaveResponse
         */

        /**
         * Calls FireExtinguishingSave.
         * @function fireExtinguishingSave
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IFireExtinguishingSaveRequest} request FireExtinguishingSaveRequest message or plain object
         * @param {accsim.AccSimService.FireExtinguishingSaveCallback} callback Node-style callback called with the error, if any, and FireExtinguishingSaveResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.fireExtinguishingSave = function fireExtinguishingSave(request, callback) {
            return this.rpcCall(fireExtinguishingSave, $root.accsim.FireExtinguishingSaveRequest, $root.accsim.FireExtinguishingSaveResponse, request, callback);
        }, "name", { value: "FireExtinguishingSave" });

        /**
         * Calls FireExtinguishingSave.
         * @function fireExtinguishingSave
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IFireExtinguishingSaveRequest} request FireExtinguishingSaveRequest message or plain object
         * @returns {Promise<accsim.FireExtinguishingSaveResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#coolingWaterDemand}.
         * @memberof accsim.AccSimService
         * @typedef CoolingWaterDemandCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.CoolingWaterDemandResponse} [response] CoolingWaterDemandResponse
         */

        /**
         * Calls CoolingWaterDemand.
         * @function coolingWaterDemand
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.ICoolingWaterDemandRequest} request CoolingWaterDemandRequest message or plain object
         * @param {accsim.AccSimService.CoolingWaterDemandCallback} callback Node-style callback called with the error, if any, and CoolingWaterDemandResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.coolingWaterDemand = function coolingWaterDemand(request, callback) {
            return this.rpcCall(coolingWaterDemand, $root.accsim.CoolingWaterDemandRequest, $root.accsim.CoolingWaterDemandResponse, request, callback);
        }, "name", { value: "CoolingWaterDemand" });

        /**
         * Calls CoolingWaterDemand.
         * @function coolingWaterDemand
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.ICoolingWaterDemandRequest} request CoolingWaterDemandRequest message or plain object
         * @returns {Promise<accsim.CoolingWaterDemandResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#coolingWaterSave}.
         * @memberof accsim.AccSimService
         * @typedef CoolingWaterSaveCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.CoolingWaterSaveResponse} [response] CoolingWaterSaveResponse
         */

        /**
         * Calls CoolingWaterSave.
         * @function coolingWaterSave
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.ICoolingWaterSaveRequest} request CoolingWaterSaveRequest message or plain object
         * @param {accsim.AccSimService.CoolingWaterSaveCallback} callback Node-style callback called with the error, if any, and CoolingWaterSaveResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.coolingWaterSave = function coolingWaterSave(request, callback) {
            return this.rpcCall(coolingWaterSave, $root.accsim.CoolingWaterSaveRequest, $root.accsim.CoolingWaterSaveResponse, request, callback);
        }, "name", { value: "CoolingWaterSave" });

        /**
         * Calls CoolingWaterSave.
         * @function coolingWaterSave
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.ICoolingWaterSaveRequest} request CoolingWaterSaveRequest message or plain object
         * @returns {Promise<accsim.CoolingWaterSaveResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#equipmentPersonDemand}.
         * @memberof accsim.AccSimService
         * @typedef EquipmentPersonDemandCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.EquipmentPersonDemandResponse} [response] EquipmentPersonDemandResponse
         */

        /**
         * Calls EquipmentPersonDemand.
         * @function equipmentPersonDemand
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEquipmentPersonDemandRequest} request EquipmentPersonDemandRequest message or plain object
         * @param {accsim.AccSimService.EquipmentPersonDemandCallback} callback Node-style callback called with the error, if any, and EquipmentPersonDemandResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.equipmentPersonDemand = function equipmentPersonDemand(request, callback) {
            return this.rpcCall(equipmentPersonDemand, $root.accsim.EquipmentPersonDemandRequest, $root.accsim.EquipmentPersonDemandResponse, request, callback);
        }, "name", { value: "EquipmentPersonDemand" });

        /**
         * Calls EquipmentPersonDemand.
         * @function equipmentPersonDemand
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEquipmentPersonDemandRequest} request EquipmentPersonDemandRequest message or plain object
         * @returns {Promise<accsim.EquipmentPersonDemandResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#equipmentRequire}.
         * @memberof accsim.AccSimService
         * @typedef EquipmentRequireCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.EquipmentRequireResponse} [response] EquipmentRequireResponse
         */

        /**
         * Calls EquipmentRequire.
         * @function equipmentRequire
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEquipmentRequireRequest} request EquipmentRequireRequest message or plain object
         * @param {accsim.AccSimService.EquipmentRequireCallback} callback Node-style callback called with the error, if any, and EquipmentRequireResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.equipmentRequire = function equipmentRequire(request, callback) {
            return this.rpcCall(equipmentRequire, $root.accsim.EquipmentRequireRequest, $root.accsim.EquipmentRequireResponse, request, callback);
        }, "name", { value: "EquipmentRequire" });

        /**
         * Calls EquipmentRequire.
         * @function equipmentRequire
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEquipmentRequireRequest} request EquipmentRequireRequest message or plain object
         * @returns {Promise<accsim.EquipmentRequireResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#materialBurningHeatGet}.
         * @memberof accsim.AccSimService
         * @typedef MaterialBurningHeatGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.MaterialBurningHeatGetResponse} [response] MaterialBurningHeatGetResponse
         */

        /**
         * Calls MaterialBurningHeatGet.
         * @function materialBurningHeatGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IMaterialBurningHeatGetRequest} request MaterialBurningHeatGetRequest message or plain object
         * @param {accsim.AccSimService.MaterialBurningHeatGetCallback} callback Node-style callback called with the error, if any, and MaterialBurningHeatGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.materialBurningHeatGet = function materialBurningHeatGet(request, callback) {
            return this.rpcCall(materialBurningHeatGet, $root.accsim.MaterialBurningHeatGetRequest, $root.accsim.MaterialBurningHeatGetResponse, request, callback);
        }, "name", { value: "MaterialBurningHeatGet" });

        /**
         * Calls MaterialBurningHeatGet.
         * @function materialBurningHeatGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IMaterialBurningHeatGetRequest} request MaterialBurningHeatGetRequest message or plain object
         * @returns {Promise<accsim.MaterialBurningHeatGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#enterpriseAreaGet}.
         * @memberof accsim.AccSimService
         * @typedef EnterpriseAreaGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.EnterpriseAreaGetResponse} [response] EnterpriseAreaGetResponse
         */

        /**
         * Calls EnterpriseAreaGet.
         * @function enterpriseAreaGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEnterpriseAreaGetRequest} request EnterpriseAreaGetRequest message or plain object
         * @param {accsim.AccSimService.EnterpriseAreaGetCallback} callback Node-style callback called with the error, if any, and EnterpriseAreaGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.enterpriseAreaGet = function enterpriseAreaGet(request, callback) {
            return this.rpcCall(enterpriseAreaGet, $root.accsim.EnterpriseAreaGetRequest, $root.accsim.EnterpriseAreaGetResponse, request, callback);
        }, "name", { value: "EnterpriseAreaGet" });

        /**
         * Calls EnterpriseAreaGet.
         * @function enterpriseAreaGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEnterpriseAreaGetRequest} request EnterpriseAreaGetRequest message or plain object
         * @returns {Promise<accsim.EnterpriseAreaGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#enterprisesGet}.
         * @memberof accsim.AccSimService
         * @typedef EnterprisesGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.EnterprisesGetResponse} [response] EnterprisesGetResponse
         */

        /**
         * Calls EnterprisesGet.
         * @function enterprisesGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEnterprisesGetRequest} request EnterprisesGetRequest message or plain object
         * @param {accsim.AccSimService.EnterprisesGetCallback} callback Node-style callback called with the error, if any, and EnterprisesGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.enterprisesGet = function enterprisesGet(request, callback) {
            return this.rpcCall(enterprisesGet, $root.accsim.EnterprisesGetRequest, $root.accsim.EnterprisesGetResponse, request, callback);
        }, "name", { value: "EnterprisesGet" });

        /**
         * Calls EnterprisesGet.
         * @function enterprisesGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEnterprisesGetRequest} request EnterprisesGetRequest message or plain object
         * @returns {Promise<accsim.EnterprisesGetResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link accsim.AccSimService#enterpriseGet}.
         * @memberof accsim.AccSimService
         * @typedef EnterpriseGetCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {accsim.EnterpriseGetResponse} [response] EnterpriseGetResponse
         */

        /**
         * Calls EnterpriseGet.
         * @function enterpriseGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEnterpriseGetRequest} request EnterpriseGetRequest message or plain object
         * @param {accsim.AccSimService.EnterpriseGetCallback} callback Node-style callback called with the error, if any, and EnterpriseGetResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccSimService.prototype.enterpriseGet = function enterpriseGet(request, callback) {
            return this.rpcCall(enterpriseGet, $root.accsim.EnterpriseGetRequest, $root.accsim.EnterpriseGetResponse, request, callback);
        }, "name", { value: "EnterpriseGet" });

        /**
         * Calls EnterpriseGet.
         * @function enterpriseGet
         * @memberof accsim.AccSimService
         * @instance
         * @param {accsim.IEnterpriseGetRequest} request EnterpriseGetRequest message or plain object
         * @returns {Promise<accsim.EnterpriseGetResponse>} Promise
         * @variation 2
         */

        return AccSimService;
    })();

    return accsim;
})();