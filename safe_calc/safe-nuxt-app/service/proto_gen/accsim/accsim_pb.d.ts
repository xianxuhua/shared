import * as $protobuf from "protobufjs";
/** Namespace accsim. */
export namespace accsim {

    /** Properties of an AccSceneGetRequest. */
    interface IAccSceneGetRequest {
    }

    /** Represents an AccSceneGetRequest. */
    class AccSceneGetRequest implements IAccSceneGetRequest {

        /**
         * Constructs a new AccSceneGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneGetRequest);

        /**
         * Creates an AccSceneGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneGetRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneGetRequest;

        /**
         * Creates a plain object from an AccSceneGetRequest message. Also converts values to other types if specified.
         * @param message AccSceneGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccScene. */
    interface IAccScene {

        /** AccScene id */
        id?: (number|null);

        /** AccScene name */
        name?: (string|null);

        /** AccScene deathRadius */
        deathRadius?: (number|null);

        /** AccScene bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** AccScene smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** AccScene longitude */
        longitude?: (number|null);

        /** AccScene latitude */
        latitude?: (number|null);

        /** AccScene windDirection */
        windDirection?: (string|null);

        /** AccScene windSpeed */
        windSpeed?: (number|null);

        /** AccScene targetDis */
        targetDis?: (number|null);

        /** AccScene liquidTankDiameter */
        liquidTankDiameter?: (number|null);

        /** AccScene xs */
        xs?: (number[]|null);

        /** AccScene ys */
        ys?: (number[]|null);

        /** AccScene safeRadius */
        safeRadius?: (number|null);

        /** AccScene type */
        type?: (string|null);

        /** AccScene addTime */
        addTime?: (string|null);
    }

    /** Represents an AccScene. */
    class AccScene implements IAccScene {

        /**
         * Constructs a new AccScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccScene);

        /** AccScene id. */
        public id: number;

        /** AccScene name. */
        public name: string;

        /** AccScene deathRadius. */
        public deathRadius: number;

        /** AccScene bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** AccScene smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** AccScene longitude. */
        public longitude: number;

        /** AccScene latitude. */
        public latitude: number;

        /** AccScene windDirection. */
        public windDirection: string;

        /** AccScene windSpeed. */
        public windSpeed: number;

        /** AccScene targetDis. */
        public targetDis: number;

        /** AccScene liquidTankDiameter. */
        public liquidTankDiameter: number;

        /** AccScene xs. */
        public xs: number[];

        /** AccScene ys. */
        public ys: number[];

        /** AccScene safeRadius. */
        public safeRadius: number;

        /** AccScene type. */
        public type: string;

        /** AccScene addTime. */
        public addTime: string;

        /**
         * Creates an AccScene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccScene
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccScene;

        /**
         * Creates a plain object from an AccScene message. Also converts values to other types if specified.
         * @param message AccScene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccScene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccScene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccSceneGetResponse. */
    interface IAccSceneGetResponse {

        /** AccSceneGetResponse accScenes */
        accScenes?: (accsim.IAccScene[]|null);
    }

    /** Represents an AccSceneGetResponse. */
    class AccSceneGetResponse implements IAccSceneGetResponse {

        /**
         * Constructs a new AccSceneGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneGetResponse);

        /** AccSceneGetResponse accScenes. */
        public accScenes: accsim.IAccScene[];

        /**
         * Creates an AccSceneGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneGetResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneGetResponse;

        /**
         * Creates a plain object from an AccSceneGetResponse message. Also converts values to other types if specified.
         * @param message AccSceneGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccSceneSaveRequest. */
    interface IAccSceneSaveRequest {

        /** AccSceneSaveRequest name */
        name?: (string|null);

        /** AccSceneSaveRequest type */
        type?: (string|null);

        /** AccSceneSaveRequest deathRadius */
        deathRadius?: (number|null);

        /** AccSceneSaveRequest bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** AccSceneSaveRequest smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** AccSceneSaveRequest longitude */
        longitude?: (number|null);

        /** AccSceneSaveRequest latitude */
        latitude?: (number|null);

        /** AccSceneSaveRequest windDirection */
        windDirection?: (string|null);

        /** AccSceneSaveRequest windSpeed */
        windSpeed?: (number|null);

        /** AccSceneSaveRequest targetDis */
        targetDis?: (number|null);

        /** AccSceneSaveRequest liquidTankDiameter */
        liquidTankDiameter?: (number|null);

        /** AccSceneSaveRequest xs */
        xs?: (number[]|null);

        /** AccSceneSaveRequest ys */
        ys?: (number[]|null);

        /** AccSceneSaveRequest safeRadius */
        safeRadius?: (number|null);
    }

    /** Represents an AccSceneSaveRequest. */
    class AccSceneSaveRequest implements IAccSceneSaveRequest {

        /**
         * Constructs a new AccSceneSaveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneSaveRequest);

        /** AccSceneSaveRequest name. */
        public name: string;

        /** AccSceneSaveRequest type. */
        public type: string;

        /** AccSceneSaveRequest deathRadius. */
        public deathRadius: number;

        /** AccSceneSaveRequest bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** AccSceneSaveRequest smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** AccSceneSaveRequest longitude. */
        public longitude: number;

        /** AccSceneSaveRequest latitude. */
        public latitude: number;

        /** AccSceneSaveRequest windDirection. */
        public windDirection: string;

        /** AccSceneSaveRequest windSpeed. */
        public windSpeed: number;

        /** AccSceneSaveRequest targetDis. */
        public targetDis: number;

        /** AccSceneSaveRequest liquidTankDiameter. */
        public liquidTankDiameter: number;

        /** AccSceneSaveRequest xs. */
        public xs: number[];

        /** AccSceneSaveRequest ys. */
        public ys: number[];

        /** AccSceneSaveRequest safeRadius. */
        public safeRadius: number;

        /**
         * Creates an AccSceneSaveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneSaveRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneSaveRequest;

        /**
         * Creates a plain object from an AccSceneSaveRequest message. Also converts values to other types if specified.
         * @param message AccSceneSaveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneSaveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneSaveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccSceneSaveResponse. */
    interface IAccSceneSaveResponse {
    }

    /** Represents an AccSceneSaveResponse. */
    class AccSceneSaveResponse implements IAccSceneSaveResponse {

        /**
         * Constructs a new AccSceneSaveResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneSaveResponse);

        /**
         * Creates an AccSceneSaveResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneSaveResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneSaveResponse;

        /**
         * Creates a plain object from an AccSceneSaveResponse message. Also converts values to other types if specified.
         * @param message AccSceneSaveResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneSaveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneSaveResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccSceneDeleteRequest. */
    interface IAccSceneDeleteRequest {

        /** AccSceneDeleteRequest id */
        id?: (number|null);
    }

    /** Represents an AccSceneDeleteRequest. */
    class AccSceneDeleteRequest implements IAccSceneDeleteRequest {

        /**
         * Constructs a new AccSceneDeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneDeleteRequest);

        /** AccSceneDeleteRequest id. */
        public id: number;

        /**
         * Creates an AccSceneDeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneDeleteRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneDeleteRequest;

        /**
         * Creates a plain object from an AccSceneDeleteRequest message. Also converts values to other types if specified.
         * @param message AccSceneDeleteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneDeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneDeleteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccSceneDeleteResponse. */
    interface IAccSceneDeleteResponse {
    }

    /** Represents an AccSceneDeleteResponse. */
    class AccSceneDeleteResponse implements IAccSceneDeleteResponse {

        /**
         * Constructs a new AccSceneDeleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneDeleteResponse);

        /**
         * Creates an AccSceneDeleteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneDeleteResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneDeleteResponse;

        /**
         * Creates a plain object from an AccSceneDeleteResponse message. Also converts values to other types if specified.
         * @param message AccSceneDeleteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneDeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneDeleteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccSceneInfoRequest. */
    interface IAccSceneInfoRequest {

        /** AccSceneInfoRequest id */
        id?: (number|null);
    }

    /** Represents an AccSceneInfoRequest. */
    class AccSceneInfoRequest implements IAccSceneInfoRequest {

        /**
         * Constructs a new AccSceneInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneInfoRequest);

        /** AccSceneInfoRequest id. */
        public id: number;

        /**
         * Creates an AccSceneInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneInfoRequest;

        /**
         * Creates a plain object from an AccSceneInfoRequest message. Also converts values to other types if specified.
         * @param message AccSceneInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccSceneInfoResponse. */
    interface IAccSceneInfoResponse {

        /** AccSceneInfoResponse name */
        name?: (string|null);

        /** AccSceneInfoResponse type */
        type?: (string|null);

        /** AccSceneInfoResponse deathRadius */
        deathRadius?: (number|null);

        /** AccSceneInfoResponse bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** AccSceneInfoResponse smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** AccSceneInfoResponse longitude */
        longitude?: (number|null);

        /** AccSceneInfoResponse latitude */
        latitude?: (number|null);

        /** AccSceneInfoResponse windDirection */
        windDirection?: (string|null);

        /** AccSceneInfoResponse windSpeed */
        windSpeed?: (number|null);

        /** AccSceneInfoResponse targetDis */
        targetDis?: (number|null);

        /** AccSceneInfoResponse liquidTankDiameter */
        liquidTankDiameter?: (number|null);

        /** AccSceneInfoResponse xs */
        xs?: (number[]|null);

        /** AccSceneInfoResponse ys */
        ys?: (number[]|null);

        /** AccSceneInfoResponse safeRadius */
        safeRadius?: (number|null);
    }

    /** Represents an AccSceneInfoResponse. */
    class AccSceneInfoResponse implements IAccSceneInfoResponse {

        /**
         * Constructs a new AccSceneInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IAccSceneInfoResponse);

        /** AccSceneInfoResponse name. */
        public name: string;

        /** AccSceneInfoResponse type. */
        public type: string;

        /** AccSceneInfoResponse deathRadius. */
        public deathRadius: number;

        /** AccSceneInfoResponse bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** AccSceneInfoResponse smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** AccSceneInfoResponse longitude. */
        public longitude: number;

        /** AccSceneInfoResponse latitude. */
        public latitude: number;

        /** AccSceneInfoResponse windDirection. */
        public windDirection: string;

        /** AccSceneInfoResponse windSpeed. */
        public windSpeed: number;

        /** AccSceneInfoResponse targetDis. */
        public targetDis: number;

        /** AccSceneInfoResponse liquidTankDiameter. */
        public liquidTankDiameter: number;

        /** AccSceneInfoResponse xs. */
        public xs: number[];

        /** AccSceneInfoResponse ys. */
        public ys: number[];

        /** AccSceneInfoResponse safeRadius. */
        public safeRadius: number;

        /**
         * Creates an AccSceneInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccSceneInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.AccSceneInfoResponse;

        /**
         * Creates a plain object from an AccSceneInfoResponse message. Also converts values to other types if specified.
         * @param message AccSceneInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.AccSceneInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccSceneInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoolFireCalcRequest. */
    interface IPoolFireCalcRequest {

        /** PoolFireCalcRequest sceneName */
        sceneName?: (string|null);

        /** PoolFireCalcRequest windDirection */
        windDirection?: (string|null);

        /** PoolFireCalcRequest windSpeed */
        windSpeed?: (number|null);

        /** PoolFireCalcRequest liquidTankDiameter */
        liquidTankDiameter?: (number|null);

        /** PoolFireCalcRequest targetDis */
        targetDis?: (number|null);

        /** PoolFireCalcRequest density */
        density?: (number|null);

        /** PoolFireCalcRequest burningRate */
        burningRate?: (number|null);

        /** PoolFireCalcRequest burningHeat */
        burningHeat?: (number|null);
    }

    /** Represents a PoolFireCalcRequest. */
    class PoolFireCalcRequest implements IPoolFireCalcRequest {

        /**
         * Constructs a new PoolFireCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IPoolFireCalcRequest);

        /** PoolFireCalcRequest sceneName. */
        public sceneName: string;

        /** PoolFireCalcRequest windDirection. */
        public windDirection: string;

        /** PoolFireCalcRequest windSpeed. */
        public windSpeed: number;

        /** PoolFireCalcRequest liquidTankDiameter. */
        public liquidTankDiameter: number;

        /** PoolFireCalcRequest targetDis. */
        public targetDis: number;

        /** PoolFireCalcRequest density. */
        public density: number;

        /** PoolFireCalcRequest burningRate. */
        public burningRate: number;

        /** PoolFireCalcRequest burningHeat. */
        public burningHeat: number;

        /**
         * Creates a PoolFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoolFireCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.PoolFireCalcRequest;

        /**
         * Creates a plain object from a PoolFireCalcRequest message. Also converts values to other types if specified.
         * @param message PoolFireCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.PoolFireCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoolFireCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoolFireCalcResponse. */
    interface IPoolFireCalcResponse {

        /** PoolFireCalcResponse fireHeight */
        fireHeight?: (number|null);

        /** PoolFireCalcResponse tiltAngle */
        tiltAngle?: (number|null);

        /** PoolFireCalcResponse extendedFlameDiameter */
        extendedFlameDiameter?: (string|null);

        /** PoolFireCalcResponse thermalRadiationPower */
        thermalRadiationPower?: (number|null);

        /** PoolFireCalcResponse deathRadius */
        deathRadius?: (number|null);

        /** PoolFireCalcResponse bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** PoolFireCalcResponse smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** PoolFireCalcResponse xs */
        xs?: (number[]|null);

        /** PoolFireCalcResponse ys */
        ys?: (number[]|null);

        /** PoolFireCalcResponse safeRadius */
        safeRadius?: (number|null);
    }

    /** Represents a PoolFireCalcResponse. */
    class PoolFireCalcResponse implements IPoolFireCalcResponse {

        /**
         * Constructs a new PoolFireCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IPoolFireCalcResponse);

        /** PoolFireCalcResponse fireHeight. */
        public fireHeight: number;

        /** PoolFireCalcResponse tiltAngle. */
        public tiltAngle: number;

        /** PoolFireCalcResponse extendedFlameDiameter. */
        public extendedFlameDiameter: string;

        /** PoolFireCalcResponse thermalRadiationPower. */
        public thermalRadiationPower: number;

        /** PoolFireCalcResponse deathRadius. */
        public deathRadius: number;

        /** PoolFireCalcResponse bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** PoolFireCalcResponse smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** PoolFireCalcResponse xs. */
        public xs: number[];

        /** PoolFireCalcResponse ys. */
        public ys: number[];

        /** PoolFireCalcResponse safeRadius. */
        public safeRadius: number;

        /**
         * Creates a PoolFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoolFireCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.PoolFireCalcResponse;

        /**
         * Creates a plain object from a PoolFireCalcResponse message. Also converts values to other types if specified.
         * @param message PoolFireCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.PoolFireCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoolFireCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FlowingFireCalcRequest. */
    interface IFlowingFireCalcRequest {

        /** FlowingFireCalcRequest fireTank */
        fireTank?: (string|null);

        /** FlowingFireCalcRequest sceneName */
        sceneName?: (string|null);

        /** FlowingFireCalcRequest materialType */
        materialType?: (string|null);

        /** FlowingFireCalcRequest windDirection */
        windDirection?: (string|null);

        /** FlowingFireCalcRequest windSpeed */
        windSpeed?: (number|null);

        /** FlowingFireCalcRequest liquidTankDiameter */
        liquidTankDiameter?: (number|null);

        /** FlowingFireCalcRequest sceneId */
        sceneId?: (string|null);

        /** FlowingFireCalcRequest targetDis */
        targetDis?: (number|null);

        /** FlowingFireCalcRequest density */
        density?: (number|null);

        /** FlowingFireCalcRequest burningRate */
        burningRate?: (number|null);

        /** FlowingFireCalcRequest burningHeat */
        burningHeat?: (number|null);
    }

    /** Represents a FlowingFireCalcRequest. */
    class FlowingFireCalcRequest implements IFlowingFireCalcRequest {

        /**
         * Constructs a new FlowingFireCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IFlowingFireCalcRequest);

        /** FlowingFireCalcRequest fireTank. */
        public fireTank: string;

        /** FlowingFireCalcRequest sceneName. */
        public sceneName: string;

        /** FlowingFireCalcRequest materialType. */
        public materialType: string;

        /** FlowingFireCalcRequest windDirection. */
        public windDirection: string;

        /** FlowingFireCalcRequest windSpeed. */
        public windSpeed: number;

        /** FlowingFireCalcRequest liquidTankDiameter. */
        public liquidTankDiameter: number;

        /** FlowingFireCalcRequest sceneId. */
        public sceneId: string;

        /** FlowingFireCalcRequest targetDis. */
        public targetDis: number;

        /** FlowingFireCalcRequest density. */
        public density: number;

        /** FlowingFireCalcRequest burningRate. */
        public burningRate: number;

        /** FlowingFireCalcRequest burningHeat. */
        public burningHeat: number;

        /**
         * Creates a FlowingFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FlowingFireCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.FlowingFireCalcRequest;

        /**
         * Creates a plain object from a FlowingFireCalcRequest message. Also converts values to other types if specified.
         * @param message FlowingFireCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.FlowingFireCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FlowingFireCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FlowingFireCalcResponse. */
    interface IFlowingFireCalcResponse {

        /** FlowingFireCalcResponse fireHeight */
        fireHeight?: (number|null);

        /** FlowingFireCalcResponse tiltAngle */
        tiltAngle?: (number|null);

        /** FlowingFireCalcResponse extendedFlameDiameter */
        extendedFlameDiameter?: (string|null);

        /** FlowingFireCalcResponse thermalRadiationPower */
        thermalRadiationPower?: (number|null);

        /** FlowingFireCalcResponse deathRadius */
        deathRadius?: (number|null);

        /** FlowingFireCalcResponse bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** FlowingFireCalcResponse smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** FlowingFireCalcResponse xs */
        xs?: (number[]|null);

        /** FlowingFireCalcResponse ys */
        ys?: (number[]|null);

        /** FlowingFireCalcResponse safeRadius */
        safeRadius?: (number|null);
    }

    /** Represents a FlowingFireCalcResponse. */
    class FlowingFireCalcResponse implements IFlowingFireCalcResponse {

        /**
         * Constructs a new FlowingFireCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IFlowingFireCalcResponse);

        /** FlowingFireCalcResponse fireHeight. */
        public fireHeight: number;

        /** FlowingFireCalcResponse tiltAngle. */
        public tiltAngle: number;

        /** FlowingFireCalcResponse extendedFlameDiameter. */
        public extendedFlameDiameter: string;

        /** FlowingFireCalcResponse thermalRadiationPower. */
        public thermalRadiationPower: number;

        /** FlowingFireCalcResponse deathRadius. */
        public deathRadius: number;

        /** FlowingFireCalcResponse bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** FlowingFireCalcResponse smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** FlowingFireCalcResponse xs. */
        public xs: number[];

        /** FlowingFireCalcResponse ys. */
        public ys: number[];

        /** FlowingFireCalcResponse safeRadius. */
        public safeRadius: number;

        /**
         * Creates a FlowingFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FlowingFireCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.FlowingFireCalcResponse;

        /**
         * Creates a plain object from a FlowingFireCalcResponse message. Also converts values to other types if specified.
         * @param message FlowingFireCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.FlowingFireCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FlowingFireCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SealRingCalcRequest. */
    interface ISealRingCalcRequest {

        /** SealRingCalcRequest fireTank */
        fireTank?: (string|null);

        /** SealRingCalcRequest sceneName */
        sceneName?: (string|null);

        /** SealRingCalcRequest materialType */
        materialType?: (string|null);

        /** SealRingCalcRequest windDirection */
        windDirection?: (string|null);

        /** SealRingCalcRequest windSpeed */
        windSpeed?: (number|null);

        /** SealRingCalcRequest liquidTankDiameter */
        liquidTankDiameter?: (number|null);

        /** SealRingCalcRequest sceneId */
        sceneId?: (string|null);

        /** SealRingCalcRequest targetDis */
        targetDis?: (number|null);

        /** SealRingCalcRequest density */
        density?: (number|null);

        /** SealRingCalcRequest burningRate */
        burningRate?: (number|null);

        /** SealRingCalcRequest burningHeat */
        burningHeat?: (number|null);

        /** SealRingCalcRequest ringWidth */
        ringWidth?: (number|null);
    }

    /** Represents a SealRingCalcRequest. */
    class SealRingCalcRequest implements ISealRingCalcRequest {

        /**
         * Constructs a new SealRingCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.ISealRingCalcRequest);

        /** SealRingCalcRequest fireTank. */
        public fireTank: string;

        /** SealRingCalcRequest sceneName. */
        public sceneName: string;

        /** SealRingCalcRequest materialType. */
        public materialType: string;

        /** SealRingCalcRequest windDirection. */
        public windDirection: string;

        /** SealRingCalcRequest windSpeed. */
        public windSpeed: number;

        /** SealRingCalcRequest liquidTankDiameter. */
        public liquidTankDiameter: number;

        /** SealRingCalcRequest sceneId. */
        public sceneId: string;

        /** SealRingCalcRequest targetDis. */
        public targetDis: number;

        /** SealRingCalcRequest density. */
        public density: number;

        /** SealRingCalcRequest burningRate. */
        public burningRate: number;

        /** SealRingCalcRequest burningHeat. */
        public burningHeat: number;

        /** SealRingCalcRequest ringWidth. */
        public ringWidth: number;

        /**
         * Creates a SealRingCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SealRingCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.SealRingCalcRequest;

        /**
         * Creates a plain object from a SealRingCalcRequest message. Also converts values to other types if specified.
         * @param message SealRingCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.SealRingCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SealRingCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SealRingCalcResponse. */
    interface ISealRingCalcResponse {

        /** SealRingCalcResponse thermalRadiationPower */
        thermalRadiationPower?: (number|null);

        /** SealRingCalcResponse deathRadius */
        deathRadius?: (number|null);

        /** SealRingCalcResponse bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** SealRingCalcResponse smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** SealRingCalcResponse safeRadius */
        safeRadius?: (number|null);
    }

    /** Represents a SealRingCalcResponse. */
    class SealRingCalcResponse implements ISealRingCalcResponse {

        /**
         * Constructs a new SealRingCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.ISealRingCalcResponse);

        /** SealRingCalcResponse thermalRadiationPower. */
        public thermalRadiationPower: number;

        /** SealRingCalcResponse deathRadius. */
        public deathRadius: number;

        /** SealRingCalcResponse bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** SealRingCalcResponse smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** SealRingCalcResponse safeRadius. */
        public safeRadius: number;

        /**
         * Creates a SealRingCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SealRingCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.SealRingCalcResponse;

        /**
         * Creates a plain object from a SealRingCalcResponse message. Also converts values to other types if specified.
         * @param message SealRingCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.SealRingCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SealRingCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JetFireCalcRequest. */
    interface IJetFireCalcRequest {

        /** JetFireCalcRequest aperture */
        aperture?: (number|null);

        /** JetFireCalcRequest pressure */
        pressure?: (number|null);

        /** JetFireCalcRequest specificHeatCapacity */
        specificHeatCapacity?: (number|null);

        /** JetFireCalcRequest molecularWeight */
        molecularWeight?: (number|null);

        /** JetFireCalcRequest burningHeat */
        burningHeat?: (number|null);

        /** JetFireCalcRequest targetDis */
        targetDis?: (number|null);

        /** JetFireCalcRequest pipelinePressure */
        pipelinePressure?: (number|null);

        /** JetFireCalcRequest windSpeed */
        windSpeed?: (number|null);

        /** JetFireCalcRequest sceneName */
        sceneName?: (string|null);

        /** JetFireCalcRequest windDirection */
        windDirection?: (string|null);
    }

    /** Represents a JetFireCalcRequest. */
    class JetFireCalcRequest implements IJetFireCalcRequest {

        /**
         * Constructs a new JetFireCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IJetFireCalcRequest);

        /** JetFireCalcRequest aperture. */
        public aperture: number;

        /** JetFireCalcRequest pressure. */
        public pressure: number;

        /** JetFireCalcRequest specificHeatCapacity. */
        public specificHeatCapacity: number;

        /** JetFireCalcRequest molecularWeight. */
        public molecularWeight: number;

        /** JetFireCalcRequest burningHeat. */
        public burningHeat: number;

        /** JetFireCalcRequest targetDis. */
        public targetDis: number;

        /** JetFireCalcRequest pipelinePressure. */
        public pipelinePressure: number;

        /** JetFireCalcRequest windSpeed. */
        public windSpeed: number;

        /** JetFireCalcRequest sceneName. */
        public sceneName: string;

        /** JetFireCalcRequest windDirection. */
        public windDirection: string;

        /**
         * Creates a JetFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JetFireCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.JetFireCalcRequest;

        /**
         * Creates a plain object from a JetFireCalcRequest message. Also converts values to other types if specified.
         * @param message JetFireCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.JetFireCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JetFireCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JetFireCalcResponse. */
    interface IJetFireCalcResponse {

        /** JetFireCalcResponse smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** JetFireCalcResponse deathRadius */
        deathRadius?: (number|null);

        /** JetFireCalcResponse bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** JetFireCalcResponse xs */
        xs?: (number[]|null);

        /** JetFireCalcResponse ys */
        ys?: (number[]|null);

        /** JetFireCalcResponse heatRadiationFlux */
        heatRadiationFlux?: (number|null);

        /** JetFireCalcResponse fireHeight */
        fireHeight?: (number|null);

        /** JetFireCalcResponse fireDiameter */
        fireDiameter?: (number|null);
    }

    /** Represents a JetFireCalcResponse. */
    class JetFireCalcResponse implements IJetFireCalcResponse {

        /**
         * Constructs a new JetFireCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IJetFireCalcResponse);

        /** JetFireCalcResponse smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** JetFireCalcResponse deathRadius. */
        public deathRadius: number;

        /** JetFireCalcResponse bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** JetFireCalcResponse xs. */
        public xs: number[];

        /** JetFireCalcResponse ys. */
        public ys: number[];

        /** JetFireCalcResponse heatRadiationFlux. */
        public heatRadiationFlux: number;

        /** JetFireCalcResponse fireHeight. */
        public fireHeight: number;

        /** JetFireCalcResponse fireDiameter. */
        public fireDiameter: number;

        /**
         * Creates a JetFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JetFireCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.JetFireCalcResponse;

        /**
         * Creates a plain object from a JetFireCalcResponse message. Also converts values to other types if specified.
         * @param message JetFireCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.JetFireCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JetFireCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BallFireCalcRequest. */
    interface IBallFireCalcRequest {

        /** BallFireCalcRequest leakage */
        leakage?: (number|null);

        /** BallFireCalcRequest burningHeat */
        burningHeat?: (number|null);

        /** BallFireCalcRequest targetDis */
        targetDis?: (number|null);

        /** BallFireCalcRequest windSpeed */
        windSpeed?: (number|null);

        /** BallFireCalcRequest sceneName */
        sceneName?: (string|null);

        /** BallFireCalcRequest windDirection */
        windDirection?: (string|null);
    }

    /** Represents a BallFireCalcRequest. */
    class BallFireCalcRequest implements IBallFireCalcRequest {

        /**
         * Constructs a new BallFireCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IBallFireCalcRequest);

        /** BallFireCalcRequest leakage. */
        public leakage: number;

        /** BallFireCalcRequest burningHeat. */
        public burningHeat: number;

        /** BallFireCalcRequest targetDis. */
        public targetDis: number;

        /** BallFireCalcRequest windSpeed. */
        public windSpeed: number;

        /** BallFireCalcRequest sceneName. */
        public sceneName: string;

        /** BallFireCalcRequest windDirection. */
        public windDirection: string;

        /**
         * Creates a BallFireCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BallFireCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.BallFireCalcRequest;

        /**
         * Creates a plain object from a BallFireCalcRequest message. Also converts values to other types if specified.
         * @param message BallFireCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.BallFireCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BallFireCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BallFireCalcResponse. */
    interface IBallFireCalcResponse {

        /** BallFireCalcResponse smallInjuryRadius */
        smallInjuryRadius?: (number|null);

        /** BallFireCalcResponse deathRadius */
        deathRadius?: (number|null);

        /** BallFireCalcResponse bigInjuryRadius */
        bigInjuryRadius?: (number|null);

        /** BallFireCalcResponse xs */
        xs?: (number[]|null);

        /** BallFireCalcResponse ys */
        ys?: (number[]|null);

        /** BallFireCalcResponse maxRadius */
        maxRadius?: (number|null);

        /** BallFireCalcResponse duration */
        duration?: (number|null);

        /** BallFireCalcResponse heatRadiationFlux */
        heatRadiationFlux?: (number|null);
    }

    /** Represents a BallFireCalcResponse. */
    class BallFireCalcResponse implements IBallFireCalcResponse {

        /**
         * Constructs a new BallFireCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IBallFireCalcResponse);

        /** BallFireCalcResponse smallInjuryRadius. */
        public smallInjuryRadius: number;

        /** BallFireCalcResponse deathRadius. */
        public deathRadius: number;

        /** BallFireCalcResponse bigInjuryRadius. */
        public bigInjuryRadius: number;

        /** BallFireCalcResponse xs. */
        public xs: number[];

        /** BallFireCalcResponse ys. */
        public ys: number[];

        /** BallFireCalcResponse maxRadius. */
        public maxRadius: number;

        /** BallFireCalcResponse duration. */
        public duration: number;

        /** BallFireCalcResponse heatRadiationFlux. */
        public heatRadiationFlux: number;

        /**
         * Creates a BallFireCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BallFireCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.BallFireCalcResponse;

        /**
         * Creates a plain object from a BallFireCalcResponse message. Also converts values to other types if specified.
         * @param message BallFireCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.BallFireCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BallFireCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireExtinguishingDemandRequest. */
    interface IFireExtinguishingDemandRequest {

        /** FireExtinguishingDemandRequest liquidTankDiameter */
        liquidTankDiameter?: (number|null);

        /** FireExtinguishingDemandRequest supplyStrength */
        supplyStrength?: (number|null);

        /** FireExtinguishingDemandRequest supplyTime */
        supplyTime?: (number|null);

        /** FireExtinguishingDemandRequest mixRatio */
        mixRatio?: (number|null);
    }

    /** Represents a FireExtinguishingDemandRequest. */
    class FireExtinguishingDemandRequest implements IFireExtinguishingDemandRequest {

        /**
         * Constructs a new FireExtinguishingDemandRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IFireExtinguishingDemandRequest);

        /** FireExtinguishingDemandRequest liquidTankDiameter. */
        public liquidTankDiameter: number;

        /** FireExtinguishingDemandRequest supplyStrength. */
        public supplyStrength: number;

        /** FireExtinguishingDemandRequest supplyTime. */
        public supplyTime: number;

        /** FireExtinguishingDemandRequest mixRatio. */
        public mixRatio: number;

        /**
         * Creates a FireExtinguishingDemandRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireExtinguishingDemandRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.FireExtinguishingDemandRequest;

        /**
         * Creates a plain object from a FireExtinguishingDemandRequest message. Also converts values to other types if specified.
         * @param message FireExtinguishingDemandRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.FireExtinguishingDemandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireExtinguishingDemandRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireExtinguishingDemandResponse. */
    interface IFireExtinguishingDemandResponse {

        /** FireExtinguishingDemandResponse fireExtinguishingFlowTheory */
        fireExtinguishingFlowTheory?: (number|null);

        /** FireExtinguishingDemandResponse fireExtinguishingFlowActual */
        fireExtinguishingFlowActual?: (number|null);

        /** FireExtinguishingDemandResponse primaryLiquidFlowTheory */
        primaryLiquidFlowTheory?: (number|null);

        /** FireExtinguishingDemandResponse primaryLiquidFlowActual */
        primaryLiquidFlowActual?: (number|null);

        /** FireExtinguishingDemandResponse primaryLiquidUsageTheory */
        primaryLiquidUsageTheory?: (number|null);

        /** FireExtinguishingDemandResponse primaryLiquidUsageActual */
        primaryLiquidUsageActual?: (number|null);

        /** FireExtinguishingDemandResponse fireExtinguishingUsageTheory */
        fireExtinguishingUsageTheory?: (number|null);

        /** FireExtinguishingDemandResponse fireExtinguishingUsageActual */
        fireExtinguishingUsageActual?: (number|null);

        /** FireExtinguishingDemandResponse configFireExtinguishingFlowTheory */
        configFireExtinguishingFlowTheory?: (number|null);

        /** FireExtinguishingDemandResponse configFireExtinguishingFlowActual */
        configFireExtinguishingFlowActual?: (number|null);

        /** FireExtinguishingDemandResponse configFireExtinguishingUsageTheory */
        configFireExtinguishingUsageTheory?: (number|null);

        /** FireExtinguishingDemandResponse configFireExtinguishingUsageActual */
        configFireExtinguishingUsageActual?: (number|null);
    }

    /** Represents a FireExtinguishingDemandResponse. */
    class FireExtinguishingDemandResponse implements IFireExtinguishingDemandResponse {

        /**
         * Constructs a new FireExtinguishingDemandResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IFireExtinguishingDemandResponse);

        /** FireExtinguishingDemandResponse fireExtinguishingFlowTheory. */
        public fireExtinguishingFlowTheory: number;

        /** FireExtinguishingDemandResponse fireExtinguishingFlowActual. */
        public fireExtinguishingFlowActual: number;

        /** FireExtinguishingDemandResponse primaryLiquidFlowTheory. */
        public primaryLiquidFlowTheory: number;

        /** FireExtinguishingDemandResponse primaryLiquidFlowActual. */
        public primaryLiquidFlowActual: number;

        /** FireExtinguishingDemandResponse primaryLiquidUsageTheory. */
        public primaryLiquidUsageTheory: number;

        /** FireExtinguishingDemandResponse primaryLiquidUsageActual. */
        public primaryLiquidUsageActual: number;

        /** FireExtinguishingDemandResponse fireExtinguishingUsageTheory. */
        public fireExtinguishingUsageTheory: number;

        /** FireExtinguishingDemandResponse fireExtinguishingUsageActual. */
        public fireExtinguishingUsageActual: number;

        /** FireExtinguishingDemandResponse configFireExtinguishingFlowTheory. */
        public configFireExtinguishingFlowTheory: number;

        /** FireExtinguishingDemandResponse configFireExtinguishingFlowActual. */
        public configFireExtinguishingFlowActual: number;

        /** FireExtinguishingDemandResponse configFireExtinguishingUsageTheory. */
        public configFireExtinguishingUsageTheory: number;

        /** FireExtinguishingDemandResponse configFireExtinguishingUsageActual. */
        public configFireExtinguishingUsageActual: number;

        /**
         * Creates a FireExtinguishingDemandResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireExtinguishingDemandResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.FireExtinguishingDemandResponse;

        /**
         * Creates a plain object from a FireExtinguishingDemandResponse message. Also converts values to other types if specified.
         * @param message FireExtinguishingDemandResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.FireExtinguishingDemandResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireExtinguishingDemandResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireExtinguishingSaveRequest. */
    interface IFireExtinguishingSaveRequest {

        /** FireExtinguishingSaveRequest fireExtinguishingFlowTheory */
        fireExtinguishingFlowTheory?: (number|null);

        /** FireExtinguishingSaveRequest fireExtinguishingFlowActual */
        fireExtinguishingFlowActual?: (number|null);

        /** FireExtinguishingSaveRequest primaryLiquidFlowTheory */
        primaryLiquidFlowTheory?: (number|null);

        /** FireExtinguishingSaveRequest primaryLiquidFlowActual */
        primaryLiquidFlowActual?: (number|null);

        /** FireExtinguishingSaveRequest primaryLiquidUsageTheory */
        primaryLiquidUsageTheory?: (number|null);

        /** FireExtinguishingSaveRequest primaryLiquidUsageActual */
        primaryLiquidUsageActual?: (number|null);

        /** FireExtinguishingSaveRequest fireExtinguishingUsageTheory */
        fireExtinguishingUsageTheory?: (number|null);

        /** FireExtinguishingSaveRequest fireExtinguishingUsageActual */
        fireExtinguishingUsageActual?: (number|null);

        /** FireExtinguishingSaveRequest configFireExtinguishingFlowTheory */
        configFireExtinguishingFlowTheory?: (number|null);

        /** FireExtinguishingSaveRequest configFireExtinguishingFlowActual */
        configFireExtinguishingFlowActual?: (number|null);

        /** FireExtinguishingSaveRequest configFireExtinguishingUsageTheory */
        configFireExtinguishingUsageTheory?: (number|null);

        /** FireExtinguishingSaveRequest configFireExtinguishingUsageActual */
        configFireExtinguishingUsageActual?: (number|null);

        /** FireExtinguishingSaveRequest sceneId */
        sceneId?: (number|null);

        /** FireExtinguishingSaveRequest supplyStrength */
        supplyStrength?: (number|null);

        /** FireExtinguishingSaveRequest supplyTime */
        supplyTime?: (number|null);

        /** FireExtinguishingSaveRequest mixRatio */
        mixRatio?: (number|null);

        /** FireExtinguishingSaveRequest liquidTankDiameter */
        liquidTankDiameter?: (number|null);
    }

    /** Represents a FireExtinguishingSaveRequest. */
    class FireExtinguishingSaveRequest implements IFireExtinguishingSaveRequest {

        /**
         * Constructs a new FireExtinguishingSaveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IFireExtinguishingSaveRequest);

        /** FireExtinguishingSaveRequest fireExtinguishingFlowTheory. */
        public fireExtinguishingFlowTheory: number;

        /** FireExtinguishingSaveRequest fireExtinguishingFlowActual. */
        public fireExtinguishingFlowActual: number;

        /** FireExtinguishingSaveRequest primaryLiquidFlowTheory. */
        public primaryLiquidFlowTheory: number;

        /** FireExtinguishingSaveRequest primaryLiquidFlowActual. */
        public primaryLiquidFlowActual: number;

        /** FireExtinguishingSaveRequest primaryLiquidUsageTheory. */
        public primaryLiquidUsageTheory: number;

        /** FireExtinguishingSaveRequest primaryLiquidUsageActual. */
        public primaryLiquidUsageActual: number;

        /** FireExtinguishingSaveRequest fireExtinguishingUsageTheory. */
        public fireExtinguishingUsageTheory: number;

        /** FireExtinguishingSaveRequest fireExtinguishingUsageActual. */
        public fireExtinguishingUsageActual: number;

        /** FireExtinguishingSaveRequest configFireExtinguishingFlowTheory. */
        public configFireExtinguishingFlowTheory: number;

        /** FireExtinguishingSaveRequest configFireExtinguishingFlowActual. */
        public configFireExtinguishingFlowActual: number;

        /** FireExtinguishingSaveRequest configFireExtinguishingUsageTheory. */
        public configFireExtinguishingUsageTheory: number;

        /** FireExtinguishingSaveRequest configFireExtinguishingUsageActual. */
        public configFireExtinguishingUsageActual: number;

        /** FireExtinguishingSaveRequest sceneId. */
        public sceneId: number;

        /** FireExtinguishingSaveRequest supplyStrength. */
        public supplyStrength: number;

        /** FireExtinguishingSaveRequest supplyTime. */
        public supplyTime: number;

        /** FireExtinguishingSaveRequest mixRatio. */
        public mixRatio: number;

        /** FireExtinguishingSaveRequest liquidTankDiameter. */
        public liquidTankDiameter: number;

        /**
         * Creates a FireExtinguishingSaveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireExtinguishingSaveRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.FireExtinguishingSaveRequest;

        /**
         * Creates a plain object from a FireExtinguishingSaveRequest message. Also converts values to other types if specified.
         * @param message FireExtinguishingSaveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.FireExtinguishingSaveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireExtinguishingSaveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireExtinguishingSaveResponse. */
    interface IFireExtinguishingSaveResponse {
    }

    /** Represents a FireExtinguishingSaveResponse. */
    class FireExtinguishingSaveResponse implements IFireExtinguishingSaveResponse {

        /**
         * Constructs a new FireExtinguishingSaveResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IFireExtinguishingSaveResponse);

        /**
         * Creates a FireExtinguishingSaveResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireExtinguishingSaveResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.FireExtinguishingSaveResponse;

        /**
         * Creates a plain object from a FireExtinguishingSaveResponse message. Also converts values to other types if specified.
         * @param message FireExtinguishingSaveResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.FireExtinguishingSaveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireExtinguishingSaveResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoolingWaterDemandRequest. */
    interface ICoolingWaterDemandRequest {

        /** CoolingWaterDemandRequest num */
        num?: (number|null);

        /** CoolingWaterDemandRequest nearNum */
        nearNum?: (number|null);

        /** CoolingWaterDemandRequest diameter */
        diameter?: (number|null);

        /** CoolingWaterDemandRequest nearDiameter */
        nearDiameter?: (number|null);

        /** CoolingWaterDemandRequest coolingTime */
        coolingTime?: (number|null);

        /** CoolingWaterDemandRequest nearCoolingTime */
        nearCoolingTime?: (number|null);

        /** CoolingWaterDemandRequest supplyStrength */
        supplyStrength?: (number|null);

        /** CoolingWaterDemandRequest nearSupplyStrength */
        nearSupplyStrength?: (number|null);

        /** CoolingWaterDemandRequest singleFlow */
        singleFlow?: (number|null);
    }

    /** Represents a CoolingWaterDemandRequest. */
    class CoolingWaterDemandRequest implements ICoolingWaterDemandRequest {

        /**
         * Constructs a new CoolingWaterDemandRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.ICoolingWaterDemandRequest);

        /** CoolingWaterDemandRequest num. */
        public num: number;

        /** CoolingWaterDemandRequest nearNum. */
        public nearNum: number;

        /** CoolingWaterDemandRequest diameter. */
        public diameter: number;

        /** CoolingWaterDemandRequest nearDiameter. */
        public nearDiameter: number;

        /** CoolingWaterDemandRequest coolingTime. */
        public coolingTime: number;

        /** CoolingWaterDemandRequest nearCoolingTime. */
        public nearCoolingTime: number;

        /** CoolingWaterDemandRequest supplyStrength. */
        public supplyStrength: number;

        /** CoolingWaterDemandRequest nearSupplyStrength. */
        public nearSupplyStrength: number;

        /** CoolingWaterDemandRequest singleFlow. */
        public singleFlow: number;

        /**
         * Creates a CoolingWaterDemandRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoolingWaterDemandRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.CoolingWaterDemandRequest;

        /**
         * Creates a plain object from a CoolingWaterDemandRequest message. Also converts values to other types if specified.
         * @param message CoolingWaterDemandRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.CoolingWaterDemandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoolingWaterDemandRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoolingWaterDemandResponse. */
    interface ICoolingWaterDemandResponse {

        /** CoolingWaterDemandResponse flowTheory */
        flowTheory?: (number|null);

        /** CoolingWaterDemandResponse flowActual */
        flowActual?: (number|null);

        /** CoolingWaterDemandResponse nearFlowTheory */
        nearFlowTheory?: (number|null);

        /** CoolingWaterDemandResponse nearFlowActual */
        nearFlowActual?: (number|null);

        /** CoolingWaterDemandResponse usageTheory */
        usageTheory?: (number|null);

        /** CoolingWaterDemandResponse usageActual */
        usageActual?: (number|null);

        /** CoolingWaterDemandResponse nearUsageTheory */
        nearUsageTheory?: (number|null);

        /** CoolingWaterDemandResponse nearUsageActual */
        nearUsageActual?: (number|null);

        /** CoolingWaterDemandResponse totalUsageTheory */
        totalUsageTheory?: (number|null);

        /** CoolingWaterDemandResponse totalUsageActual */
        totalUsageActual?: (number|null);
    }

    /** Represents a CoolingWaterDemandResponse. */
    class CoolingWaterDemandResponse implements ICoolingWaterDemandResponse {

        /**
         * Constructs a new CoolingWaterDemandResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.ICoolingWaterDemandResponse);

        /** CoolingWaterDemandResponse flowTheory. */
        public flowTheory: number;

        /** CoolingWaterDemandResponse flowActual. */
        public flowActual: number;

        /** CoolingWaterDemandResponse nearFlowTheory. */
        public nearFlowTheory: number;

        /** CoolingWaterDemandResponse nearFlowActual. */
        public nearFlowActual: number;

        /** CoolingWaterDemandResponse usageTheory. */
        public usageTheory: number;

        /** CoolingWaterDemandResponse usageActual. */
        public usageActual: number;

        /** CoolingWaterDemandResponse nearUsageTheory. */
        public nearUsageTheory: number;

        /** CoolingWaterDemandResponse nearUsageActual. */
        public nearUsageActual: number;

        /** CoolingWaterDemandResponse totalUsageTheory. */
        public totalUsageTheory: number;

        /** CoolingWaterDemandResponse totalUsageActual. */
        public totalUsageActual: number;

        /**
         * Creates a CoolingWaterDemandResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoolingWaterDemandResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.CoolingWaterDemandResponse;

        /**
         * Creates a plain object from a CoolingWaterDemandResponse message. Also converts values to other types if specified.
         * @param message CoolingWaterDemandResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.CoolingWaterDemandResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoolingWaterDemandResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoolingWaterSaveRequest. */
    interface ICoolingWaterSaveRequest {

        /** CoolingWaterSaveRequest flowTheory */
        flowTheory?: (number|null);

        /** CoolingWaterSaveRequest flowActual */
        flowActual?: (number|null);

        /** CoolingWaterSaveRequest nearFlowTheory */
        nearFlowTheory?: (number|null);

        /** CoolingWaterSaveRequest nearFlowActual */
        nearFlowActual?: (number|null);

        /** CoolingWaterSaveRequest usageTheory */
        usageTheory?: (number|null);

        /** CoolingWaterSaveRequest usageActual */
        usageActual?: (number|null);

        /** CoolingWaterSaveRequest nearUsageTheory */
        nearUsageTheory?: (number|null);

        /** CoolingWaterSaveRequest nearUsageActual */
        nearUsageActual?: (number|null);

        /** CoolingWaterSaveRequest totalUsageTheory */
        totalUsageTheory?: (number|null);

        /** CoolingWaterSaveRequest totalUsageActual */
        totalUsageActual?: (number|null);

        /** CoolingWaterSaveRequest sceneId */
        sceneId?: (number|null);

        /** CoolingWaterSaveRequest num */
        num?: (number|null);

        /** CoolingWaterSaveRequest nearNum */
        nearNum?: (number|null);

        /** CoolingWaterSaveRequest diameter */
        diameter?: (number|null);

        /** CoolingWaterSaveRequest nearDiameter */
        nearDiameter?: (number|null);

        /** CoolingWaterSaveRequest coolingTime */
        coolingTime?: (number|null);

        /** CoolingWaterSaveRequest nearCoolingTime */
        nearCoolingTime?: (number|null);

        /** CoolingWaterSaveRequest supplyStrength */
        supplyStrength?: (number|null);

        /** CoolingWaterSaveRequest nearSupplyStrength */
        nearSupplyStrength?: (number|null);

        /** CoolingWaterSaveRequest singleFlow */
        singleFlow?: (number|null);
    }

    /** Represents a CoolingWaterSaveRequest. */
    class CoolingWaterSaveRequest implements ICoolingWaterSaveRequest {

        /**
         * Constructs a new CoolingWaterSaveRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.ICoolingWaterSaveRequest);

        /** CoolingWaterSaveRequest flowTheory. */
        public flowTheory: number;

        /** CoolingWaterSaveRequest flowActual. */
        public flowActual: number;

        /** CoolingWaterSaveRequest nearFlowTheory. */
        public nearFlowTheory: number;

        /** CoolingWaterSaveRequest nearFlowActual. */
        public nearFlowActual: number;

        /** CoolingWaterSaveRequest usageTheory. */
        public usageTheory: number;

        /** CoolingWaterSaveRequest usageActual. */
        public usageActual: number;

        /** CoolingWaterSaveRequest nearUsageTheory. */
        public nearUsageTheory: number;

        /** CoolingWaterSaveRequest nearUsageActual. */
        public nearUsageActual: number;

        /** CoolingWaterSaveRequest totalUsageTheory. */
        public totalUsageTheory: number;

        /** CoolingWaterSaveRequest totalUsageActual. */
        public totalUsageActual: number;

        /** CoolingWaterSaveRequest sceneId. */
        public sceneId: number;

        /** CoolingWaterSaveRequest num. */
        public num: number;

        /** CoolingWaterSaveRequest nearNum. */
        public nearNum: number;

        /** CoolingWaterSaveRequest diameter. */
        public diameter: number;

        /** CoolingWaterSaveRequest nearDiameter. */
        public nearDiameter: number;

        /** CoolingWaterSaveRequest coolingTime. */
        public coolingTime: number;

        /** CoolingWaterSaveRequest nearCoolingTime. */
        public nearCoolingTime: number;

        /** CoolingWaterSaveRequest supplyStrength. */
        public supplyStrength: number;

        /** CoolingWaterSaveRequest nearSupplyStrength. */
        public nearSupplyStrength: number;

        /** CoolingWaterSaveRequest singleFlow. */
        public singleFlow: number;

        /**
         * Creates a CoolingWaterSaveRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoolingWaterSaveRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.CoolingWaterSaveRequest;

        /**
         * Creates a plain object from a CoolingWaterSaveRequest message. Also converts values to other types if specified.
         * @param message CoolingWaterSaveRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.CoolingWaterSaveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoolingWaterSaveRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoolingWaterSaveResponse. */
    interface ICoolingWaterSaveResponse {
    }

    /** Represents a CoolingWaterSaveResponse. */
    class CoolingWaterSaveResponse implements ICoolingWaterSaveResponse {

        /**
         * Constructs a new CoolingWaterSaveResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.ICoolingWaterSaveResponse);

        /**
         * Creates a CoolingWaterSaveResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoolingWaterSaveResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.CoolingWaterSaveResponse;

        /**
         * Creates a plain object from a CoolingWaterSaveResponse message. Also converts values to other types if specified.
         * @param message CoolingWaterSaveResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.CoolingWaterSaveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoolingWaterSaveResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireExtinguishing. */
    interface IFireExtinguishing {

        /** FireExtinguishing type */
        type?: (number|null);

        /** FireExtinguishing num */
        num?: (number|null);
    }

    /** Represents a FireExtinguishing. */
    class FireExtinguishing implements IFireExtinguishing {

        /**
         * Constructs a new FireExtinguishing.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IFireExtinguishing);

        /** FireExtinguishing type. */
        public type: number;

        /** FireExtinguishing num. */
        public num: number;

        /**
         * Creates a FireExtinguishing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireExtinguishing
         */
        public static fromObject(object: { [k: string]: any }): accsim.FireExtinguishing;

        /**
         * Creates a plain object from a FireExtinguishing message. Also converts values to other types if specified.
         * @param message FireExtinguishing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.FireExtinguishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireExtinguishing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipmentPersonDemandRequest. */
    interface IEquipmentPersonDemandRequest {

        /** EquipmentPersonDemandRequest foams */
        foams?: (accsim.IFireExtinguishing[]|null);

        /** EquipmentPersonDemandRequest coolingTanks */
        coolingTanks?: (accsim.IFireExtinguishing[]|null);

        /** EquipmentPersonDemandRequest coolingNearTanks */
        coolingNearTanks?: (accsim.IFireExtinguishing[]|null);

        /** EquipmentPersonDemandRequest foamFlow */
        foamFlow?: (number|null);

        /** EquipmentPersonDemandRequest coolingFlow */
        coolingFlow?: (number|null);

        /** EquipmentPersonDemandRequest coolingNearFlow */
        coolingNearFlow?: (number|null);

        /** EquipmentPersonDemandRequest foamTruckFlow */
        foamTruckFlow?: (number|null);

        /** EquipmentPersonDemandRequest waterTruckFlow */
        waterTruckFlow?: (number|null);
    }

    /** Represents an EquipmentPersonDemandRequest. */
    class EquipmentPersonDemandRequest implements IEquipmentPersonDemandRequest {

        /**
         * Constructs a new EquipmentPersonDemandRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEquipmentPersonDemandRequest);

        /** EquipmentPersonDemandRequest foams. */
        public foams: accsim.IFireExtinguishing[];

        /** EquipmentPersonDemandRequest coolingTanks. */
        public coolingTanks: accsim.IFireExtinguishing[];

        /** EquipmentPersonDemandRequest coolingNearTanks. */
        public coolingNearTanks: accsim.IFireExtinguishing[];

        /** EquipmentPersonDemandRequest foamFlow. */
        public foamFlow: number;

        /** EquipmentPersonDemandRequest coolingFlow. */
        public coolingFlow: number;

        /** EquipmentPersonDemandRequest coolingNearFlow. */
        public coolingNearFlow: number;

        /** EquipmentPersonDemandRequest foamTruckFlow. */
        public foamTruckFlow: number;

        /** EquipmentPersonDemandRequest waterTruckFlow. */
        public waterTruckFlow: number;

        /**
         * Creates an EquipmentPersonDemandRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipmentPersonDemandRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.EquipmentPersonDemandRequest;

        /**
         * Creates a plain object from an EquipmentPersonDemandRequest message. Also converts values to other types if specified.
         * @param message EquipmentPersonDemandRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EquipmentPersonDemandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipmentPersonDemandRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Equipment. */
    interface IEquipment {

        /** Equipment type */
        type?: (string|null);

        /** Equipment modelVersion */
        modelVersion?: (string|null);

        /** Equipment operatorNum */
        operatorNum?: (number|null);

        /** Equipment num */
        num?: (number|null);
    }

    /** Represents an Equipment. */
    class Equipment implements IEquipment {

        /**
         * Constructs a new Equipment.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEquipment);

        /** Equipment type. */
        public type: string;

        /** Equipment modelVersion. */
        public modelVersion: string;

        /** Equipment operatorNum. */
        public operatorNum: number;

        /** Equipment num. */
        public num: number;

        /**
         * Creates an Equipment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Equipment
         */
        public static fromObject(object: { [k: string]: any }): accsim.Equipment;

        /**
         * Creates a plain object from an Equipment message. Also converts values to other types if specified.
         * @param message Equipment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.Equipment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Equipment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipmentPersonDemandResponse. */
    interface IEquipmentPersonDemandResponse {

        /** EquipmentPersonDemandResponse eqs */
        eqs?: (accsim.IEquipment[]|null);
    }

    /** Represents an EquipmentPersonDemandResponse. */
    class EquipmentPersonDemandResponse implements IEquipmentPersonDemandResponse {

        /**
         * Constructs a new EquipmentPersonDemandResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEquipmentPersonDemandResponse);

        /** EquipmentPersonDemandResponse eqs. */
        public eqs: accsim.IEquipment[];

        /**
         * Creates an EquipmentPersonDemandResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipmentPersonDemandResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.EquipmentPersonDemandResponse;

        /**
         * Creates a plain object from an EquipmentPersonDemandResponse message. Also converts values to other types if specified.
         * @param message EquipmentPersonDemandResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EquipmentPersonDemandResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipmentPersonDemandResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipmentRequireRequest. */
    interface IEquipmentRequireRequest {

        /** EquipmentRequireRequest sceneId */
        sceneId?: (number|null);
    }

    /** Represents an EquipmentRequireRequest. */
    class EquipmentRequireRequest implements IEquipmentRequireRequest {

        /**
         * Constructs a new EquipmentRequireRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEquipmentRequireRequest);

        /** EquipmentRequireRequest sceneId. */
        public sceneId: number;

        /**
         * Creates an EquipmentRequireRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipmentRequireRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.EquipmentRequireRequest;

        /**
         * Creates a plain object from an EquipmentRequireRequest message. Also converts values to other types if specified.
         * @param message EquipmentRequireRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EquipmentRequireRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipmentRequireRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipmentRequireResponse. */
    interface IEquipmentRequireResponse {

        /** EquipmentRequireResponse foamFlow */
        foamFlow?: (number|null);

        /** EquipmentRequireResponse flow */
        flow?: (number|null);

        /** EquipmentRequireResponse nearFlow */
        nearFlow?: (number|null);
    }

    /** Represents an EquipmentRequireResponse. */
    class EquipmentRequireResponse implements IEquipmentRequireResponse {

        /**
         * Constructs a new EquipmentRequireResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEquipmentRequireResponse);

        /** EquipmentRequireResponse foamFlow. */
        public foamFlow: number;

        /** EquipmentRequireResponse flow. */
        public flow: number;

        /** EquipmentRequireResponse nearFlow. */
        public nearFlow: number;

        /**
         * Creates an EquipmentRequireResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipmentRequireResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.EquipmentRequireResponse;

        /**
         * Creates a plain object from an EquipmentRequireResponse message. Also converts values to other types if specified.
         * @param message EquipmentRequireResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EquipmentRequireResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipmentRequireResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialBurningHeatGetRequest. */
    interface IMaterialBurningHeatGetRequest {
    }

    /** Represents a MaterialBurningHeatGetRequest. */
    class MaterialBurningHeatGetRequest implements IMaterialBurningHeatGetRequest {

        /**
         * Constructs a new MaterialBurningHeatGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IMaterialBurningHeatGetRequest);

        /**
         * Creates a MaterialBurningHeatGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialBurningHeatGetRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.MaterialBurningHeatGetRequest;

        /**
         * Creates a plain object from a MaterialBurningHeatGetRequest message. Also converts values to other types if specified.
         * @param message MaterialBurningHeatGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.MaterialBurningHeatGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialBurningHeatGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Material. */
    interface IMaterial {

        /** Material name */
        name?: (string|null);

        /** Material burningHeat */
        burningHeat?: (number|null);
    }

    /** Represents a Material. */
    class Material implements IMaterial {

        /**
         * Constructs a new Material.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IMaterial);

        /** Material name. */
        public name: string;

        /** Material burningHeat. */
        public burningHeat: number;

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Material
         */
        public static fromObject(object: { [k: string]: any }): accsim.Material;

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @param message Material
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.Material, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Material to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialBurningHeatGetResponse. */
    interface IMaterialBurningHeatGetResponse {

        /** MaterialBurningHeatGetResponse materials */
        materials?: (accsim.IMaterial[]|null);
    }

    /** Represents a MaterialBurningHeatGetResponse. */
    class MaterialBurningHeatGetResponse implements IMaterialBurningHeatGetResponse {

        /**
         * Constructs a new MaterialBurningHeatGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IMaterialBurningHeatGetResponse);

        /** MaterialBurningHeatGetResponse materials. */
        public materials: accsim.IMaterial[];

        /**
         * Creates a MaterialBurningHeatGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialBurningHeatGetResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.MaterialBurningHeatGetResponse;

        /**
         * Creates a plain object from a MaterialBurningHeatGetResponse message. Also converts values to other types if specified.
         * @param message MaterialBurningHeatGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.MaterialBurningHeatGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialBurningHeatGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterpriseAreaGetRequest. */
    interface IEnterpriseAreaGetRequest {

        /** EnterpriseAreaGetRequest enterpriseId */
        enterpriseId?: (number|null);
    }

    /** Represents an EnterpriseAreaGetRequest. */
    class EnterpriseAreaGetRequest implements IEnterpriseAreaGetRequest {

        /**
         * Constructs a new EnterpriseAreaGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEnterpriseAreaGetRequest);

        /** EnterpriseAreaGetRequest enterpriseId. */
        public enterpriseId: number;

        /**
         * Creates an EnterpriseAreaGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseAreaGetRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.EnterpriseAreaGetRequest;

        /**
         * Creates a plain object from an EnterpriseAreaGetRequest message. Also converts values to other types if specified.
         * @param message EnterpriseAreaGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EnterpriseAreaGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseAreaGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LngLat. */
    interface ILngLat {

        /** LngLat lng */
        lng?: (number|null);

        /** LngLat lat */
        lat?: (number|null);
    }

    /** Represents a LngLat. */
    class LngLat implements ILngLat {

        /**
         * Constructs a new LngLat.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.ILngLat);

        /** LngLat lng. */
        public lng: number;

        /** LngLat lat. */
        public lat: number;

        /**
         * Creates a LngLat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LngLat
         */
        public static fromObject(object: { [k: string]: any }): accsim.LngLat;

        /**
         * Creates a plain object from a LngLat message. Also converts values to other types if specified.
         * @param message LngLat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.LngLat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LngLat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point name */
        name?: (string|null);

        /** Point path */
        path?: (accsim.ILngLat[]|null);
    }

    /** Represents a Point. */
    class Point implements IPoint {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IPoint);

        /** Point name. */
        public name: string;

        /** Point path. */
        public path: accsim.ILngLat[];

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): accsim.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterpriseAreaGetResponse. */
    interface IEnterpriseAreaGetResponse {

        /** EnterpriseAreaGetResponse points */
        points?: (accsim.IPoint[]|null);
    }

    /** Represents an EnterpriseAreaGetResponse. */
    class EnterpriseAreaGetResponse implements IEnterpriseAreaGetResponse {

        /**
         * Constructs a new EnterpriseAreaGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEnterpriseAreaGetResponse);

        /** EnterpriseAreaGetResponse points. */
        public points: accsim.IPoint[];

        /**
         * Creates an EnterpriseAreaGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseAreaGetResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.EnterpriseAreaGetResponse;

        /**
         * Creates a plain object from an EnterpriseAreaGetResponse message. Also converts values to other types if specified.
         * @param message EnterpriseAreaGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EnterpriseAreaGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseAreaGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterprisesGetRequest. */
    interface IEnterprisesGetRequest {
    }

    /** Represents an EnterprisesGetRequest. */
    class EnterprisesGetRequest implements IEnterprisesGetRequest {

        /**
         * Constructs a new EnterprisesGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEnterprisesGetRequest);

        /**
         * Creates an EnterprisesGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterprisesGetRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.EnterprisesGetRequest;

        /**
         * Creates a plain object from an EnterprisesGetRequest message. Also converts values to other types if specified.
         * @param message EnterprisesGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EnterprisesGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterprisesGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Enterprise. */
    interface IEnterprise {

        /** Enterprise id */
        id?: (number|null);

        /** Enterprise name */
        name?: (string|null);

        /** Enterprise lng */
        lng?: (number|null);

        /** Enterprise lat */
        lat?: (number|null);
    }

    /** Represents an Enterprise. */
    class Enterprise implements IEnterprise {

        /**
         * Constructs a new Enterprise.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEnterprise);

        /** Enterprise id. */
        public id: number;

        /** Enterprise name. */
        public name: string;

        /** Enterprise lng. */
        public lng: number;

        /** Enterprise lat. */
        public lat: number;

        /**
         * Creates an Enterprise message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Enterprise
         */
        public static fromObject(object: { [k: string]: any }): accsim.Enterprise;

        /**
         * Creates a plain object from an Enterprise message. Also converts values to other types if specified.
         * @param message Enterprise
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.Enterprise, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Enterprise to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterprisesGetResponse. */
    interface IEnterprisesGetResponse {

        /** EnterprisesGetResponse enterprises */
        enterprises?: (accsim.IEnterprise[]|null);
    }

    /** Represents an EnterprisesGetResponse. */
    class EnterprisesGetResponse implements IEnterprisesGetResponse {

        /**
         * Constructs a new EnterprisesGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEnterprisesGetResponse);

        /** EnterprisesGetResponse enterprises. */
        public enterprises: accsim.IEnterprise[];

        /**
         * Creates an EnterprisesGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterprisesGetResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.EnterprisesGetResponse;

        /**
         * Creates a plain object from an EnterprisesGetResponse message. Also converts values to other types if specified.
         * @param message EnterprisesGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EnterprisesGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterprisesGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterpriseGetRequest. */
    interface IEnterpriseGetRequest {

        /** EnterpriseGetRequest id */
        id?: (number|null);
    }

    /** Represents an EnterpriseGetRequest. */
    class EnterpriseGetRequest implements IEnterpriseGetRequest {

        /**
         * Constructs a new EnterpriseGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEnterpriseGetRequest);

        /** EnterpriseGetRequest id. */
        public id: number;

        /**
         * Creates an EnterpriseGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseGetRequest
         */
        public static fromObject(object: { [k: string]: any }): accsim.EnterpriseGetRequest;

        /**
         * Creates a plain object from an EnterpriseGetRequest message. Also converts values to other types if specified.
         * @param message EnterpriseGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EnterpriseGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterpriseGetResponse. */
    interface IEnterpriseGetResponse {

        /** EnterpriseGetResponse enterprise */
        enterprise?: (accsim.IEnterprise|null);
    }

    /** Represents an EnterpriseGetResponse. */
    class EnterpriseGetResponse implements IEnterpriseGetResponse {

        /**
         * Constructs a new EnterpriseGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: accsim.IEnterpriseGetResponse);

        /** EnterpriseGetResponse enterprise. */
        public enterprise?: (accsim.IEnterprise|null);

        /**
         * Creates an EnterpriseGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterpriseGetResponse
         */
        public static fromObject(object: { [k: string]: any }): accsim.EnterpriseGetResponse;

        /**
         * Creates a plain object from an EnterpriseGetResponse message. Also converts values to other types if specified.
         * @param message EnterpriseGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: accsim.EnterpriseGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterpriseGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an AccSimService */
    class AccSimService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AccSimService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls AccSceneGet.
         * @param request AccSceneGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AccSceneGetResponse
         */
        public accSceneGet(request: accsim.IAccSceneGetRequest, callback: accsim.AccSimService.AccSceneGetCallback): void;

        /**
         * Calls AccSceneGet.
         * @param request AccSceneGetRequest message or plain object
         * @returns Promise
         */
        public accSceneGet(request: accsim.IAccSceneGetRequest): Promise<accsim.AccSceneGetResponse>;

        /**
         * Calls AccSceneSave.
         * @param request AccSceneSaveRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AccSceneSaveResponse
         */
        public accSceneSave(request: accsim.IAccSceneSaveRequest, callback: accsim.AccSimService.AccSceneSaveCallback): void;

        /**
         * Calls AccSceneSave.
         * @param request AccSceneSaveRequest message or plain object
         * @returns Promise
         */
        public accSceneSave(request: accsim.IAccSceneSaveRequest): Promise<accsim.AccSceneSaveResponse>;

        /**
         * Calls AccSceneDelete.
         * @param request AccSceneDeleteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AccSceneDeleteResponse
         */
        public accSceneDelete(request: accsim.IAccSceneDeleteRequest, callback: accsim.AccSimService.AccSceneDeleteCallback): void;

        /**
         * Calls AccSceneDelete.
         * @param request AccSceneDeleteRequest message or plain object
         * @returns Promise
         */
        public accSceneDelete(request: accsim.IAccSceneDeleteRequest): Promise<accsim.AccSceneDeleteResponse>;

        /**
         * Calls AccSceneInfo.
         * @param request AccSceneInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AccSceneInfoResponse
         */
        public accSceneInfo(request: accsim.IAccSceneInfoRequest, callback: accsim.AccSimService.AccSceneInfoCallback): void;

        /**
         * Calls AccSceneInfo.
         * @param request AccSceneInfoRequest message or plain object
         * @returns Promise
         */
        public accSceneInfo(request: accsim.IAccSceneInfoRequest): Promise<accsim.AccSceneInfoResponse>;

        /**
         * Calls PoolFireCalc.
         * @param request PoolFireCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PoolFireCalcResponse
         */
        public poolFireCalc(request: accsim.IPoolFireCalcRequest, callback: accsim.AccSimService.PoolFireCalcCallback): void;

        /**
         * Calls PoolFireCalc.
         * @param request PoolFireCalcRequest message or plain object
         * @returns Promise
         */
        public poolFireCalc(request: accsim.IPoolFireCalcRequest): Promise<accsim.PoolFireCalcResponse>;

        /**
         * Calls FlowingFireCalc.
         * @param request FlowingFireCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FlowingFireCalcResponse
         */
        public flowingFireCalc(request: accsim.IFlowingFireCalcRequest, callback: accsim.AccSimService.FlowingFireCalcCallback): void;

        /**
         * Calls FlowingFireCalc.
         * @param request FlowingFireCalcRequest message or plain object
         * @returns Promise
         */
        public flowingFireCalc(request: accsim.IFlowingFireCalcRequest): Promise<accsim.FlowingFireCalcResponse>;

        /**
         * Calls SealRingCalc.
         * @param request SealRingCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SealRingCalcResponse
         */
        public sealRingCalc(request: accsim.ISealRingCalcRequest, callback: accsim.AccSimService.SealRingCalcCallback): void;

        /**
         * Calls SealRingCalc.
         * @param request SealRingCalcRequest message or plain object
         * @returns Promise
         */
        public sealRingCalc(request: accsim.ISealRingCalcRequest): Promise<accsim.SealRingCalcResponse>;

        /**
         * Calls JetFireCalc.
         * @param request JetFireCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and JetFireCalcResponse
         */
        public jetFireCalc(request: accsim.IJetFireCalcRequest, callback: accsim.AccSimService.JetFireCalcCallback): void;

        /**
         * Calls JetFireCalc.
         * @param request JetFireCalcRequest message or plain object
         * @returns Promise
         */
        public jetFireCalc(request: accsim.IJetFireCalcRequest): Promise<accsim.JetFireCalcResponse>;

        /**
         * Calls BallFireCalc.
         * @param request BallFireCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and BallFireCalcResponse
         */
        public ballFireCalc(request: accsim.IBallFireCalcRequest, callback: accsim.AccSimService.BallFireCalcCallback): void;

        /**
         * Calls BallFireCalc.
         * @param request BallFireCalcRequest message or plain object
         * @returns Promise
         */
        public ballFireCalc(request: accsim.IBallFireCalcRequest): Promise<accsim.BallFireCalcResponse>;

        /**
         * Calls FireExtinguishingDemand.
         * @param request FireExtinguishingDemandRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireExtinguishingDemandResponse
         */
        public fireExtinguishingDemand(request: accsim.IFireExtinguishingDemandRequest, callback: accsim.AccSimService.FireExtinguishingDemandCallback): void;

        /**
         * Calls FireExtinguishingDemand.
         * @param request FireExtinguishingDemandRequest message or plain object
         * @returns Promise
         */
        public fireExtinguishingDemand(request: accsim.IFireExtinguishingDemandRequest): Promise<accsim.FireExtinguishingDemandResponse>;

        /**
         * Calls FireExtinguishingSave.
         * @param request FireExtinguishingSaveRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireExtinguishingSaveResponse
         */
        public fireExtinguishingSave(request: accsim.IFireExtinguishingSaveRequest, callback: accsim.AccSimService.FireExtinguishingSaveCallback): void;

        /**
         * Calls FireExtinguishingSave.
         * @param request FireExtinguishingSaveRequest message or plain object
         * @returns Promise
         */
        public fireExtinguishingSave(request: accsim.IFireExtinguishingSaveRequest): Promise<accsim.FireExtinguishingSaveResponse>;

        /**
         * Calls CoolingWaterDemand.
         * @param request CoolingWaterDemandRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CoolingWaterDemandResponse
         */
        public coolingWaterDemand(request: accsim.ICoolingWaterDemandRequest, callback: accsim.AccSimService.CoolingWaterDemandCallback): void;

        /**
         * Calls CoolingWaterDemand.
         * @param request CoolingWaterDemandRequest message or plain object
         * @returns Promise
         */
        public coolingWaterDemand(request: accsim.ICoolingWaterDemandRequest): Promise<accsim.CoolingWaterDemandResponse>;

        /**
         * Calls CoolingWaterSave.
         * @param request CoolingWaterSaveRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CoolingWaterSaveResponse
         */
        public coolingWaterSave(request: accsim.ICoolingWaterSaveRequest, callback: accsim.AccSimService.CoolingWaterSaveCallback): void;

        /**
         * Calls CoolingWaterSave.
         * @param request CoolingWaterSaveRequest message or plain object
         * @returns Promise
         */
        public coolingWaterSave(request: accsim.ICoolingWaterSaveRequest): Promise<accsim.CoolingWaterSaveResponse>;

        /**
         * Calls EquipmentPersonDemand.
         * @param request EquipmentPersonDemandRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EquipmentPersonDemandResponse
         */
        public equipmentPersonDemand(request: accsim.IEquipmentPersonDemandRequest, callback: accsim.AccSimService.EquipmentPersonDemandCallback): void;

        /**
         * Calls EquipmentPersonDemand.
         * @param request EquipmentPersonDemandRequest message or plain object
         * @returns Promise
         */
        public equipmentPersonDemand(request: accsim.IEquipmentPersonDemandRequest): Promise<accsim.EquipmentPersonDemandResponse>;

        /**
         * Calls EquipmentRequire.
         * @param request EquipmentRequireRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EquipmentRequireResponse
         */
        public equipmentRequire(request: accsim.IEquipmentRequireRequest, callback: accsim.AccSimService.EquipmentRequireCallback): void;

        /**
         * Calls EquipmentRequire.
         * @param request EquipmentRequireRequest message or plain object
         * @returns Promise
         */
        public equipmentRequire(request: accsim.IEquipmentRequireRequest): Promise<accsim.EquipmentRequireResponse>;

        /**
         * Calls MaterialBurningHeatGet.
         * @param request MaterialBurningHeatGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialBurningHeatGetResponse
         */
        public materialBurningHeatGet(request: accsim.IMaterialBurningHeatGetRequest, callback: accsim.AccSimService.MaterialBurningHeatGetCallback): void;

        /**
         * Calls MaterialBurningHeatGet.
         * @param request MaterialBurningHeatGetRequest message or plain object
         * @returns Promise
         */
        public materialBurningHeatGet(request: accsim.IMaterialBurningHeatGetRequest): Promise<accsim.MaterialBurningHeatGetResponse>;

        /**
         * Calls EnterpriseAreaGet.
         * @param request EnterpriseAreaGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EnterpriseAreaGetResponse
         */
        public enterpriseAreaGet(request: accsim.IEnterpriseAreaGetRequest, callback: accsim.AccSimService.EnterpriseAreaGetCallback): void;

        /**
         * Calls EnterpriseAreaGet.
         * @param request EnterpriseAreaGetRequest message or plain object
         * @returns Promise
         */
        public enterpriseAreaGet(request: accsim.IEnterpriseAreaGetRequest): Promise<accsim.EnterpriseAreaGetResponse>;

        /**
         * Calls EnterprisesGet.
         * @param request EnterprisesGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EnterprisesGetResponse
         */
        public enterprisesGet(request: accsim.IEnterprisesGetRequest, callback: accsim.AccSimService.EnterprisesGetCallback): void;

        /**
         * Calls EnterprisesGet.
         * @param request EnterprisesGetRequest message or plain object
         * @returns Promise
         */
        public enterprisesGet(request: accsim.IEnterprisesGetRequest): Promise<accsim.EnterprisesGetResponse>;

        /**
         * Calls EnterpriseGet.
         * @param request EnterpriseGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EnterpriseGetResponse
         */
        public enterpriseGet(request: accsim.IEnterpriseGetRequest, callback: accsim.AccSimService.EnterpriseGetCallback): void;

        /**
         * Calls EnterpriseGet.
         * @param request EnterpriseGetRequest message or plain object
         * @returns Promise
         */
        public enterpriseGet(request: accsim.IEnterpriseGetRequest): Promise<accsim.EnterpriseGetResponse>;
    }

    namespace AccSimService {

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneGet}.
         * @param error Error, if any
         * @param [response] AccSceneGetResponse
         */
        type AccSceneGetCallback = (error: (Error|null), response?: accsim.AccSceneGetResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneSave}.
         * @param error Error, if any
         * @param [response] AccSceneSaveResponse
         */
        type AccSceneSaveCallback = (error: (Error|null), response?: accsim.AccSceneSaveResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneDelete}.
         * @param error Error, if any
         * @param [response] AccSceneDeleteResponse
         */
        type AccSceneDeleteCallback = (error: (Error|null), response?: accsim.AccSceneDeleteResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#accSceneInfo}.
         * @param error Error, if any
         * @param [response] AccSceneInfoResponse
         */
        type AccSceneInfoCallback = (error: (Error|null), response?: accsim.AccSceneInfoResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#poolFireCalc}.
         * @param error Error, if any
         * @param [response] PoolFireCalcResponse
         */
        type PoolFireCalcCallback = (error: (Error|null), response?: accsim.PoolFireCalcResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#flowingFireCalc}.
         * @param error Error, if any
         * @param [response] FlowingFireCalcResponse
         */
        type FlowingFireCalcCallback = (error: (Error|null), response?: accsim.FlowingFireCalcResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#sealRingCalc}.
         * @param error Error, if any
         * @param [response] SealRingCalcResponse
         */
        type SealRingCalcCallback = (error: (Error|null), response?: accsim.SealRingCalcResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#jetFireCalc}.
         * @param error Error, if any
         * @param [response] JetFireCalcResponse
         */
        type JetFireCalcCallback = (error: (Error|null), response?: accsim.JetFireCalcResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#ballFireCalc}.
         * @param error Error, if any
         * @param [response] BallFireCalcResponse
         */
        type BallFireCalcCallback = (error: (Error|null), response?: accsim.BallFireCalcResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#fireExtinguishingDemand}.
         * @param error Error, if any
         * @param [response] FireExtinguishingDemandResponse
         */
        type FireExtinguishingDemandCallback = (error: (Error|null), response?: accsim.FireExtinguishingDemandResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#fireExtinguishingSave}.
         * @param error Error, if any
         * @param [response] FireExtinguishingSaveResponse
         */
        type FireExtinguishingSaveCallback = (error: (Error|null), response?: accsim.FireExtinguishingSaveResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#coolingWaterDemand}.
         * @param error Error, if any
         * @param [response] CoolingWaterDemandResponse
         */
        type CoolingWaterDemandCallback = (error: (Error|null), response?: accsim.CoolingWaterDemandResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#coolingWaterSave}.
         * @param error Error, if any
         * @param [response] CoolingWaterSaveResponse
         */
        type CoolingWaterSaveCallback = (error: (Error|null), response?: accsim.CoolingWaterSaveResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#equipmentPersonDemand}.
         * @param error Error, if any
         * @param [response] EquipmentPersonDemandResponse
         */
        type EquipmentPersonDemandCallback = (error: (Error|null), response?: accsim.EquipmentPersonDemandResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#equipmentRequire}.
         * @param error Error, if any
         * @param [response] EquipmentRequireResponse
         */
        type EquipmentRequireCallback = (error: (Error|null), response?: accsim.EquipmentRequireResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#materialBurningHeatGet}.
         * @param error Error, if any
         * @param [response] MaterialBurningHeatGetResponse
         */
        type MaterialBurningHeatGetCallback = (error: (Error|null), response?: accsim.MaterialBurningHeatGetResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#enterpriseAreaGet}.
         * @param error Error, if any
         * @param [response] EnterpriseAreaGetResponse
         */
        type EnterpriseAreaGetCallback = (error: (Error|null), response?: accsim.EnterpriseAreaGetResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#enterprisesGet}.
         * @param error Error, if any
         * @param [response] EnterprisesGetResponse
         */
        type EnterprisesGetCallback = (error: (Error|null), response?: accsim.EnterprisesGetResponse) => void;

        /**
         * Callback as used by {@link accsim.AccSimService#enterpriseGet}.
         * @param error Error, if any
         * @param [response] EnterpriseGetResponse
         */
        type EnterpriseGetCallback = (error: (Error|null), response?: accsim.EnterpriseGetResponse) => void;
    }
}
