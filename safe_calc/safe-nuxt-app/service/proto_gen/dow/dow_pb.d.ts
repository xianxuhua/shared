import * as $protobuf from "protobufjs";
/** Namespace dow. */
export namespace dow {

    /** Properties of a MaterialCoefficientGetChemicalActivityGradeRequest. */
    interface IMaterialCoefficientGetChemicalActivityGradeRequest {

        /** MaterialCoefficientGetChemicalActivityGradeRequest reactionCharacter */
        reactionCharacter?: (string|null);
    }

    /** Represents a MaterialCoefficientGetChemicalActivityGradeRequest. */
    class MaterialCoefficientGetChemicalActivityGradeRequest implements IMaterialCoefficientGetChemicalActivityGradeRequest {

        /**
         * Constructs a new MaterialCoefficientGetChemicalActivityGradeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetChemicalActivityGradeRequest);

        /** MaterialCoefficientGetChemicalActivityGradeRequest reactionCharacter. */
        public reactionCharacter: string;

        /**
         * Creates a MaterialCoefficientGetChemicalActivityGradeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetChemicalActivityGradeRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetChemicalActivityGradeRequest;

        /**
         * Creates a plain object from a MaterialCoefficientGetChemicalActivityGradeRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetChemicalActivityGradeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetChemicalActivityGradeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetChemicalActivityGradeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetChemicalActivityGradeResponse. */
    interface IMaterialCoefficientGetChemicalActivityGradeResponse {

        /** MaterialCoefficientGetChemicalActivityGradeResponse chemicalActivityGrade */
        chemicalActivityGrade?: (number|null);
    }

    /** Represents a MaterialCoefficientGetChemicalActivityGradeResponse. */
    class MaterialCoefficientGetChemicalActivityGradeResponse implements IMaterialCoefficientGetChemicalActivityGradeResponse {

        /**
         * Constructs a new MaterialCoefficientGetChemicalActivityGradeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetChemicalActivityGradeResponse);

        /** MaterialCoefficientGetChemicalActivityGradeResponse chemicalActivityGrade. */
        public chemicalActivityGrade: number;

        /**
         * Creates a MaterialCoefficientGetChemicalActivityGradeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetChemicalActivityGradeResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetChemicalActivityGradeResponse;

        /**
         * Creates a plain object from a MaterialCoefficientGetChemicalActivityGradeResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetChemicalActivityGradeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetChemicalActivityGradeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetChemicalActivityGradeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientRequest. */
    interface IMaterialCoefficientRequest {

        /** MaterialCoefficientRequest chemicalActivityGrade */
        chemicalActivityGrade?: (number|null);

        /** MaterialCoefficientRequest type */
        type?: (string|null);

        /** MaterialCoefficientRequest typeDetail */
        typeDetail?: (string|null);
    }

    /** Represents a MaterialCoefficientRequest. */
    class MaterialCoefficientRequest implements IMaterialCoefficientRequest {

        /**
         * Constructs a new MaterialCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientRequest);

        /** MaterialCoefficientRequest chemicalActivityGrade. */
        public chemicalActivityGrade: number;

        /** MaterialCoefficientRequest type. */
        public type: string;

        /** MaterialCoefficientRequest typeDetail. */
        public typeDetail: string;

        /**
         * Creates a MaterialCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientRequest;

        /**
         * Creates a plain object from a MaterialCoefficientRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientResponse. */
    interface IMaterialCoefficientResponse {

        /** MaterialCoefficientResponse coefficient */
        coefficient?: (number|null);
    }

    /** Represents a MaterialCoefficientResponse. */
    class MaterialCoefficientResponse implements IMaterialCoefficientResponse {

        /**
         * Constructs a new MaterialCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientResponse);

        /** MaterialCoefficientResponse coefficient. */
        public coefficient: number;

        /**
         * Creates a MaterialCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientResponse;

        /**
         * Creates a plain object from a MaterialCoefficientResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientSaveUnknownMaterialRequest. */
    interface IMaterialCoefficientSaveUnknownMaterialRequest {

        /** MaterialCoefficientSaveUnknownMaterialRequest name */
        name?: (string|null);

        /** MaterialCoefficientSaveUnknownMaterialRequest coefficient */
        coefficient?: (number|null);
    }

    /** Represents a MaterialCoefficientSaveUnknownMaterialRequest. */
    class MaterialCoefficientSaveUnknownMaterialRequest implements IMaterialCoefficientSaveUnknownMaterialRequest {

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientSaveUnknownMaterialRequest);

        /** MaterialCoefficientSaveUnknownMaterialRequest name. */
        public name: string;

        /** MaterialCoefficientSaveUnknownMaterialRequest coefficient. */
        public coefficient: number;

        /**
         * Creates a MaterialCoefficientSaveUnknownMaterialRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientSaveUnknownMaterialRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientSaveUnknownMaterialRequest;

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientSaveUnknownMaterialRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientSaveUnknownMaterialRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientSaveUnknownMaterialResponse. */
    interface IMaterialCoefficientSaveUnknownMaterialResponse {
    }

    /** Represents a MaterialCoefficientSaveUnknownMaterialResponse. */
    class MaterialCoefficientSaveUnknownMaterialResponse implements IMaterialCoefficientSaveUnknownMaterialResponse {

        /**
         * Constructs a new MaterialCoefficientSaveUnknownMaterialResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientSaveUnknownMaterialResponse);

        /**
         * Creates a MaterialCoefficientSaveUnknownMaterialResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientSaveUnknownMaterialResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientSaveUnknownMaterialResponse;

        /**
         * Creates a plain object from a MaterialCoefficientSaveUnknownMaterialResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientSaveUnknownMaterialResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientSaveUnknownMaterialResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientSaveUnknownMaterialResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownCoefficientRequest. */
    interface IMaterialCoefficientGetKnownCoefficientRequest {

        /** MaterialCoefficientGetKnownCoefficientRequest name */
        name?: (string|null);
    }

    /** Represents a MaterialCoefficientGetKnownCoefficientRequest. */
    class MaterialCoefficientGetKnownCoefficientRequest implements IMaterialCoefficientGetKnownCoefficientRequest {

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetKnownCoefficientRequest);

        /** MaterialCoefficientGetKnownCoefficientRequest name. */
        public name: string;

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownCoefficientRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetKnownCoefficientRequest;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownCoefficientRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetKnownCoefficientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownCoefficientRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownCoefficientResponse. */
    interface IMaterialCoefficientGetKnownCoefficientResponse {

        /** MaterialCoefficientGetKnownCoefficientResponse coefficient */
        coefficient?: (number|null);
    }

    /** Represents a MaterialCoefficientGetKnownCoefficientResponse. */
    class MaterialCoefficientGetKnownCoefficientResponse implements IMaterialCoefficientGetKnownCoefficientResponse {

        /**
         * Constructs a new MaterialCoefficientGetKnownCoefficientResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetKnownCoefficientResponse);

        /** MaterialCoefficientGetKnownCoefficientResponse coefficient. */
        public coefficient: number;

        /**
         * Creates a MaterialCoefficientGetKnownCoefficientResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownCoefficientResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetKnownCoefficientResponse;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownCoefficientResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownCoefficientResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetKnownCoefficientResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownCoefficientResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownNamesRequest. */
    interface IMaterialCoefficientGetKnownNamesRequest {
    }

    /** Represents a MaterialCoefficientGetKnownNamesRequest. */
    class MaterialCoefficientGetKnownNamesRequest implements IMaterialCoefficientGetKnownNamesRequest {

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetKnownNamesRequest);

        /**
         * Creates a MaterialCoefficientGetKnownNamesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownNamesRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetKnownNamesRequest;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownNamesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetKnownNamesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownNamesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Name. */
    interface IName {

        /** Name name */
        name?: (string|null);

        /** Name code */
        code?: (string|null);
    }

    /** Represents a Name. */
    class Name implements IName {

        /**
         * Constructs a new Name.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IName);

        /** Name name. */
        public name: string;

        /** Name code. */
        public code: string;

        /**
         * Creates a Name message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Name
         */
        public static fromObject(object: { [k: string]: any }): dow.Name;

        /**
         * Creates a plain object from a Name message. Also converts values to other types if specified.
         * @param message Name
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.Name, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Name to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetKnownNamesResponse. */
    interface IMaterialCoefficientGetKnownNamesResponse {

        /** MaterialCoefficientGetKnownNamesResponse names */
        names?: (dow.IName[]|null);
    }

    /** Represents a MaterialCoefficientGetKnownNamesResponse. */
    class MaterialCoefficientGetKnownNamesResponse implements IMaterialCoefficientGetKnownNamesResponse {

        /**
         * Constructs a new MaterialCoefficientGetKnownNamesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetKnownNamesResponse);

        /** MaterialCoefficientGetKnownNamesResponse names. */
        public names: dow.IName[];

        /**
         * Creates a MaterialCoefficientGetKnownNamesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetKnownNamesResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetKnownNamesResponse;

        /**
         * Creates a plain object from a MaterialCoefficientGetKnownNamesResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetKnownNamesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetKnownNamesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetKnownNamesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetReactionCharactersRequest. */
    interface IMaterialCoefficientGetReactionCharactersRequest {
    }

    /** Represents a MaterialCoefficientGetReactionCharactersRequest. */
    class MaterialCoefficientGetReactionCharactersRequest implements IMaterialCoefficientGetReactionCharactersRequest {

        /**
         * Constructs a new MaterialCoefficientGetReactionCharactersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetReactionCharactersRequest);

        /**
         * Creates a MaterialCoefficientGetReactionCharactersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetReactionCharactersRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetReactionCharactersRequest;

        /**
         * Creates a plain object from a MaterialCoefficientGetReactionCharactersRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetReactionCharactersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetReactionCharactersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetReactionCharactersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReactionCharacter. */
    interface IReactionCharacter {

        /** ReactionCharacter name */
        name?: (string|null);

        /** ReactionCharacter code */
        code?: (string|null);
    }

    /** Represents a ReactionCharacter. */
    class ReactionCharacter implements IReactionCharacter {

        /**
         * Constructs a new ReactionCharacter.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IReactionCharacter);

        /** ReactionCharacter name. */
        public name: string;

        /** ReactionCharacter code. */
        public code: string;

        /**
         * Creates a ReactionCharacter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReactionCharacter
         */
        public static fromObject(object: { [k: string]: any }): dow.ReactionCharacter;

        /**
         * Creates a plain object from a ReactionCharacter message. Also converts values to other types if specified.
         * @param message ReactionCharacter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.ReactionCharacter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReactionCharacter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetReactionCharactersResponse. */
    interface IMaterialCoefficientGetReactionCharactersResponse {

        /** MaterialCoefficientGetReactionCharactersResponse reactionCharacters */
        reactionCharacters?: (dow.IReactionCharacter[]|null);
    }

    /** Represents a MaterialCoefficientGetReactionCharactersResponse. */
    class MaterialCoefficientGetReactionCharactersResponse implements IMaterialCoefficientGetReactionCharactersResponse {

        /**
         * Constructs a new MaterialCoefficientGetReactionCharactersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetReactionCharactersResponse);

        /** MaterialCoefficientGetReactionCharactersResponse reactionCharacters. */
        public reactionCharacters: dow.IReactionCharacter[];

        /**
         * Creates a MaterialCoefficientGetReactionCharactersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetReactionCharactersResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetReactionCharactersResponse;

        /**
         * Creates a plain object from a MaterialCoefficientGetReactionCharactersResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetReactionCharactersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetReactionCharactersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetReactionCharactersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetTypesRequest. */
    interface IMaterialCoefficientGetTypesRequest {
    }

    /** Represents a MaterialCoefficientGetTypesRequest. */
    class MaterialCoefficientGetTypesRequest implements IMaterialCoefficientGetTypesRequest {

        /**
         * Constructs a new MaterialCoefficientGetTypesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetTypesRequest);

        /**
         * Creates a MaterialCoefficientGetTypesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetTypesRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetTypesRequest;

        /**
         * Creates a plain object from a MaterialCoefficientGetTypesRequest message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetTypesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetTypesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Type. */
    interface IType {

        /** Type name */
        name?: (string|null);

        /** Type code */
        code?: (string|null);

        /** Type children */
        children?: (dow.IType[]|null);
    }

    /** Represents a Type. */
    class Type implements IType {

        /**
         * Constructs a new Type.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IType);

        /** Type name. */
        public name: string;

        /** Type code. */
        public code: string;

        /** Type children. */
        public children: dow.IType[];

        /**
         * Creates a Type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Type
         */
        public static fromObject(object: { [k: string]: any }): dow.Type;

        /**
         * Creates a plain object from a Type message. Also converts values to other types if specified.
         * @param message Type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialCoefficientGetTypesResponse. */
    interface IMaterialCoefficientGetTypesResponse {

        /** MaterialCoefficientGetTypesResponse types */
        types?: (dow.IType[]|null);
    }

    /** Represents a MaterialCoefficientGetTypesResponse. */
    class MaterialCoefficientGetTypesResponse implements IMaterialCoefficientGetTypesResponse {

        /**
         * Constructs a new MaterialCoefficientGetTypesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialCoefficientGetTypesResponse);

        /** MaterialCoefficientGetTypesResponse types. */
        public types: dow.IType[];

        /**
         * Creates a MaterialCoefficientGetTypesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialCoefficientGetTypesResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialCoefficientGetTypesResponse;

        /**
         * Creates a plain object from a MaterialCoefficientGetTypesResponse message. Also converts values to other types if specified.
         * @param message MaterialCoefficientGetTypesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialCoefficientGetTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialCoefficientGetTypesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessHazardCoefficientGetRequest. */
    interface IProcessHazardCoefficientGetRequest {
    }

    /** Represents a ProcessHazardCoefficientGetRequest. */
    class ProcessHazardCoefficientGetRequest implements IProcessHazardCoefficientGetRequest {

        /**
         * Constructs a new ProcessHazardCoefficientGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IProcessHazardCoefficientGetRequest);

        /**
         * Creates a ProcessHazardCoefficientGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessHazardCoefficientGetRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.ProcessHazardCoefficientGetRequest;

        /**
         * Creates a plain object from a ProcessHazardCoefficientGetRequest message. Also converts values to other types if specified.
         * @param message ProcessHazardCoefficientGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.ProcessHazardCoefficientGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessHazardCoefficientGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Coefficient. */
    interface ICoefficient {

        /** Coefficient name */
        name?: (string|null);

        /** Coefficient code */
        code?: (number|null);
    }

    /** Represents a Coefficient. */
    class Coefficient implements ICoefficient {

        /**
         * Constructs a new Coefficient.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.ICoefficient);

        /** Coefficient name. */
        public name: string;

        /** Coefficient code. */
        public code: number;

        /**
         * Creates a Coefficient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Coefficient
         */
        public static fromObject(object: { [k: string]: any }): dow.Coefficient;

        /**
         * Creates a plain object from a Coefficient message. Also converts values to other types if specified.
         * @param message Coefficient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.Coefficient, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Coefficient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessHazardCoefficientGetResponse. */
    interface IProcessHazardCoefficientGetResponse {

        /** ProcessHazardCoefficientGetResponse A1 */
        A1?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse B1 */
        B1?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse C1 */
        C1?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse D1 */
        D1?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse E1 */
        E1?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse F1 */
        F1?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse A2 */
        A2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse B2 */
        B2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse C2 */
        C2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse D2 */
        D2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse E2 */
        E2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse F2 */
        F2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse G2 */
        G2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse H2 */
        H2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse I2 */
        I2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse J2 */
        J2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse K2 */
        K2?: (dow.ICoefficient[]|null);

        /** ProcessHazardCoefficientGetResponse L2 */
        L2?: (dow.ICoefficient[]|null);
    }

    /** Represents a ProcessHazardCoefficientGetResponse. */
    class ProcessHazardCoefficientGetResponse implements IProcessHazardCoefficientGetResponse {

        /**
         * Constructs a new ProcessHazardCoefficientGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IProcessHazardCoefficientGetResponse);

        /** ProcessHazardCoefficientGetResponse A1. */
        public A1: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse B1. */
        public B1: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse C1. */
        public C1: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse D1. */
        public D1: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse E1. */
        public E1: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse F1. */
        public F1: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse A2. */
        public A2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse B2. */
        public B2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse C2. */
        public C2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse D2. */
        public D2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse E2. */
        public E2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse F2. */
        public F2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse G2. */
        public G2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse H2. */
        public H2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse I2. */
        public I2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse J2. */
        public J2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse K2. */
        public K2: dow.ICoefficient[];

        /** ProcessHazardCoefficientGetResponse L2. */
        public L2: dow.ICoefficient[];

        /**
         * Creates a ProcessHazardCoefficientGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessHazardCoefficientGetResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.ProcessHazardCoefficientGetResponse;

        /**
         * Creates a plain object from a ProcessHazardCoefficientGetResponse message. Also converts values to other types if specified.
         * @param message ProcessHazardCoefficientGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.ProcessHazardCoefficientGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessHazardCoefficientGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompensationCoefficientGetRequest. */
    interface ICompensationCoefficientGetRequest {
    }

    /** Represents a CompensationCoefficientGetRequest. */
    class CompensationCoefficientGetRequest implements ICompensationCoefficientGetRequest {

        /**
         * Constructs a new CompensationCoefficientGetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.ICompensationCoefficientGetRequest);

        /**
         * Creates a CompensationCoefficientGetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompensationCoefficientGetRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.CompensationCoefficientGetRequest;

        /**
         * Creates a plain object from a CompensationCoefficientGetRequest message. Also converts values to other types if specified.
         * @param message CompensationCoefficientGetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.CompensationCoefficientGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompensationCoefficientGetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompensationCoefficientGetResponse. */
    interface ICompensationCoefficientGetResponse {

        /** CompensationCoefficientGetResponse a1 */
        a1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse b1 */
        b1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse c1 */
        c1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse d1 */
        d1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse e1 */
        e1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse f1 */
        f1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse g1 */
        g1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse h1 */
        h1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse i1 */
        i1?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse a2 */
        a2?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse b2 */
        b2?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse c2 */
        c2?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse d2 */
        d2?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse a3 */
        a3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse b3 */
        b3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse c3 */
        c3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse d3 */
        d3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse e3 */
        e3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse f3 */
        f3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse g3 */
        g3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse h3 */
        h3?: (dow.ICoefficient[]|null);

        /** CompensationCoefficientGetResponse i3 */
        i3?: (dow.ICoefficient[]|null);
    }

    /** Represents a CompensationCoefficientGetResponse. */
    class CompensationCoefficientGetResponse implements ICompensationCoefficientGetResponse {

        /**
         * Constructs a new CompensationCoefficientGetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.ICompensationCoefficientGetResponse);

        /** CompensationCoefficientGetResponse a1. */
        public a1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse b1. */
        public b1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse c1. */
        public c1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse d1. */
        public d1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse e1. */
        public e1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse f1. */
        public f1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse g1. */
        public g1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse h1. */
        public h1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse i1. */
        public i1: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse a2. */
        public a2: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse b2. */
        public b2: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse c2. */
        public c2: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse d2. */
        public d2: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse a3. */
        public a3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse b3. */
        public b3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse c3. */
        public c3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse d3. */
        public d3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse e3. */
        public e3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse f3. */
        public f3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse g3. */
        public g3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse h3. */
        public h3: dow.ICoefficient[];

        /** CompensationCoefficientGetResponse i3. */
        public i3: dow.ICoefficient[];

        /**
         * Creates a CompensationCoefficientGetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompensationCoefficientGetResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.CompensationCoefficientGetResponse;

        /**
         * Creates a plain object from a CompensationCoefficientGetResponse message. Also converts values to other types if specified.
         * @param message CompensationCoefficientGetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.CompensationCoefficientGetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompensationCoefficientGetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeneralProcessHazardCoefficientCalcRequest. */
    interface IGeneralProcessHazardCoefficientCalcRequest {

        /** GeneralProcessHazardCoefficientCalcRequest A1 */
        A1?: (number|null);

        /** GeneralProcessHazardCoefficientCalcRequest B1 */
        B1?: (number|null);

        /** GeneralProcessHazardCoefficientCalcRequest C1 */
        C1?: (number|null);

        /** GeneralProcessHazardCoefficientCalcRequest D1 */
        D1?: (number|null);

        /** GeneralProcessHazardCoefficientCalcRequest E1 */
        E1?: (number|null);

        /** GeneralProcessHazardCoefficientCalcRequest F1 */
        F1?: (number|null);
    }

    /** Represents a GeneralProcessHazardCoefficientCalcRequest. */
    class GeneralProcessHazardCoefficientCalcRequest implements IGeneralProcessHazardCoefficientCalcRequest {

        /**
         * Constructs a new GeneralProcessHazardCoefficientCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IGeneralProcessHazardCoefficientCalcRequest);

        /** GeneralProcessHazardCoefficientCalcRequest A1. */
        public A1: number;

        /** GeneralProcessHazardCoefficientCalcRequest B1. */
        public B1: number;

        /** GeneralProcessHazardCoefficientCalcRequest C1. */
        public C1: number;

        /** GeneralProcessHazardCoefficientCalcRequest D1. */
        public D1: number;

        /** GeneralProcessHazardCoefficientCalcRequest E1. */
        public E1: number;

        /** GeneralProcessHazardCoefficientCalcRequest F1. */
        public F1: number;

        /**
         * Creates a GeneralProcessHazardCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneralProcessHazardCoefficientCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.GeneralProcessHazardCoefficientCalcRequest;

        /**
         * Creates a plain object from a GeneralProcessHazardCoefficientCalcRequest message. Also converts values to other types if specified.
         * @param message GeneralProcessHazardCoefficientCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.GeneralProcessHazardCoefficientCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneralProcessHazardCoefficientCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GeneralProcessHazardCoefficientCalcResponse. */
    interface IGeneralProcessHazardCoefficientCalcResponse {

        /** GeneralProcessHazardCoefficientCalcResponse F1 */
        F1?: (number|null);
    }

    /** Represents a GeneralProcessHazardCoefficientCalcResponse. */
    class GeneralProcessHazardCoefficientCalcResponse implements IGeneralProcessHazardCoefficientCalcResponse {

        /**
         * Constructs a new GeneralProcessHazardCoefficientCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IGeneralProcessHazardCoefficientCalcResponse);

        /** GeneralProcessHazardCoefficientCalcResponse F1. */
        public F1: number;

        /**
         * Creates a GeneralProcessHazardCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeneralProcessHazardCoefficientCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.GeneralProcessHazardCoefficientCalcResponse;

        /**
         * Creates a plain object from a GeneralProcessHazardCoefficientCalcResponse message. Also converts values to other types if specified.
         * @param message GeneralProcessHazardCoefficientCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.GeneralProcessHazardCoefficientCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeneralProcessHazardCoefficientCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialProcessHazardCoefficientCalcRequest. */
    interface ISpecialProcessHazardCoefficientCalcRequest {

        /** SpecialProcessHazardCoefficientCalcRequest A2 */
        A2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest B2 */
        B2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest C2 */
        C2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest D2 */
        D2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest E2 */
        E2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest F2 */
        F2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest G2 */
        G2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest H2 */
        H2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest I2 */
        I2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest J2 */
        J2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest K2 */
        K2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest L2 */
        L2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcRequest generalProcessHazardCoefficientF1 */
        generalProcessHazardCoefficientF1?: (number|null);
    }

    /** Represents a SpecialProcessHazardCoefficientCalcRequest. */
    class SpecialProcessHazardCoefficientCalcRequest implements ISpecialProcessHazardCoefficientCalcRequest {

        /**
         * Constructs a new SpecialProcessHazardCoefficientCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.ISpecialProcessHazardCoefficientCalcRequest);

        /** SpecialProcessHazardCoefficientCalcRequest A2. */
        public A2: number;

        /** SpecialProcessHazardCoefficientCalcRequest B2. */
        public B2: number;

        /** SpecialProcessHazardCoefficientCalcRequest C2. */
        public C2: number;

        /** SpecialProcessHazardCoefficientCalcRequest D2. */
        public D2: number;

        /** SpecialProcessHazardCoefficientCalcRequest E2. */
        public E2: number;

        /** SpecialProcessHazardCoefficientCalcRequest F2. */
        public F2: number;

        /** SpecialProcessHazardCoefficientCalcRequest G2. */
        public G2: number;

        /** SpecialProcessHazardCoefficientCalcRequest H2. */
        public H2: number;

        /** SpecialProcessHazardCoefficientCalcRequest I2. */
        public I2: number;

        /** SpecialProcessHazardCoefficientCalcRequest J2. */
        public J2: number;

        /** SpecialProcessHazardCoefficientCalcRequest K2. */
        public K2: number;

        /** SpecialProcessHazardCoefficientCalcRequest L2. */
        public L2: number;

        /** SpecialProcessHazardCoefficientCalcRequest generalProcessHazardCoefficientF1. */
        public generalProcessHazardCoefficientF1: number;

        /**
         * Creates a SpecialProcessHazardCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialProcessHazardCoefficientCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.SpecialProcessHazardCoefficientCalcRequest;

        /**
         * Creates a plain object from a SpecialProcessHazardCoefficientCalcRequest message. Also converts values to other types if specified.
         * @param message SpecialProcessHazardCoefficientCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.SpecialProcessHazardCoefficientCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialProcessHazardCoefficientCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpecialProcessHazardCoefficientCalcResponse. */
    interface ISpecialProcessHazardCoefficientCalcResponse {

        /** SpecialProcessHazardCoefficientCalcResponse F2 */
        F2?: (number|null);

        /** SpecialProcessHazardCoefficientCalcResponse F3 */
        F3?: (number|null);
    }

    /** Represents a SpecialProcessHazardCoefficientCalcResponse. */
    class SpecialProcessHazardCoefficientCalcResponse implements ISpecialProcessHazardCoefficientCalcResponse {

        /**
         * Constructs a new SpecialProcessHazardCoefficientCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.ISpecialProcessHazardCoefficientCalcResponse);

        /** SpecialProcessHazardCoefficientCalcResponse F2. */
        public F2: number;

        /** SpecialProcessHazardCoefficientCalcResponse F3. */
        public F3: number;

        /**
         * Creates a SpecialProcessHazardCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpecialProcessHazardCoefficientCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.SpecialProcessHazardCoefficientCalcResponse;

        /**
         * Creates a plain object from a SpecialProcessHazardCoefficientCalcResponse message. Also converts values to other types if specified.
         * @param message SpecialProcessHazardCoefficientCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.SpecialProcessHazardCoefficientCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpecialProcessHazardCoefficientCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessControlCompensationCoefficientCalcRequest. */
    interface IProcessControlCompensationCoefficientCalcRequest {

        /** ProcessControlCompensationCoefficientCalcRequest a1 */
        a1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest b1 */
        b1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest c1 */
        c1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest d1 */
        d1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest e1 */
        e1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest f1 */
        f1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest g1 */
        g1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest h1 */
        h1?: (number|null);

        /** ProcessControlCompensationCoefficientCalcRequest i1 */
        i1?: (number|null);
    }

    /** Represents a ProcessControlCompensationCoefficientCalcRequest. */
    class ProcessControlCompensationCoefficientCalcRequest implements IProcessControlCompensationCoefficientCalcRequest {

        /**
         * Constructs a new ProcessControlCompensationCoefficientCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IProcessControlCompensationCoefficientCalcRequest);

        /** ProcessControlCompensationCoefficientCalcRequest a1. */
        public a1: number;

        /** ProcessControlCompensationCoefficientCalcRequest b1. */
        public b1: number;

        /** ProcessControlCompensationCoefficientCalcRequest c1. */
        public c1: number;

        /** ProcessControlCompensationCoefficientCalcRequest d1. */
        public d1: number;

        /** ProcessControlCompensationCoefficientCalcRequest e1. */
        public e1: number;

        /** ProcessControlCompensationCoefficientCalcRequest f1. */
        public f1: number;

        /** ProcessControlCompensationCoefficientCalcRequest g1. */
        public g1: number;

        /** ProcessControlCompensationCoefficientCalcRequest h1. */
        public h1: number;

        /** ProcessControlCompensationCoefficientCalcRequest i1. */
        public i1: number;

        /**
         * Creates a ProcessControlCompensationCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessControlCompensationCoefficientCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.ProcessControlCompensationCoefficientCalcRequest;

        /**
         * Creates a plain object from a ProcessControlCompensationCoefficientCalcRequest message. Also converts values to other types if specified.
         * @param message ProcessControlCompensationCoefficientCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.ProcessControlCompensationCoefficientCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessControlCompensationCoefficientCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProcessControlCompensationCoefficientCalcResponse. */
    interface IProcessControlCompensationCoefficientCalcResponse {

        /** ProcessControlCompensationCoefficientCalcResponse C1 */
        C1?: (number|null);
    }

    /** Represents a ProcessControlCompensationCoefficientCalcResponse. */
    class ProcessControlCompensationCoefficientCalcResponse implements IProcessControlCompensationCoefficientCalcResponse {

        /**
         * Constructs a new ProcessControlCompensationCoefficientCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IProcessControlCompensationCoefficientCalcResponse);

        /** ProcessControlCompensationCoefficientCalcResponse C1. */
        public C1: number;

        /**
         * Creates a ProcessControlCompensationCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessControlCompensationCoefficientCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.ProcessControlCompensationCoefficientCalcResponse;

        /**
         * Creates a plain object from a ProcessControlCompensationCoefficientCalcResponse message. Also converts values to other types if specified.
         * @param message ProcessControlCompensationCoefficientCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.ProcessControlCompensationCoefficientCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessControlCompensationCoefficientCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialIsolationCompensationCoefficientCalcRequest. */
    interface IMaterialIsolationCompensationCoefficientCalcRequest {

        /** MaterialIsolationCompensationCoefficientCalcRequest a2 */
        a2?: (number|null);

        /** MaterialIsolationCompensationCoefficientCalcRequest b2 */
        b2?: (number|null);

        /** MaterialIsolationCompensationCoefficientCalcRequest c2 */
        c2?: (number|null);

        /** MaterialIsolationCompensationCoefficientCalcRequest d2 */
        d2?: (number|null);
    }

    /** Represents a MaterialIsolationCompensationCoefficientCalcRequest. */
    class MaterialIsolationCompensationCoefficientCalcRequest implements IMaterialIsolationCompensationCoefficientCalcRequest {

        /**
         * Constructs a new MaterialIsolationCompensationCoefficientCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialIsolationCompensationCoefficientCalcRequest);

        /** MaterialIsolationCompensationCoefficientCalcRequest a2. */
        public a2: number;

        /** MaterialIsolationCompensationCoefficientCalcRequest b2. */
        public b2: number;

        /** MaterialIsolationCompensationCoefficientCalcRequest c2. */
        public c2: number;

        /** MaterialIsolationCompensationCoefficientCalcRequest d2. */
        public d2: number;

        /**
         * Creates a MaterialIsolationCompensationCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialIsolationCompensationCoefficientCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialIsolationCompensationCoefficientCalcRequest;

        /**
         * Creates a plain object from a MaterialIsolationCompensationCoefficientCalcRequest message. Also converts values to other types if specified.
         * @param message MaterialIsolationCompensationCoefficientCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialIsolationCompensationCoefficientCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialIsolationCompensationCoefficientCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialIsolationCompensationCoefficientCalcResponse. */
    interface IMaterialIsolationCompensationCoefficientCalcResponse {

        /** MaterialIsolationCompensationCoefficientCalcResponse C2 */
        C2?: (number|null);
    }

    /** Represents a MaterialIsolationCompensationCoefficientCalcResponse. */
    class MaterialIsolationCompensationCoefficientCalcResponse implements IMaterialIsolationCompensationCoefficientCalcResponse {

        /**
         * Constructs a new MaterialIsolationCompensationCoefficientCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IMaterialIsolationCompensationCoefficientCalcResponse);

        /** MaterialIsolationCompensationCoefficientCalcResponse C2. */
        public C2: number;

        /**
         * Creates a MaterialIsolationCompensationCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialIsolationCompensationCoefficientCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.MaterialIsolationCompensationCoefficientCalcResponse;

        /**
         * Creates a plain object from a MaterialIsolationCompensationCoefficientCalcResponse message. Also converts values to other types if specified.
         * @param message MaterialIsolationCompensationCoefficientCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.MaterialIsolationCompensationCoefficientCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialIsolationCompensationCoefficientCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FirePreventionMeasureCompensationCoefficientCalcRequest. */
    interface IFirePreventionMeasureCompensationCoefficientCalcRequest {

        /** FirePreventionMeasureCompensationCoefficientCalcRequest a3 */
        a3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest b3 */
        b3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest c3 */
        c3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest d3 */
        d3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest e3 */
        e3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest f3 */
        f3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest g3 */
        g3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest h3 */
        h3?: (number|null);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest i3 */
        i3?: (number|null);
    }

    /** Represents a FirePreventionMeasureCompensationCoefficientCalcRequest. */
    class FirePreventionMeasureCompensationCoefficientCalcRequest implements IFirePreventionMeasureCompensationCoefficientCalcRequest {

        /**
         * Constructs a new FirePreventionMeasureCompensationCoefficientCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IFirePreventionMeasureCompensationCoefficientCalcRequest);

        /** FirePreventionMeasureCompensationCoefficientCalcRequest a3. */
        public a3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest b3. */
        public b3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest c3. */
        public c3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest d3. */
        public d3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest e3. */
        public e3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest f3. */
        public f3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest g3. */
        public g3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest h3. */
        public h3: number;

        /** FirePreventionMeasureCompensationCoefficientCalcRequest i3. */
        public i3: number;

        /**
         * Creates a FirePreventionMeasureCompensationCoefficientCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirePreventionMeasureCompensationCoefficientCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.FirePreventionMeasureCompensationCoefficientCalcRequest;

        /**
         * Creates a plain object from a FirePreventionMeasureCompensationCoefficientCalcRequest message. Also converts values to other types if specified.
         * @param message FirePreventionMeasureCompensationCoefficientCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.FirePreventionMeasureCompensationCoefficientCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirePreventionMeasureCompensationCoefficientCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FirePreventionMeasureCompensationCoefficientCalcResponse. */
    interface IFirePreventionMeasureCompensationCoefficientCalcResponse {

        /** FirePreventionMeasureCompensationCoefficientCalcResponse C3 */
        C3?: (number|null);
    }

    /** Represents a FirePreventionMeasureCompensationCoefficientCalcResponse. */
    class FirePreventionMeasureCompensationCoefficientCalcResponse implements IFirePreventionMeasureCompensationCoefficientCalcResponse {

        /**
         * Constructs a new FirePreventionMeasureCompensationCoefficientCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IFirePreventionMeasureCompensationCoefficientCalcResponse);

        /** FirePreventionMeasureCompensationCoefficientCalcResponse C3. */
        public C3: number;

        /**
         * Creates a FirePreventionMeasureCompensationCoefficientCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirePreventionMeasureCompensationCoefficientCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.FirePreventionMeasureCompensationCoefficientCalcResponse;

        /**
         * Creates a plain object from a FirePreventionMeasureCompensationCoefficientCalcResponse message. Also converts values to other types if specified.
         * @param message FirePreventionMeasureCompensationCoefficientCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.FirePreventionMeasureCompensationCoefficientCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirePreventionMeasureCompensationCoefficientCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EvaluationResultsCalcRequest. */
    interface IEvaluationResultsCalcRequest {

        /** EvaluationResultsCalcRequest C1 */
        C1?: (number|null);

        /** EvaluationResultsCalcRequest C2 */
        C2?: (number|null);

        /** EvaluationResultsCalcRequest C3 */
        C3?: (number|null);

        /** EvaluationResultsCalcRequest materialCoefficientMf */
        materialCoefficientMf?: (number|null);

        /** EvaluationResultsCalcRequest processHazardCoefficientF3 */
        processHazardCoefficientF3?: (number|null);
    }

    /** Represents an EvaluationResultsCalcRequest. */
    class EvaluationResultsCalcRequest implements IEvaluationResultsCalcRequest {

        /**
         * Constructs a new EvaluationResultsCalcRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IEvaluationResultsCalcRequest);

        /** EvaluationResultsCalcRequest C1. */
        public C1: number;

        /** EvaluationResultsCalcRequest C2. */
        public C2: number;

        /** EvaluationResultsCalcRequest C3. */
        public C3: number;

        /** EvaluationResultsCalcRequest materialCoefficientMf. */
        public materialCoefficientMf: number;

        /** EvaluationResultsCalcRequest processHazardCoefficientF3. */
        public processHazardCoefficientF3: number;

        /**
         * Creates an EvaluationResultsCalcRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvaluationResultsCalcRequest
         */
        public static fromObject(object: { [k: string]: any }): dow.EvaluationResultsCalcRequest;

        /**
         * Creates a plain object from an EvaluationResultsCalcRequest message. Also converts values to other types if specified.
         * @param message EvaluationResultsCalcRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.EvaluationResultsCalcRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvaluationResultsCalcRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EvaluationResultsCalcResponse. */
    interface IEvaluationResultsCalcResponse {

        /** EvaluationResultsCalcResponse C */
        C?: (number|null);

        /** EvaluationResultsCalcResponse initialFEi */
        initialFEi?: (number|null);

        /** EvaluationResultsCalcResponse initialUnitHazardLevel */
        initialUnitHazardLevel?: (string|null);

        /** EvaluationResultsCalcResponse initialR */
        initialR?: (number|null);

        /** EvaluationResultsCalcResponse initialS */
        initialS?: (number|null);

        /** EvaluationResultsCalcResponse initialUnitHazardCoefficient */
        initialUnitHazardCoefficient?: (number|null);

        /** EvaluationResultsCalcResponse compensationFEi */
        compensationFEi?: (number|null);

        /** EvaluationResultsCalcResponse compensationUnitHazardLevel */
        compensationUnitHazardLevel?: (string|null);

        /** EvaluationResultsCalcResponse compensationR */
        compensationR?: (number|null);

        /** EvaluationResultsCalcResponse compensationS */
        compensationS?: (number|null);

        /** EvaluationResultsCalcResponse compensationUnitHazardCoefficient */
        compensationUnitHazardCoefficient?: (number|null);

        /** EvaluationResultsCalcResponse conclusion */
        conclusion?: (string|null);
    }

    /** Represents an EvaluationResultsCalcResponse. */
    class EvaluationResultsCalcResponse implements IEvaluationResultsCalcResponse {

        /**
         * Constructs a new EvaluationResultsCalcResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: dow.IEvaluationResultsCalcResponse);

        /** EvaluationResultsCalcResponse C. */
        public C: number;

        /** EvaluationResultsCalcResponse initialFEi. */
        public initialFEi: number;

        /** EvaluationResultsCalcResponse initialUnitHazardLevel. */
        public initialUnitHazardLevel: string;

        /** EvaluationResultsCalcResponse initialR. */
        public initialR: number;

        /** EvaluationResultsCalcResponse initialS. */
        public initialS: number;

        /** EvaluationResultsCalcResponse initialUnitHazardCoefficient. */
        public initialUnitHazardCoefficient: number;

        /** EvaluationResultsCalcResponse compensationFEi. */
        public compensationFEi: number;

        /** EvaluationResultsCalcResponse compensationUnitHazardLevel. */
        public compensationUnitHazardLevel: string;

        /** EvaluationResultsCalcResponse compensationR. */
        public compensationR: number;

        /** EvaluationResultsCalcResponse compensationS. */
        public compensationS: number;

        /** EvaluationResultsCalcResponse compensationUnitHazardCoefficient. */
        public compensationUnitHazardCoefficient: number;

        /** EvaluationResultsCalcResponse conclusion. */
        public conclusion: string;

        /**
         * Creates an EvaluationResultsCalcResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvaluationResultsCalcResponse
         */
        public static fromObject(object: { [k: string]: any }): dow.EvaluationResultsCalcResponse;

        /**
         * Creates a plain object from an EvaluationResultsCalcResponse message. Also converts values to other types if specified.
         * @param message EvaluationResultsCalcResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dow.EvaluationResultsCalcResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvaluationResultsCalcResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a DowService */
    class DowService extends $protobuf.rpc.Service {

        /**
         * Constructs a new DowService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls MaterialCoefficientGetChemicalActivityGrade.
         * @param request MaterialCoefficientGetChemicalActivityGradeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientGetChemicalActivityGradeResponse
         */
        public materialCoefficientGetChemicalActivityGrade(request: dow.IMaterialCoefficientGetChemicalActivityGradeRequest, callback: dow.DowService.MaterialCoefficientGetChemicalActivityGradeCallback): void;

        /**
         * Calls MaterialCoefficientGetChemicalActivityGrade.
         * @param request MaterialCoefficientGetChemicalActivityGradeRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientGetChemicalActivityGrade(request: dow.IMaterialCoefficientGetChemicalActivityGradeRequest): Promise<dow.MaterialCoefficientGetChemicalActivityGradeResponse>;

        /**
         * Calls MaterialCoefficient.
         * @param request MaterialCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientResponse
         */
        public materialCoefficient(request: dow.IMaterialCoefficientRequest, callback: dow.DowService.MaterialCoefficientCallback): void;

        /**
         * Calls MaterialCoefficient.
         * @param request MaterialCoefficientRequest message or plain object
         * @returns Promise
         */
        public materialCoefficient(request: dow.IMaterialCoefficientRequest): Promise<dow.MaterialCoefficientResponse>;

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @param request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientSaveUnknownMaterialResponse
         */
        public materialCoefficientSaveUnknownMaterial(request: dow.IMaterialCoefficientSaveUnknownMaterialRequest, callback: dow.DowService.MaterialCoefficientSaveUnknownMaterialCallback): void;

        /**
         * Calls MaterialCoefficientSaveUnknownMaterial.
         * @param request MaterialCoefficientSaveUnknownMaterialRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientSaveUnknownMaterial(request: dow.IMaterialCoefficientSaveUnknownMaterialRequest): Promise<dow.MaterialCoefficientSaveUnknownMaterialResponse>;

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @param request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownCoefficientResponse
         */
        public materialCoefficientGetKnownCoefficient(request: dow.IMaterialCoefficientGetKnownCoefficientRequest, callback: dow.DowService.MaterialCoefficientGetKnownCoefficientCallback): void;

        /**
         * Calls MaterialCoefficientGetKnownCoefficient.
         * @param request MaterialCoefficientGetKnownCoefficientRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientGetKnownCoefficient(request: dow.IMaterialCoefficientGetKnownCoefficientRequest): Promise<dow.MaterialCoefficientGetKnownCoefficientResponse>;

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @param request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientGetKnownNamesResponse
         */
        public materialCoefficientGetKnownNames(request: dow.IMaterialCoefficientGetKnownNamesRequest, callback: dow.DowService.MaterialCoefficientGetKnownNamesCallback): void;

        /**
         * Calls MaterialCoefficientGetKnownNames.
         * @param request MaterialCoefficientGetKnownNamesRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientGetKnownNames(request: dow.IMaterialCoefficientGetKnownNamesRequest): Promise<dow.MaterialCoefficientGetKnownNamesResponse>;

        /**
         * Calls MaterialCoefficientGetReactionCharacters.
         * @param request MaterialCoefficientGetReactionCharactersRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientGetReactionCharactersResponse
         */
        public materialCoefficientGetReactionCharacters(request: dow.IMaterialCoefficientGetReactionCharactersRequest, callback: dow.DowService.MaterialCoefficientGetReactionCharactersCallback): void;

        /**
         * Calls MaterialCoefficientGetReactionCharacters.
         * @param request MaterialCoefficientGetReactionCharactersRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientGetReactionCharacters(request: dow.IMaterialCoefficientGetReactionCharactersRequest): Promise<dow.MaterialCoefficientGetReactionCharactersResponse>;

        /**
         * Calls MaterialCoefficientGetTypes.
         * @param request MaterialCoefficientGetTypesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialCoefficientGetTypesResponse
         */
        public materialCoefficientGetTypes(request: dow.IMaterialCoefficientGetTypesRequest, callback: dow.DowService.MaterialCoefficientGetTypesCallback): void;

        /**
         * Calls MaterialCoefficientGetTypes.
         * @param request MaterialCoefficientGetTypesRequest message or plain object
         * @returns Promise
         */
        public materialCoefficientGetTypes(request: dow.IMaterialCoefficientGetTypesRequest): Promise<dow.MaterialCoefficientGetTypesResponse>;

        /**
         * Calls ProcessHazardCoefficientGet.
         * @param request ProcessHazardCoefficientGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ProcessHazardCoefficientGetResponse
         */
        public processHazardCoefficientGet(request: dow.IProcessHazardCoefficientGetRequest, callback: dow.DowService.ProcessHazardCoefficientGetCallback): void;

        /**
         * Calls ProcessHazardCoefficientGet.
         * @param request ProcessHazardCoefficientGetRequest message or plain object
         * @returns Promise
         */
        public processHazardCoefficientGet(request: dow.IProcessHazardCoefficientGetRequest): Promise<dow.ProcessHazardCoefficientGetResponse>;

        /**
         * Calls CompensationCoefficientGet.
         * @param request CompensationCoefficientGetRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CompensationCoefficientGetResponse
         */
        public compensationCoefficientGet(request: dow.ICompensationCoefficientGetRequest, callback: dow.DowService.CompensationCoefficientGetCallback): void;

        /**
         * Calls CompensationCoefficientGet.
         * @param request CompensationCoefficientGetRequest message or plain object
         * @returns Promise
         */
        public compensationCoefficientGet(request: dow.ICompensationCoefficientGetRequest): Promise<dow.CompensationCoefficientGetResponse>;

        /**
         * Calls GeneralProcessHazardCoefficientCalc.
         * @param request GeneralProcessHazardCoefficientCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GeneralProcessHazardCoefficientCalcResponse
         */
        public generalProcessHazardCoefficientCalc(request: dow.IGeneralProcessHazardCoefficientCalcRequest, callback: dow.DowService.GeneralProcessHazardCoefficientCalcCallback): void;

        /**
         * Calls GeneralProcessHazardCoefficientCalc.
         * @param request GeneralProcessHazardCoefficientCalcRequest message or plain object
         * @returns Promise
         */
        public generalProcessHazardCoefficientCalc(request: dow.IGeneralProcessHazardCoefficientCalcRequest): Promise<dow.GeneralProcessHazardCoefficientCalcResponse>;

        /**
         * Calls SpecialProcessHazardCoefficientCalc.
         * @param request SpecialProcessHazardCoefficientCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SpecialProcessHazardCoefficientCalcResponse
         */
        public specialProcessHazardCoefficientCalc(request: dow.ISpecialProcessHazardCoefficientCalcRequest, callback: dow.DowService.SpecialProcessHazardCoefficientCalcCallback): void;

        /**
         * Calls SpecialProcessHazardCoefficientCalc.
         * @param request SpecialProcessHazardCoefficientCalcRequest message or plain object
         * @returns Promise
         */
        public specialProcessHazardCoefficientCalc(request: dow.ISpecialProcessHazardCoefficientCalcRequest): Promise<dow.SpecialProcessHazardCoefficientCalcResponse>;

        /**
         * Calls ProcessControlCompensationCoefficientCalc.
         * @param request ProcessControlCompensationCoefficientCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ProcessControlCompensationCoefficientCalcResponse
         */
        public processControlCompensationCoefficientCalc(request: dow.IProcessControlCompensationCoefficientCalcRequest, callback: dow.DowService.ProcessControlCompensationCoefficientCalcCallback): void;

        /**
         * Calls ProcessControlCompensationCoefficientCalc.
         * @param request ProcessControlCompensationCoefficientCalcRequest message or plain object
         * @returns Promise
         */
        public processControlCompensationCoefficientCalc(request: dow.IProcessControlCompensationCoefficientCalcRequest): Promise<dow.ProcessControlCompensationCoefficientCalcResponse>;

        /**
         * Calls MaterialIsolationCompensationCoefficientCalc.
         * @param request MaterialIsolationCompensationCoefficientCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MaterialIsolationCompensationCoefficientCalcResponse
         */
        public materialIsolationCompensationCoefficientCalc(request: dow.IMaterialIsolationCompensationCoefficientCalcRequest, callback: dow.DowService.MaterialIsolationCompensationCoefficientCalcCallback): void;

        /**
         * Calls MaterialIsolationCompensationCoefficientCalc.
         * @param request MaterialIsolationCompensationCoefficientCalcRequest message or plain object
         * @returns Promise
         */
        public materialIsolationCompensationCoefficientCalc(request: dow.IMaterialIsolationCompensationCoefficientCalcRequest): Promise<dow.MaterialIsolationCompensationCoefficientCalcResponse>;

        /**
         * Calls FirePreventionMeasureCompensationCoefficientCalc.
         * @param request FirePreventionMeasureCompensationCoefficientCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FirePreventionMeasureCompensationCoefficientCalcResponse
         */
        public firePreventionMeasureCompensationCoefficientCalc(request: dow.IFirePreventionMeasureCompensationCoefficientCalcRequest, callback: dow.DowService.FirePreventionMeasureCompensationCoefficientCalcCallback): void;

        /**
         * Calls FirePreventionMeasureCompensationCoefficientCalc.
         * @param request FirePreventionMeasureCompensationCoefficientCalcRequest message or plain object
         * @returns Promise
         */
        public firePreventionMeasureCompensationCoefficientCalc(request: dow.IFirePreventionMeasureCompensationCoefficientCalcRequest): Promise<dow.FirePreventionMeasureCompensationCoefficientCalcResponse>;

        /**
         * Calls EvaluationResultsCalc.
         * @param request EvaluationResultsCalcRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and EvaluationResultsCalcResponse
         */
        public evaluationResultsCalc(request: dow.IEvaluationResultsCalcRequest, callback: dow.DowService.EvaluationResultsCalcCallback): void;

        /**
         * Calls EvaluationResultsCalc.
         * @param request EvaluationResultsCalcRequest message or plain object
         * @returns Promise
         */
        public evaluationResultsCalc(request: dow.IEvaluationResultsCalcRequest): Promise<dow.EvaluationResultsCalcResponse>;
    }

    namespace DowService {

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetChemicalActivityGrade}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientGetChemicalActivityGradeResponse
         */
        type MaterialCoefficientGetChemicalActivityGradeCallback = (error: (Error|null), response?: dow.MaterialCoefficientGetChemicalActivityGradeResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#materialCoefficient}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientResponse
         */
        type MaterialCoefficientCallback = (error: (Error|null), response?: dow.MaterialCoefficientResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientSaveUnknownMaterial}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientSaveUnknownMaterialResponse
         */
        type MaterialCoefficientSaveUnknownMaterialCallback = (error: (Error|null), response?: dow.MaterialCoefficientSaveUnknownMaterialResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetKnownCoefficient}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientGetKnownCoefficientResponse
         */
        type MaterialCoefficientGetKnownCoefficientCallback = (error: (Error|null), response?: dow.MaterialCoefficientGetKnownCoefficientResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetKnownNames}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientGetKnownNamesResponse
         */
        type MaterialCoefficientGetKnownNamesCallback = (error: (Error|null), response?: dow.MaterialCoefficientGetKnownNamesResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetReactionCharacters}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientGetReactionCharactersResponse
         */
        type MaterialCoefficientGetReactionCharactersCallback = (error: (Error|null), response?: dow.MaterialCoefficientGetReactionCharactersResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#materialCoefficientGetTypes}.
         * @param error Error, if any
         * @param [response] MaterialCoefficientGetTypesResponse
         */
        type MaterialCoefficientGetTypesCallback = (error: (Error|null), response?: dow.MaterialCoefficientGetTypesResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#processHazardCoefficientGet}.
         * @param error Error, if any
         * @param [response] ProcessHazardCoefficientGetResponse
         */
        type ProcessHazardCoefficientGetCallback = (error: (Error|null), response?: dow.ProcessHazardCoefficientGetResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#compensationCoefficientGet}.
         * @param error Error, if any
         * @param [response] CompensationCoefficientGetResponse
         */
        type CompensationCoefficientGetCallback = (error: (Error|null), response?: dow.CompensationCoefficientGetResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#generalProcessHazardCoefficientCalc}.
         * @param error Error, if any
         * @param [response] GeneralProcessHazardCoefficientCalcResponse
         */
        type GeneralProcessHazardCoefficientCalcCallback = (error: (Error|null), response?: dow.GeneralProcessHazardCoefficientCalcResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#specialProcessHazardCoefficientCalc}.
         * @param error Error, if any
         * @param [response] SpecialProcessHazardCoefficientCalcResponse
         */
        type SpecialProcessHazardCoefficientCalcCallback = (error: (Error|null), response?: dow.SpecialProcessHazardCoefficientCalcResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#processControlCompensationCoefficientCalc}.
         * @param error Error, if any
         * @param [response] ProcessControlCompensationCoefficientCalcResponse
         */
        type ProcessControlCompensationCoefficientCalcCallback = (error: (Error|null), response?: dow.ProcessControlCompensationCoefficientCalcResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#materialIsolationCompensationCoefficientCalc}.
         * @param error Error, if any
         * @param [response] MaterialIsolationCompensationCoefficientCalcResponse
         */
        type MaterialIsolationCompensationCoefficientCalcCallback = (error: (Error|null), response?: dow.MaterialIsolationCompensationCoefficientCalcResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#firePreventionMeasureCompensationCoefficientCalc}.
         * @param error Error, if any
         * @param [response] FirePreventionMeasureCompensationCoefficientCalcResponse
         */
        type FirePreventionMeasureCompensationCoefficientCalcCallback = (error: (Error|null), response?: dow.FirePreventionMeasureCompensationCoefficientCalcResponse) => void;

        /**
         * Callback as used by {@link dow.DowService#evaluationResultsCalc}.
         * @param error Error, if any
         * @param [response] EvaluationResultsCalcResponse
         */
        type EvaluationResultsCalcCallback = (error: (Error|null), response?: dow.EvaluationResultsCalcResponse) => void;
    }
}
