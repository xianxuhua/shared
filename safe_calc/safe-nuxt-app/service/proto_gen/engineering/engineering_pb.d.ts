import * as $protobuf from "protobufjs";
/** Namespace engineering. */
export namespace engineering {

    /** Properties of a FireLoadFactorRequest. */
    interface IFireLoadFactorRequest {

        /** FireLoadFactorRequest Qi */
        Qi?: (number|null);

        /** FireLoadFactorRequest Qm */
        Qm?: (number|null);
    }

    /** Represents a FireLoadFactorRequest. */
    class FireLoadFactorRequest implements IFireLoadFactorRequest {

        /**
         * Constructs a new FireLoadFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFireLoadFactorRequest);

        /** FireLoadFactorRequest Qi. */
        public Qi: number;

        /** FireLoadFactorRequest Qm. */
        public Qm: number;

        /**
         * Creates a FireLoadFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireLoadFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.FireLoadFactorRequest;

        /**
         * Creates a plain object from a FireLoadFactorRequest message. Also converts values to other types if specified.
         * @param message FireLoadFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FireLoadFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireLoadFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireLoadFactorResponse. */
    interface IFireLoadFactorResponse {

        /** FireLoadFactorResponse q */
        q?: (number|null);
    }

    /** Represents a FireLoadFactorResponse. */
    class FireLoadFactorResponse implements IFireLoadFactorResponse {

        /**
         * Constructs a new FireLoadFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFireLoadFactorResponse);

        /** FireLoadFactorResponse q. */
        public q: number;

        /**
         * Creates a FireLoadFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireLoadFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.FireLoadFactorResponse;

        /**
         * Creates a plain object from a FireLoadFactorResponse message. Also converts values to other types if specified.
         * @param message FireLoadFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FireLoadFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireLoadFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AreaFactorRequest. */
    interface IAreaFactorRequest {

        /** AreaFactorRequest l */
        l?: (number|null);

        /** AreaFactorRequest b */
        b?: (number|null);
    }

    /** Represents an AreaFactorRequest. */
    class AreaFactorRequest implements IAreaFactorRequest {

        /**
         * Constructs a new AreaFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IAreaFactorRequest);

        /** AreaFactorRequest l. */
        public l: number;

        /** AreaFactorRequest b. */
        public b: number;

        /**
         * Creates an AreaFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AreaFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.AreaFactorRequest;

        /**
         * Creates a plain object from an AreaFactorRequest message. Also converts values to other types if specified.
         * @param message AreaFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.AreaFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AreaFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AreaFactorResponse. */
    interface IAreaFactorResponse {

        /** AreaFactorResponse g */
        g?: (number|null);
    }

    /** Represents an AreaFactorResponse. */
    class AreaFactorResponse implements IAreaFactorResponse {

        /**
         * Constructs a new AreaFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IAreaFactorResponse);

        /** AreaFactorResponse g. */
        public g: number;

        /**
         * Creates an AreaFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AreaFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.AreaFactorResponse;

        /**
         * Creates a plain object from an AreaFactorResponse message. Also converts values to other types if specified.
         * @param message AreaFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.AreaFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AreaFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireSpreadFactorRequest. */
    interface IFireSpreadFactorRequest {

        /** FireSpreadFactorRequest T */
        T?: (number|null);

        /** FireSpreadFactorRequest indoorItemsAverageSizeM */
        indoorItemsAverageSizeM?: (number|null);

        /** FireSpreadFactorRequest flamePropagationLevelM */
        flamePropagationLevelM?: (number|null);
    }

    /** Represents a FireSpreadFactorRequest. */
    class FireSpreadFactorRequest implements IFireSpreadFactorRequest {

        /**
         * Constructs a new FireSpreadFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFireSpreadFactorRequest);

        /** FireSpreadFactorRequest T. */
        public T: number;

        /** FireSpreadFactorRequest indoorItemsAverageSizeM. */
        public indoorItemsAverageSizeM: number;

        /** FireSpreadFactorRequest flamePropagationLevelM. */
        public flamePropagationLevelM: number;

        /**
         * Creates a FireSpreadFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireSpreadFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.FireSpreadFactorRequest;

        /**
         * Creates a plain object from a FireSpreadFactorRequest message. Also converts values to other types if specified.
         * @param message FireSpreadFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FireSpreadFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireSpreadFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireSpreadFactorResponse. */
    interface IFireSpreadFactorResponse {

        /** FireSpreadFactorResponse i */
        i?: (number|null);
    }

    /** Represents a FireSpreadFactorResponse. */
    class FireSpreadFactorResponse implements IFireSpreadFactorResponse {

        /**
         * Constructs a new FireSpreadFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFireSpreadFactorResponse);

        /** FireSpreadFactorResponse i. */
        public i: number;

        /**
         * Creates a FireSpreadFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireSpreadFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.FireSpreadFactorResponse;

        /**
         * Creates a plain object from a FireSpreadFactorResponse message. Also converts values to other types if specified.
         * @param message FireSpreadFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FireSpreadFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireSpreadFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VentilationFactorRequest. */
    interface IVentilationFactorRequest {

        /** VentilationFactorRequest Qm */
        Qm?: (number|null);

        /** VentilationFactorRequest k */
        k?: (number|null);

        /** VentilationFactorRequest h */
        h?: (number|null);
    }

    /** Represents a VentilationFactorRequest. */
    class VentilationFactorRequest implements IVentilationFactorRequest {

        /**
         * Constructs a new VentilationFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IVentilationFactorRequest);

        /** VentilationFactorRequest Qm. */
        public Qm: number;

        /** VentilationFactorRequest k. */
        public k: number;

        /** VentilationFactorRequest h. */
        public h: number;

        /**
         * Creates a VentilationFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VentilationFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.VentilationFactorRequest;

        /**
         * Creates a plain object from a VentilationFactorRequest message. Also converts values to other types if specified.
         * @param message VentilationFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.VentilationFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VentilationFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VentilationFactorResponse. */
    interface IVentilationFactorResponse {

        /** VentilationFactorResponse v */
        v?: (number|null);
    }

    /** Represents a VentilationFactorResponse. */
    class VentilationFactorResponse implements IVentilationFactorResponse {

        /**
         * Constructs a new VentilationFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IVentilationFactorResponse);

        /** VentilationFactorResponse v. */
        public v: number;

        /**
         * Creates a VentilationFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VentilationFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.VentilationFactorResponse;

        /**
         * Creates a plain object from a VentilationFactorResponse message. Also converts values to other types if specified.
         * @param message VentilationFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.VentilationFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VentilationFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelFactorRequest. */
    interface IChannelFactorRequest {

        /** ChannelFactorRequest b */
        b?: (number|null);

        /** ChannelFactorRequest hPlus */
        hPlus?: (number|null);

        /** ChannelFactorRequest hSub */
        hSub?: (number|null);
    }

    /** Represents a ChannelFactorRequest. */
    class ChannelFactorRequest implements IChannelFactorRequest {

        /**
         * Constructs a new ChannelFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IChannelFactorRequest);

        /** ChannelFactorRequest b. */
        public b: number;

        /** ChannelFactorRequest hPlus. */
        public hPlus: number;

        /** ChannelFactorRequest hSub. */
        public hSub: number;

        /**
         * Creates a ChannelFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.ChannelFactorRequest;

        /**
         * Creates a plain object from a ChannelFactorRequest message. Also converts values to other types if specified.
         * @param message ChannelFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.ChannelFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelFactorResponse. */
    interface IChannelFactorResponse {

        /** ChannelFactorResponse z */
        z?: (number|null);
    }

    /** Represents a ChannelFactorResponse. */
    class ChannelFactorResponse implements IChannelFactorResponse {

        /**
         * Constructs a new ChannelFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IChannelFactorResponse);

        /** ChannelFactorResponse z. */
        public z: number;

        /**
         * Creates a ChannelFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.ChannelFactorResponse;

        /**
         * Creates a plain object from a ChannelFactorResponse message. Also converts values to other types if specified.
         * @param message ChannelFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.ChannelFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FloorFactorRequest. */
    interface IFloorFactorRequest {

        /** FloorFactorRequest E */
        E?: (number|null);
    }

    /** Represents a FloorFactorRequest. */
    class FloorFactorRequest implements IFloorFactorRequest {

        /**
         * Constructs a new FloorFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFloorFactorRequest);

        /** FloorFactorRequest E. */
        public E: number;

        /**
         * Creates a FloorFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FloorFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.FloorFactorRequest;

        /**
         * Creates a plain object from a FloorFactorRequest message. Also converts values to other types if specified.
         * @param message FloorFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FloorFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FloorFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FloorFactorResponse. */
    interface IFloorFactorResponse {

        /** FloorFactorResponse e */
        e?: (number|null);
    }

    /** Represents a FloorFactorResponse. */
    class FloorFactorResponse implements IFloorFactorResponse {

        /**
         * Constructs a new FloorFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFloorFactorResponse);

        /** FloorFactorResponse e. */
        public e: number;

        /**
         * Creates a FloorFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FloorFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.FloorFactorResponse;

        /**
         * Creates a plain object from a FloorFactorResponse message. Also converts values to other types if specified.
         * @param message FloorFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FloorFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FloorFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PotentialRiskRequest. */
    interface IPotentialRiskRequest {

        /** PotentialRiskRequest q */
        q?: (number|null);

        /** PotentialRiskRequest i */
        i?: (number|null);

        /** PotentialRiskRequest g */
        g?: (number|null);

        /** PotentialRiskRequest e */
        e?: (number|null);

        /** PotentialRiskRequest v */
        v?: (number|null);

        /** PotentialRiskRequest z */
        z?: (number|null);
    }

    /** Represents a PotentialRiskRequest. */
    class PotentialRiskRequest implements IPotentialRiskRequest {

        /**
         * Constructs a new PotentialRiskRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IPotentialRiskRequest);

        /** PotentialRiskRequest q. */
        public q: number;

        /** PotentialRiskRequest i. */
        public i: number;

        /** PotentialRiskRequest g. */
        public g: number;

        /** PotentialRiskRequest e. */
        public e: number;

        /** PotentialRiskRequest v. */
        public v: number;

        /** PotentialRiskRequest z. */
        public z: number;

        /**
         * Creates a PotentialRiskRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PotentialRiskRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.PotentialRiskRequest;

        /**
         * Creates a plain object from a PotentialRiskRequest message. Also converts values to other types if specified.
         * @param message PotentialRiskRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.PotentialRiskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PotentialRiskRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PotentialRiskResponse. */
    interface IPotentialRiskResponse {

        /** PotentialRiskResponse P */
        P?: (number|null);
    }

    /** Represents a PotentialRiskResponse. */
    class PotentialRiskResponse implements IPotentialRiskResponse {

        /**
         * Constructs a new PotentialRiskResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IPotentialRiskResponse);

        /** PotentialRiskResponse P. */
        public P: number;

        /**
         * Creates a PotentialRiskResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PotentialRiskResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.PotentialRiskResponse;

        /**
         * Creates a plain object from a PotentialRiskResponse message. Also converts values to other types if specified.
         * @param message PotentialRiskResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.PotentialRiskResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PotentialRiskResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityFactorRequest. */
    interface IActivityFactorRequest {

        /** ActivityFactorRequest mainActivity */
        mainActivity?: (number|null);

        /** ActivityFactorRequest secondaryActivity */
        secondaryActivity?: (number|null);

        /** ActivityFactorRequest indoorHeatingSystem */
        indoorHeatingSystem?: (number|null);

        /** ActivityFactorRequest electricalEquipment */
        electricalEquipment?: (number|null);

        /** ActivityFactorRequest combustible */
        combustible?: (number|null);
    }

    /** Represents an ActivityFactorRequest. */
    class ActivityFactorRequest implements IActivityFactorRequest {

        /**
         * Constructs a new ActivityFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IActivityFactorRequest);

        /** ActivityFactorRequest mainActivity. */
        public mainActivity: number;

        /** ActivityFactorRequest secondaryActivity. */
        public secondaryActivity: number;

        /** ActivityFactorRequest indoorHeatingSystem. */
        public indoorHeatingSystem: number;

        /** ActivityFactorRequest electricalEquipment. */
        public electricalEquipment: number;

        /** ActivityFactorRequest combustible. */
        public combustible: number;

        /**
         * Creates an ActivityFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.ActivityFactorRequest;

        /**
         * Creates a plain object from an ActivityFactorRequest message. Also converts values to other types if specified.
         * @param message ActivityFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.ActivityFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityFactorResponse. */
    interface IActivityFactorResponse {

        /** ActivityFactorResponse a */
        a?: (number|null);
    }

    /** Represents an ActivityFactorResponse. */
    class ActivityFactorResponse implements IActivityFactorResponse {

        /**
         * Constructs a new ActivityFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IActivityFactorResponse);

        /** ActivityFactorResponse a. */
        public a: number;

        /**
         * Creates an ActivityFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.ActivityFactorResponse;

        /**
         * Creates a plain object from an ActivityFactorResponse message. Also converts values to other types if specified.
         * @param message ActivityFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.ActivityFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EvacuationTimeFactorRequest. */
    interface IEvacuationTimeFactorRequest {

        /** EvacuationTimeFactorRequest p */
        p?: (number|null);

        /** EvacuationTimeFactorRequest xBig */
        xBig?: (number|null);

        /** EvacuationTimeFactorRequest xSmall */
        xSmall?: (number|null);

        /** EvacuationTimeFactorRequest b */
        b?: (number|null);

        /** EvacuationTimeFactorRequest l */
        l?: (number|null);

        /** EvacuationTimeFactorRequest hPlus */
        hPlus?: (number|null);

        /** EvacuationTimeFactorRequest hSub */
        hSub?: (number|null);

        /** EvacuationTimeFactorRequest K */
        K?: (number|null);

        /** EvacuationTimeFactorRequest e */
        e?: (number|null);
    }

    /** Represents an EvacuationTimeFactorRequest. */
    class EvacuationTimeFactorRequest implements IEvacuationTimeFactorRequest {

        /**
         * Constructs a new EvacuationTimeFactorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IEvacuationTimeFactorRequest);

        /** EvacuationTimeFactorRequest p. */
        public p: number;

        /** EvacuationTimeFactorRequest xBig. */
        public xBig: number;

        /** EvacuationTimeFactorRequest xSmall. */
        public xSmall: number;

        /** EvacuationTimeFactorRequest b. */
        public b: number;

        /** EvacuationTimeFactorRequest l. */
        public l: number;

        /** EvacuationTimeFactorRequest hPlus. */
        public hPlus: number;

        /** EvacuationTimeFactorRequest hSub. */
        public hSub: number;

        /** EvacuationTimeFactorRequest K. */
        public K: number;

        /** EvacuationTimeFactorRequest e. */
        public e: number;

        /**
         * Creates an EvacuationTimeFactorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvacuationTimeFactorRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.EvacuationTimeFactorRequest;

        /**
         * Creates a plain object from an EvacuationTimeFactorRequest message. Also converts values to other types if specified.
         * @param message EvacuationTimeFactorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.EvacuationTimeFactorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvacuationTimeFactorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EvacuationTimeFactorResponse. */
    interface IEvacuationTimeFactorResponse {

        /** EvacuationTimeFactorResponse t */
        t?: (number|null);
    }

    /** Represents an EvacuationTimeFactorResponse. */
    class EvacuationTimeFactorResponse implements IEvacuationTimeFactorResponse {

        /**
         * Constructs a new EvacuationTimeFactorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IEvacuationTimeFactorResponse);

        /** EvacuationTimeFactorResponse t. */
        public t: number;

        /**
         * Creates an EvacuationTimeFactorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvacuationTimeFactorResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.EvacuationTimeFactorResponse;

        /**
         * Creates a plain object from an EvacuationTimeFactorResponse message. Also converts values to other types if specified.
         * @param message EvacuationTimeFactorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.EvacuationTimeFactorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvacuationTimeFactorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProtectionLevelRequest. */
    interface IProtectionLevelRequest {

        /** ProtectionLevelRequest W */
        W?: (number|null);

        /** ProtectionLevelRequest N */
        N?: (number|null);

        /** ProtectionLevelRequest S */
        S?: (number|null);

        /** ProtectionLevelRequest F */
        F?: (number|null);
    }

    /** Represents a ProtectionLevelRequest. */
    class ProtectionLevelRequest implements IProtectionLevelRequest {

        /**
         * Constructs a new ProtectionLevelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IProtectionLevelRequest);

        /** ProtectionLevelRequest W. */
        public W: number;

        /** ProtectionLevelRequest N. */
        public N: number;

        /** ProtectionLevelRequest S. */
        public S: number;

        /** ProtectionLevelRequest F. */
        public F: number;

        /**
         * Creates a ProtectionLevelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtectionLevelRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.ProtectionLevelRequest;

        /**
         * Creates a plain object from a ProtectionLevelRequest message. Also converts values to other types if specified.
         * @param message ProtectionLevelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.ProtectionLevelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtectionLevelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProtectionLevelResponse. */
    interface IProtectionLevelResponse {

        /** ProtectionLevelResponse D */
        D?: (number|null);
    }

    /** Represents a ProtectionLevelResponse. */
    class ProtectionLevelResponse implements IProtectionLevelResponse {

        /**
         * Constructs a new ProtectionLevelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IProtectionLevelResponse);

        /** ProtectionLevelResponse D. */
        public D: number;

        /**
         * Creates a ProtectionLevelResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtectionLevelResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.ProtectionLevelResponse;

        /**
         * Creates a plain object from a ProtectionLevelResponse message. Also converts values to other types if specified.
         * @param message ProtectionLevelResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.ProtectionLevelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtectionLevelResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AcceptanceCriteriaRequest. */
    interface IAcceptanceCriteriaRequest {

        /** AcceptanceCriteriaRequest a */
        a?: (number|null);

        /** AcceptanceCriteriaRequest t */
        t?: (number|null);

        /** AcceptanceCriteriaRequest c */
        c?: (number|null);
    }

    /** Represents an AcceptanceCriteriaRequest. */
    class AcceptanceCriteriaRequest implements IAcceptanceCriteriaRequest {

        /**
         * Constructs a new AcceptanceCriteriaRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IAcceptanceCriteriaRequest);

        /** AcceptanceCriteriaRequest a. */
        public a: number;

        /** AcceptanceCriteriaRequest t. */
        public t: number;

        /** AcceptanceCriteriaRequest c. */
        public c: number;

        /**
         * Creates an AcceptanceCriteriaRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AcceptanceCriteriaRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.AcceptanceCriteriaRequest;

        /**
         * Creates a plain object from an AcceptanceCriteriaRequest message. Also converts values to other types if specified.
         * @param message AcceptanceCriteriaRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.AcceptanceCriteriaRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AcceptanceCriteriaRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AcceptanceCriteriaResponse. */
    interface IAcceptanceCriteriaResponse {

        /** AcceptanceCriteriaResponse A */
        A?: (number|null);
    }

    /** Represents an AcceptanceCriteriaResponse. */
    class AcceptanceCriteriaResponse implements IAcceptanceCriteriaResponse {

        /**
         * Constructs a new AcceptanceCriteriaResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IAcceptanceCriteriaResponse);

        /** AcceptanceCriteriaResponse A. */
        public A: number;

        /**
         * Creates an AcceptanceCriteriaResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AcceptanceCriteriaResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.AcceptanceCriteriaResponse;

        /**
         * Creates a plain object from an AcceptanceCriteriaResponse message. Also converts values to other types if specified.
         * @param message AcceptanceCriteriaResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.AcceptanceCriteriaResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AcceptanceCriteriaResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireRiskRequest. */
    interface IFireRiskRequest {

        /** FireRiskRequest A */
        A?: (number|null);

        /** FireRiskRequest D */
        D?: (number|null);

        /** FireRiskRequest P */
        P?: (number|null);

        /** FireRiskRequest U */
        U?: (number|null);

        /** FireRiskRequest N */
        N?: (number|null);

        /** FireRiskRequest aSmall */
        aSmall?: (number|null);

        /** FireRiskRequest t */
        t?: (number|null);

        /** FireRiskRequest r */
        r?: (number|null);

        /** FireRiskRequest dSmall */
        dSmall?: (number|null);

        /** FireRiskRequest i */
        i?: (number|null);

        /** FireRiskRequest g */
        g?: (number|null);

        /** FireRiskRequest e */
        e?: (number|null);

        /** FireRiskRequest v */
        v?: (number|null);

        /** FireRiskRequest z */
        z?: (number|null);
    }

    /** Represents a FireRiskRequest. */
    class FireRiskRequest implements IFireRiskRequest {

        /**
         * Constructs a new FireRiskRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFireRiskRequest);

        /** FireRiskRequest A. */
        public A: number;

        /** FireRiskRequest D. */
        public D: number;

        /** FireRiskRequest P. */
        public P: number;

        /** FireRiskRequest U. */
        public U: number;

        /** FireRiskRequest N. */
        public N: number;

        /** FireRiskRequest aSmall. */
        public aSmall: number;

        /** FireRiskRequest t. */
        public t: number;

        /** FireRiskRequest r. */
        public r: number;

        /** FireRiskRequest dSmall. */
        public dSmall: number;

        /** FireRiskRequest i. */
        public i: number;

        /** FireRiskRequest g. */
        public g: number;

        /** FireRiskRequest e. */
        public e: number;

        /** FireRiskRequest v. */
        public v: number;

        /** FireRiskRequest z. */
        public z: number;

        /**
         * Creates a FireRiskRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireRiskRequest
         */
        public static fromObject(object: { [k: string]: any }): engineering.FireRiskRequest;

        /**
         * Creates a plain object from a FireRiskRequest message. Also converts values to other types if specified.
         * @param message FireRiskRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FireRiskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireRiskRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FireRiskResponse. */
    interface IFireRiskResponse {

        /** FireRiskResponse R */
        R?: (number|null);

        /** FireRiskResponse P1 */
        P1?: (number|null);

        /** FireRiskResponse D1 */
        D1?: (number|null);

        /** FireRiskResponse R1 */
        R1?: (number|null);

        /** FireRiskResponse A1 */
        A1?: (number|null);

        /** FireRiskResponse A2 */
        A2?: (number|null);

        /** FireRiskResponse P2 */
        P2?: (number|null);

        /** FireRiskResponse R2 */
        R2?: (number|null);

        /** FireRiskResponse D2 */
        D2?: (number|null);
    }

    /** Represents a FireRiskResponse. */
    class FireRiskResponse implements IFireRiskResponse {

        /**
         * Constructs a new FireRiskResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: engineering.IFireRiskResponse);

        /** FireRiskResponse R. */
        public R: number;

        /** FireRiskResponse P1. */
        public P1: number;

        /** FireRiskResponse D1. */
        public D1: number;

        /** FireRiskResponse R1. */
        public R1: number;

        /** FireRiskResponse A1. */
        public A1: number;

        /** FireRiskResponse A2. */
        public A2: number;

        /** FireRiskResponse P2. */
        public P2: number;

        /** FireRiskResponse R2. */
        public R2: number;

        /** FireRiskResponse D2. */
        public D2: number;

        /**
         * Creates a FireRiskResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FireRiskResponse
         */
        public static fromObject(object: { [k: string]: any }): engineering.FireRiskResponse;

        /**
         * Creates a plain object from a FireRiskResponse message. Also converts values to other types if specified.
         * @param message FireRiskResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: engineering.FireRiskResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FireRiskResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents an EngineeringService */
    class EngineeringService extends $protobuf.rpc.Service {

        /**
         * Constructs a new EngineeringService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls FireLoadFactor.
         * @param request FireLoadFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireLoadFactorResponse
         */
        public fireLoadFactor(request: engineering.IFireLoadFactorRequest, callback: engineering.EngineeringService.FireLoadFactorCallback): void;

        /**
         * Calls FireLoadFactor.
         * @param request FireLoadFactorRequest message or plain object
         * @returns Promise
         */
        public fireLoadFactor(request: engineering.IFireLoadFactorRequest): Promise<engineering.FireLoadFactorResponse>;

        /**
         * Calls AreaFactor.
         * @param request AreaFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AreaFactorResponse
         */
        public areaFactor(request: engineering.IAreaFactorRequest, callback: engineering.EngineeringService.AreaFactorCallback): void;

        /**
         * Calls AreaFactor.
         * @param request AreaFactorRequest message or plain object
         * @returns Promise
         */
        public areaFactor(request: engineering.IAreaFactorRequest): Promise<engineering.AreaFactorResponse>;

        /**
         * Calls FireSpreadFactor.
         * @param request FireSpreadFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireSpreadFactorResponse
         */
        public fireSpreadFactor(request: engineering.IFireSpreadFactorRequest, callback: engineering.EngineeringService.FireSpreadFactorCallback): void;

        /**
         * Calls FireSpreadFactor.
         * @param request FireSpreadFactorRequest message or plain object
         * @returns Promise
         */
        public fireSpreadFactor(request: engineering.IFireSpreadFactorRequest): Promise<engineering.FireSpreadFactorResponse>;

        /**
         * Calls VentilationFactor.
         * @param request VentilationFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and VentilationFactorResponse
         */
        public ventilationFactor(request: engineering.IVentilationFactorRequest, callback: engineering.EngineeringService.VentilationFactorCallback): void;

        /**
         * Calls VentilationFactor.
         * @param request VentilationFactorRequest message or plain object
         * @returns Promise
         */
        public ventilationFactor(request: engineering.IVentilationFactorRequest): Promise<engineering.VentilationFactorResponse>;

        /**
         * Calls ChannelFactor.
         * @param request ChannelFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ChannelFactorResponse
         */
        public channelFactor(request: engineering.IChannelFactorRequest, callback: engineering.EngineeringService.ChannelFactorCallback): void;

        /**
         * Calls ChannelFactor.
         * @param request ChannelFactorRequest message or plain object
         * @returns Promise
         */
        public channelFactor(request: engineering.IChannelFactorRequest): Promise<engineering.ChannelFactorResponse>;

        /**
         * Calls FloorFactor.
         * @param request FloorFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FloorFactorResponse
         */
        public floorFactor(request: engineering.IFloorFactorRequest, callback: engineering.EngineeringService.FloorFactorCallback): void;

        /**
         * Calls FloorFactor.
         * @param request FloorFactorRequest message or plain object
         * @returns Promise
         */
        public floorFactor(request: engineering.IFloorFactorRequest): Promise<engineering.FloorFactorResponse>;

        /**
         * Calls PotentialRisk.
         * @param request PotentialRiskRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PotentialRiskResponse
         */
        public potentialRisk(request: engineering.IPotentialRiskRequest, callback: engineering.EngineeringService.PotentialRiskCallback): void;

        /**
         * Calls PotentialRisk.
         * @param request PotentialRiskRequest message or plain object
         * @returns Promise
         */
        public potentialRisk(request: engineering.IPotentialRiskRequest): Promise<engineering.PotentialRiskResponse>;

        /**
         * Calls ActivityFactor.
         * @param request ActivityFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ActivityFactorResponse
         */
        public activityFactor(request: engineering.IActivityFactorRequest, callback: engineering.EngineeringService.ActivityFactorCallback): void;

        /**
         * Calls ActivityFactor.
         * @param request ActivityFactorRequest message or plain object
         * @returns Promise
         */
        public activityFactor(request: engineering.IActivityFactorRequest): Promise<engineering.ActivityFactorResponse>;

        /**
         * Calls EvacuationTimeFactor.
         * @param request EvacuationTimeFactorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EvacuationTimeFactorResponse
         */
        public evacuationTimeFactor(request: engineering.IEvacuationTimeFactorRequest, callback: engineering.EngineeringService.EvacuationTimeFactorCallback): void;

        /**
         * Calls EvacuationTimeFactor.
         * @param request EvacuationTimeFactorRequest message or plain object
         * @returns Promise
         */
        public evacuationTimeFactor(request: engineering.IEvacuationTimeFactorRequest): Promise<engineering.EvacuationTimeFactorResponse>;

        /**
         * Calls ProtectionLevel.
         * @param request ProtectionLevelRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ProtectionLevelResponse
         */
        public protectionLevel(request: engineering.IProtectionLevelRequest, callback: engineering.EngineeringService.ProtectionLevelCallback): void;

        /**
         * Calls ProtectionLevel.
         * @param request ProtectionLevelRequest message or plain object
         * @returns Promise
         */
        public protectionLevel(request: engineering.IProtectionLevelRequest): Promise<engineering.ProtectionLevelResponse>;

        /**
         * Calls AcceptanceCriteria.
         * @param request AcceptanceCriteriaRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AcceptanceCriteriaResponse
         */
        public acceptanceCriteria(request: engineering.IAcceptanceCriteriaRequest, callback: engineering.EngineeringService.AcceptanceCriteriaCallback): void;

        /**
         * Calls AcceptanceCriteria.
         * @param request AcceptanceCriteriaRequest message or plain object
         * @returns Promise
         */
        public acceptanceCriteria(request: engineering.IAcceptanceCriteriaRequest): Promise<engineering.AcceptanceCriteriaResponse>;

        /**
         * Calls FireRisk.
         * @param request FireRiskRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FireRiskResponse
         */
        public fireRisk(request: engineering.IFireRiskRequest, callback: engineering.EngineeringService.FireRiskCallback): void;

        /**
         * Calls FireRisk.
         * @param request FireRiskRequest message or plain object
         * @returns Promise
         */
        public fireRisk(request: engineering.IFireRiskRequest): Promise<engineering.FireRiskResponse>;
    }

    namespace EngineeringService {

        /**
         * Callback as used by {@link engineering.EngineeringService#fireLoadFactor}.
         * @param error Error, if any
         * @param [response] FireLoadFactorResponse
         */
        type FireLoadFactorCallback = (error: (Error|null), response?: engineering.FireLoadFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#areaFactor}.
         * @param error Error, if any
         * @param [response] AreaFactorResponse
         */
        type AreaFactorCallback = (error: (Error|null), response?: engineering.AreaFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#fireSpreadFactor}.
         * @param error Error, if any
         * @param [response] FireSpreadFactorResponse
         */
        type FireSpreadFactorCallback = (error: (Error|null), response?: engineering.FireSpreadFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#ventilationFactor}.
         * @param error Error, if any
         * @param [response] VentilationFactorResponse
         */
        type VentilationFactorCallback = (error: (Error|null), response?: engineering.VentilationFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#channelFactor}.
         * @param error Error, if any
         * @param [response] ChannelFactorResponse
         */
        type ChannelFactorCallback = (error: (Error|null), response?: engineering.ChannelFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#floorFactor}.
         * @param error Error, if any
         * @param [response] FloorFactorResponse
         */
        type FloorFactorCallback = (error: (Error|null), response?: engineering.FloorFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#potentialRisk}.
         * @param error Error, if any
         * @param [response] PotentialRiskResponse
         */
        type PotentialRiskCallback = (error: (Error|null), response?: engineering.PotentialRiskResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#activityFactor}.
         * @param error Error, if any
         * @param [response] ActivityFactorResponse
         */
        type ActivityFactorCallback = (error: (Error|null), response?: engineering.ActivityFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#evacuationTimeFactor}.
         * @param error Error, if any
         * @param [response] EvacuationTimeFactorResponse
         */
        type EvacuationTimeFactorCallback = (error: (Error|null), response?: engineering.EvacuationTimeFactorResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#protectionLevel}.
         * @param error Error, if any
         * @param [response] ProtectionLevelResponse
         */
        type ProtectionLevelCallback = (error: (Error|null), response?: engineering.ProtectionLevelResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#acceptanceCriteria}.
         * @param error Error, if any
         * @param [response] AcceptanceCriteriaResponse
         */
        type AcceptanceCriteriaCallback = (error: (Error|null), response?: engineering.AcceptanceCriteriaResponse) => void;

        /**
         * Callback as used by {@link engineering.EngineeringService#fireRisk}.
         * @param error Error, if any
         * @param [response] FireRiskResponse
         */
        type FireRiskCallback = (error: (Error|null), response?: engineering.FireRiskResponse) => void;
    }
}
