
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model candidates
 * 
 */
export type candidates = $Result.DefaultSelection<Prisma.$candidatesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model profile_views
 * 
 */
export type profile_views = $Result.DefaultSelection<Prisma.$profile_viewsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Candidates
 * const candidates = await prisma.candidates.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Candidates
   * const candidates = await prisma.candidates.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.candidates`: Exposes CRUD operations for the **candidates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidates.findMany()
    * ```
    */
  get candidates(): Prisma.candidatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile_views`: Exposes CRUD operations for the **profile_views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profile_views
    * const profile_views = await prisma.profile_views.findMany()
    * ```
    */
  get profile_views(): Prisma.profile_viewsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    candidates: 'candidates',
    users: 'users',
    profile_views: 'profile_views'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "candidates" | "users" | "profile_views"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      candidates: {
        payload: Prisma.$candidatesPayload<ExtArgs>
        fields: Prisma.candidatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findFirst: {
            args: Prisma.candidatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findMany: {
            args: Prisma.candidatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          create: {
            args: Prisma.candidatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          createMany: {
            args: Prisma.candidatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          delete: {
            args: Prisma.candidatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          update: {
            args: Prisma.candidatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          deleteMany: {
            args: Prisma.candidatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          upsert: {
            args: Prisma.candidatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          aggregate: {
            args: Prisma.CandidatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidates>
          }
          groupBy: {
            args: Prisma.candidatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidatesCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      profile_views: {
        payload: Prisma.$profile_viewsPayload<ExtArgs>
        fields: Prisma.profile_viewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profile_viewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profile_viewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>
          }
          findFirst: {
            args: Prisma.profile_viewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profile_viewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>
          }
          findMany: {
            args: Prisma.profile_viewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>[]
          }
          create: {
            args: Prisma.profile_viewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>
          }
          createMany: {
            args: Prisma.profile_viewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profile_viewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>[]
          }
          delete: {
            args: Prisma.profile_viewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>
          }
          update: {
            args: Prisma.profile_viewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>
          }
          deleteMany: {
            args: Prisma.profile_viewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profile_viewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profile_viewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>[]
          }
          upsert: {
            args: Prisma.profile_viewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profile_viewsPayload>
          }
          aggregate: {
            args: Prisma.Profile_viewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile_views>
          }
          groupBy: {
            args: Prisma.profile_viewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profile_viewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.profile_viewsCountArgs<ExtArgs>
            result: $Utils.Optional<Profile_viewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    candidates?: candidatesOmit
    users?: usersOmit
    profile_views?: profile_viewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CandidatesCountOutputType
   */

  export type CandidatesCountOutputType = {
    profile_views: number
  }

  export type CandidatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile_views?: boolean | CandidatesCountOutputTypeCountProfile_viewsArgs
  }

  // Custom InputTypes
  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatesCountOutputType
     */
    select?: CandidatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatesCountOutputType without action
   */
  export type CandidatesCountOutputTypeCountProfile_viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profile_viewsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    profile_views: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile_views?: boolean | UsersCountOutputTypeCountProfile_viewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProfile_viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profile_viewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model candidates
   */

  export type AggregateCandidates = {
    _count: CandidatesCountAggregateOutputType | null
    _avg: CandidatesAvgAggregateOutputType | null
    _sum: CandidatesSumAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  export type CandidatesAvgAggregateOutputType = {
    total_experience: Decimal | null
    relevant_experience: Decimal | null
    experience_years: Decimal | null
    year_of_birth: number | null
  }

  export type CandidatesSumAggregateOutputType = {
    total_experience: Decimal | null
    relevant_experience: Decimal | null
    experience_years: Decimal | null
    year_of_birth: number | null
  }

  export type CandidatesMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    phone: string | null
    gender: string | null
    location: string | null
    resume_url: string | null
    source_portal: string | null
    portal_unique_id: string | null
    portal_date: Date | null
    qualification: string | null
    college_name: string | null
    top_skills: string | null
    skills_raw: string | null
    total_experience: Decimal | null
    relevant_experience: Decimal | null
    experience_years: Decimal | null
    current_company: string | null
    current_designation: string | null
    companies_raw: string | null
    apply_date: Date | null
    calling_date: Date | null
    current_ctc: string | null
    expected_ctc: string | null
    feedback: string | null
    remark: string | null
    jd_brief: string | null
    ctc_feedback: string | null
    notice_period: string | null
    employment_type: string | null
    year_of_birth: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CandidatesMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    phone: string | null
    gender: string | null
    location: string | null
    resume_url: string | null
    source_portal: string | null
    portal_unique_id: string | null
    portal_date: Date | null
    qualification: string | null
    college_name: string | null
    top_skills: string | null
    skills_raw: string | null
    total_experience: Decimal | null
    relevant_experience: Decimal | null
    experience_years: Decimal | null
    current_company: string | null
    current_designation: string | null
    companies_raw: string | null
    apply_date: Date | null
    calling_date: Date | null
    current_ctc: string | null
    expected_ctc: string | null
    feedback: string | null
    remark: string | null
    jd_brief: string | null
    ctc_feedback: string | null
    notice_period: string | null
    employment_type: string | null
    year_of_birth: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CandidatesCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    phone: number
    gender: number
    location: number
    resume_url: number
    source_portal: number
    portal_unique_id: number
    portal_date: number
    qualification: number
    college_name: number
    top_skills: number
    skills_raw: number
    total_experience: number
    relevant_experience: number
    experience_years: number
    current_company: number
    current_designation: number
    companies_raw: number
    apply_date: number
    calling_date: number
    current_ctc: number
    expected_ctc: number
    feedback: number
    remark: number
    jd_brief: number
    ctc_feedback: number
    notice_period: number
    preferred_roles: number
    preferred_locations: number
    employment_type: number
    year_of_birth: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CandidatesAvgAggregateInputType = {
    total_experience?: true
    relevant_experience?: true
    experience_years?: true
    year_of_birth?: true
  }

  export type CandidatesSumAggregateInputType = {
    total_experience?: true
    relevant_experience?: true
    experience_years?: true
    year_of_birth?: true
  }

  export type CandidatesMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    gender?: true
    location?: true
    resume_url?: true
    source_portal?: true
    portal_unique_id?: true
    portal_date?: true
    qualification?: true
    college_name?: true
    top_skills?: true
    skills_raw?: true
    total_experience?: true
    relevant_experience?: true
    experience_years?: true
    current_company?: true
    current_designation?: true
    companies_raw?: true
    apply_date?: true
    calling_date?: true
    current_ctc?: true
    expected_ctc?: true
    feedback?: true
    remark?: true
    jd_brief?: true
    ctc_feedback?: true
    notice_period?: true
    employment_type?: true
    year_of_birth?: true
    created_at?: true
    updated_at?: true
  }

  export type CandidatesMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    gender?: true
    location?: true
    resume_url?: true
    source_portal?: true
    portal_unique_id?: true
    portal_date?: true
    qualification?: true
    college_name?: true
    top_skills?: true
    skills_raw?: true
    total_experience?: true
    relevant_experience?: true
    experience_years?: true
    current_company?: true
    current_designation?: true
    companies_raw?: true
    apply_date?: true
    calling_date?: true
    current_ctc?: true
    expected_ctc?: true
    feedback?: true
    remark?: true
    jd_brief?: true
    ctc_feedback?: true
    notice_period?: true
    employment_type?: true
    year_of_birth?: true
    created_at?: true
    updated_at?: true
  }

  export type CandidatesCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    gender?: true
    location?: true
    resume_url?: true
    source_portal?: true
    portal_unique_id?: true
    portal_date?: true
    qualification?: true
    college_name?: true
    top_skills?: true
    skills_raw?: true
    total_experience?: true
    relevant_experience?: true
    experience_years?: true
    current_company?: true
    current_designation?: true
    companies_raw?: true
    apply_date?: true
    calling_date?: true
    current_ctc?: true
    expected_ctc?: true
    feedback?: true
    remark?: true
    jd_brief?: true
    ctc_feedback?: true
    notice_period?: true
    preferred_roles?: true
    preferred_locations?: true
    employment_type?: true
    year_of_birth?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CandidatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to aggregate.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidates
    **/
    _count?: true | CandidatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatesMaxAggregateInputType
  }

  export type GetCandidatesAggregateType<T extends CandidatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidates[P]>
      : GetScalarType<T[P], AggregateCandidates[P]>
  }




  export type candidatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidatesWhereInput
    orderBy?: candidatesOrderByWithAggregationInput | candidatesOrderByWithAggregationInput[]
    by: CandidatesScalarFieldEnum[] | CandidatesScalarFieldEnum
    having?: candidatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatesCountAggregateInputType | true
    _avg?: CandidatesAvgAggregateInputType
    _sum?: CandidatesSumAggregateInputType
    _min?: CandidatesMinAggregateInputType
    _max?: CandidatesMaxAggregateInputType
  }

  export type CandidatesGroupByOutputType = {
    id: string
    full_name: string
    email: string | null
    phone: string | null
    gender: string | null
    location: string | null
    resume_url: string | null
    source_portal: string | null
    portal_unique_id: string | null
    portal_date: Date | null
    qualification: string | null
    college_name: string | null
    top_skills: string | null
    skills_raw: string | null
    total_experience: Decimal | null
    relevant_experience: Decimal | null
    experience_years: Decimal | null
    current_company: string | null
    current_designation: string | null
    companies_raw: string | null
    apply_date: Date | null
    calling_date: Date | null
    current_ctc: string | null
    expected_ctc: string | null
    feedback: string | null
    remark: string | null
    jd_brief: string | null
    ctc_feedback: string | null
    notice_period: string | null
    preferred_roles: string[]
    preferred_locations: string[]
    employment_type: string | null
    year_of_birth: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: CandidatesCountAggregateOutputType | null
    _avg: CandidatesAvgAggregateOutputType | null
    _sum: CandidatesSumAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  type GetCandidatesGroupByPayload<T extends candidatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
        }
      >
    >


  export type candidatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    location?: boolean
    resume_url?: boolean
    source_portal?: boolean
    portal_unique_id?: boolean
    portal_date?: boolean
    qualification?: boolean
    college_name?: boolean
    top_skills?: boolean
    skills_raw?: boolean
    total_experience?: boolean
    relevant_experience?: boolean
    experience_years?: boolean
    current_company?: boolean
    current_designation?: boolean
    companies_raw?: boolean
    apply_date?: boolean
    calling_date?: boolean
    current_ctc?: boolean
    expected_ctc?: boolean
    feedback?: boolean
    remark?: boolean
    jd_brief?: boolean
    ctc_feedback?: boolean
    notice_period?: boolean
    preferred_roles?: boolean
    preferred_locations?: boolean
    employment_type?: boolean
    year_of_birth?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile_views?: boolean | candidates$profile_viewsArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    location?: boolean
    resume_url?: boolean
    source_portal?: boolean
    portal_unique_id?: boolean
    portal_date?: boolean
    qualification?: boolean
    college_name?: boolean
    top_skills?: boolean
    skills_raw?: boolean
    total_experience?: boolean
    relevant_experience?: boolean
    experience_years?: boolean
    current_company?: boolean
    current_designation?: boolean
    companies_raw?: boolean
    apply_date?: boolean
    calling_date?: boolean
    current_ctc?: boolean
    expected_ctc?: boolean
    feedback?: boolean
    remark?: boolean
    jd_brief?: boolean
    ctc_feedback?: boolean
    notice_period?: boolean
    preferred_roles?: boolean
    preferred_locations?: boolean
    employment_type?: boolean
    year_of_birth?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    location?: boolean
    resume_url?: boolean
    source_portal?: boolean
    portal_unique_id?: boolean
    portal_date?: boolean
    qualification?: boolean
    college_name?: boolean
    top_skills?: boolean
    skills_raw?: boolean
    total_experience?: boolean
    relevant_experience?: boolean
    experience_years?: boolean
    current_company?: boolean
    current_designation?: boolean
    companies_raw?: boolean
    apply_date?: boolean
    calling_date?: boolean
    current_ctc?: boolean
    expected_ctc?: boolean
    feedback?: boolean
    remark?: boolean
    jd_brief?: boolean
    ctc_feedback?: boolean
    notice_period?: boolean
    preferred_roles?: boolean
    preferred_locations?: boolean
    employment_type?: boolean
    year_of_birth?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["candidates"]>

  export type candidatesSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    gender?: boolean
    location?: boolean
    resume_url?: boolean
    source_portal?: boolean
    portal_unique_id?: boolean
    portal_date?: boolean
    qualification?: boolean
    college_name?: boolean
    top_skills?: boolean
    skills_raw?: boolean
    total_experience?: boolean
    relevant_experience?: boolean
    experience_years?: boolean
    current_company?: boolean
    current_designation?: boolean
    companies_raw?: boolean
    apply_date?: boolean
    calling_date?: boolean
    current_ctc?: boolean
    expected_ctc?: boolean
    feedback?: boolean
    remark?: boolean
    jd_brief?: boolean
    ctc_feedback?: boolean
    notice_period?: boolean
    preferred_roles?: boolean
    preferred_locations?: boolean
    employment_type?: boolean
    year_of_birth?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type candidatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "phone" | "gender" | "location" | "resume_url" | "source_portal" | "portal_unique_id" | "portal_date" | "qualification" | "college_name" | "top_skills" | "skills_raw" | "total_experience" | "relevant_experience" | "experience_years" | "current_company" | "current_designation" | "companies_raw" | "apply_date" | "calling_date" | "current_ctc" | "expected_ctc" | "feedback" | "remark" | "jd_brief" | "ctc_feedback" | "notice_period" | "preferred_roles" | "preferred_locations" | "employment_type" | "year_of_birth" | "created_at" | "updated_at", ExtArgs["result"]["candidates"]>
  export type candidatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile_views?: boolean | candidates$profile_viewsArgs<ExtArgs>
    _count?: boolean | CandidatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type candidatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type candidatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $candidatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidates"
    objects: {
      profile_views: Prisma.$profile_viewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string | null
      phone: string | null
      gender: string | null
      location: string | null
      resume_url: string | null
      source_portal: string | null
      portal_unique_id: string | null
      portal_date: Date | null
      qualification: string | null
      college_name: string | null
      top_skills: string | null
      skills_raw: string | null
      total_experience: Prisma.Decimal | null
      relevant_experience: Prisma.Decimal | null
      experience_years: Prisma.Decimal | null
      current_company: string | null
      current_designation: string | null
      companies_raw: string | null
      apply_date: Date | null
      calling_date: Date | null
      current_ctc: string | null
      expected_ctc: string | null
      feedback: string | null
      remark: string | null
      jd_brief: string | null
      ctc_feedback: string | null
      notice_period: string | null
      preferred_roles: string[]
      preferred_locations: string[]
      employment_type: string | null
      year_of_birth: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["candidates"]>
    composites: {}
  }

  type candidatesGetPayload<S extends boolean | null | undefined | candidatesDefaultArgs> = $Result.GetResult<Prisma.$candidatesPayload, S>

  type candidatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatesCountAggregateInputType | true
    }

  export interface candidatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidates'], meta: { name: 'candidates' } }
    /**
     * Find zero or one Candidates that matches the filter.
     * @param {candidatesFindUniqueArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidatesFindUniqueArgs>(args: SelectSubset<T, candidatesFindUniqueArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidatesFindUniqueOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidatesFindUniqueOrThrowArgs>(args: SelectSubset<T, candidatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidatesFindFirstArgs>(args?: SelectSubset<T, candidatesFindFirstArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidatesFindFirstOrThrowArgs>(args?: SelectSubset<T, candidatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidates.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatesWithIdOnly = await prisma.candidates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends candidatesFindManyArgs>(args?: SelectSubset<T, candidatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidates.
     * @param {candidatesCreateArgs} args - Arguments to create a Candidates.
     * @example
     * // Create one Candidates
     * const Candidates = await prisma.candidates.create({
     *   data: {
     *     // ... data to create a Candidates
     *   }
     * })
     * 
     */
    create<T extends candidatesCreateArgs>(args: SelectSubset<T, candidatesCreateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {candidatesCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidatesCreateManyArgs>(args?: SelectSubset<T, candidatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {candidatesCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidatesWithIdOnly = await prisma.candidates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidatesCreateManyAndReturnArgs>(args?: SelectSubset<T, candidatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidates.
     * @param {candidatesDeleteArgs} args - Arguments to delete one Candidates.
     * @example
     * // Delete one Candidates
     * const Candidates = await prisma.candidates.delete({
     *   where: {
     *     // ... filter to delete one Candidates
     *   }
     * })
     * 
     */
    delete<T extends candidatesDeleteArgs>(args: SelectSubset<T, candidatesDeleteArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidates.
     * @param {candidatesUpdateArgs} args - Arguments to update one Candidates.
     * @example
     * // Update one Candidates
     * const candidates = await prisma.candidates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidatesUpdateArgs>(args: SelectSubset<T, candidatesUpdateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {candidatesDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidatesDeleteManyArgs>(args?: SelectSubset<T, candidatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidatesUpdateManyArgs>(args: SelectSubset<T, candidatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {candidatesUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidatesWithIdOnly = await prisma.candidates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends candidatesUpdateManyAndReturnArgs>(args: SelectSubset<T, candidatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidates.
     * @param {candidatesUpsertArgs} args - Arguments to update or create a Candidates.
     * @example
     * // Update or create a Candidates
     * const candidates = await prisma.candidates.upsert({
     *   create: {
     *     // ... data to create a Candidates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidates we want to update
     *   }
     * })
     */
    upsert<T extends candidatesUpsertArgs>(args: SelectSubset<T, candidatesUpsertArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidates.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends candidatesCountArgs>(
      args?: Subset<T, candidatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidatesAggregateArgs>(args: Subset<T, CandidatesAggregateArgs>): Prisma.PrismaPromise<GetCandidatesAggregateType<T>>

    /**
     * Group by Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends candidatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidatesGroupByArgs['orderBy'] }
        : { orderBy?: candidatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, candidatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidates model
   */
  readonly fields: candidatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile_views<T extends candidates$profile_viewsArgs<ExtArgs> = {}>(args?: Subset<T, candidates$profile_viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the candidates model
   */
  interface candidatesFieldRefs {
    readonly id: FieldRef<"candidates", 'String'>
    readonly full_name: FieldRef<"candidates", 'String'>
    readonly email: FieldRef<"candidates", 'String'>
    readonly phone: FieldRef<"candidates", 'String'>
    readonly gender: FieldRef<"candidates", 'String'>
    readonly location: FieldRef<"candidates", 'String'>
    readonly resume_url: FieldRef<"candidates", 'String'>
    readonly source_portal: FieldRef<"candidates", 'String'>
    readonly portal_unique_id: FieldRef<"candidates", 'String'>
    readonly portal_date: FieldRef<"candidates", 'DateTime'>
    readonly qualification: FieldRef<"candidates", 'String'>
    readonly college_name: FieldRef<"candidates", 'String'>
    readonly top_skills: FieldRef<"candidates", 'String'>
    readonly skills_raw: FieldRef<"candidates", 'String'>
    readonly total_experience: FieldRef<"candidates", 'Decimal'>
    readonly relevant_experience: FieldRef<"candidates", 'Decimal'>
    readonly experience_years: FieldRef<"candidates", 'Decimal'>
    readonly current_company: FieldRef<"candidates", 'String'>
    readonly current_designation: FieldRef<"candidates", 'String'>
    readonly companies_raw: FieldRef<"candidates", 'String'>
    readonly apply_date: FieldRef<"candidates", 'DateTime'>
    readonly calling_date: FieldRef<"candidates", 'DateTime'>
    readonly current_ctc: FieldRef<"candidates", 'String'>
    readonly expected_ctc: FieldRef<"candidates", 'String'>
    readonly feedback: FieldRef<"candidates", 'String'>
    readonly remark: FieldRef<"candidates", 'String'>
    readonly jd_brief: FieldRef<"candidates", 'String'>
    readonly ctc_feedback: FieldRef<"candidates", 'String'>
    readonly notice_period: FieldRef<"candidates", 'String'>
    readonly preferred_roles: FieldRef<"candidates", 'String[]'>
    readonly preferred_locations: FieldRef<"candidates", 'String[]'>
    readonly employment_type: FieldRef<"candidates", 'String'>
    readonly year_of_birth: FieldRef<"candidates", 'Int'>
    readonly created_at: FieldRef<"candidates", 'DateTime'>
    readonly updated_at: FieldRef<"candidates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * candidates findUnique
   */
  export type candidatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findUniqueOrThrow
   */
  export type candidatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findFirst
   */
  export type candidatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findFirstOrThrow
   */
  export type candidatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findMany
   */
  export type candidatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates create
   */
  export type candidatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The data needed to create a candidates.
     */
    data: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
  }

  /**
   * candidates createMany
   */
  export type candidatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidates.
     */
    data: candidatesCreateManyInput | candidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidates createManyAndReturn
   */
  export type candidatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data used to create many candidates.
     */
    data: candidatesCreateManyInput | candidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidates update
   */
  export type candidatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The data needed to update a candidates.
     */
    data: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
    /**
     * Choose, which candidates to update.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates updateMany
   */
  export type candidatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidates.
     */
    data: XOR<candidatesUpdateManyMutationInput, candidatesUncheckedUpdateManyInput>
    /**
     * Filter which candidates to update
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to update.
     */
    limit?: number
  }

  /**
   * candidates updateManyAndReturn
   */
  export type candidatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data used to update candidates.
     */
    data: XOR<candidatesUpdateManyMutationInput, candidatesUncheckedUpdateManyInput>
    /**
     * Filter which candidates to update
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to update.
     */
    limit?: number
  }

  /**
   * candidates upsert
   */
  export type candidatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * The filter to search for the candidates to update in case it exists.
     */
    where: candidatesWhereUniqueInput
    /**
     * In case the candidates found by the `where` argument doesn't exist, create a new candidates with this data.
     */
    create: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
    /**
     * In case the candidates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
  }

  /**
   * candidates delete
   */
  export type candidatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
    /**
     * Filter which candidates to delete.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates deleteMany
   */
  export type candidatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to delete
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to delete.
     */
    limit?: number
  }

  /**
   * candidates.profile_views
   */
  export type candidates$profile_viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    where?: profile_viewsWhereInput
    orderBy?: profile_viewsOrderByWithRelationInput | profile_viewsOrderByWithRelationInput[]
    cursor?: profile_viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profile_viewsScalarFieldEnum | Profile_viewsScalarFieldEnum[]
  }

  /**
   * candidates without action
   */
  export type candidatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidatesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    password: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    full_name: string
    email: string
    password: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    profile_views?: boolean | users$profile_viewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "password" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile_views?: boolean | users$profile_viewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      profile_views: Prisma.$profile_viewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      password: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile_views<T extends users$profile_viewsArgs<ExtArgs> = {}>(args?: Subset<T, users$profile_viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.profile_views
   */
  export type users$profile_viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    where?: profile_viewsWhereInput
    orderBy?: profile_viewsOrderByWithRelationInput | profile_viewsOrderByWithRelationInput[]
    cursor?: profile_viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profile_viewsScalarFieldEnum | Profile_viewsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model profile_views
   */

  export type AggregateProfile_views = {
    _count: Profile_viewsCountAggregateOutputType | null
    _min: Profile_viewsMinAggregateOutputType | null
    _max: Profile_viewsMaxAggregateOutputType | null
  }

  export type Profile_viewsMinAggregateOutputType = {
    id: string | null
    viewer_id: string | null
    candidate_id: string | null
    viewed_at: Date | null
    resume_viewed: boolean | null
    resume_viewed_at: Date | null
  }

  export type Profile_viewsMaxAggregateOutputType = {
    id: string | null
    viewer_id: string | null
    candidate_id: string | null
    viewed_at: Date | null
    resume_viewed: boolean | null
    resume_viewed_at: Date | null
  }

  export type Profile_viewsCountAggregateOutputType = {
    id: number
    viewer_id: number
    candidate_id: number
    viewed_at: number
    resume_viewed: number
    resume_viewed_at: number
    _all: number
  }


  export type Profile_viewsMinAggregateInputType = {
    id?: true
    viewer_id?: true
    candidate_id?: true
    viewed_at?: true
    resume_viewed?: true
    resume_viewed_at?: true
  }

  export type Profile_viewsMaxAggregateInputType = {
    id?: true
    viewer_id?: true
    candidate_id?: true
    viewed_at?: true
    resume_viewed?: true
    resume_viewed_at?: true
  }

  export type Profile_viewsCountAggregateInputType = {
    id?: true
    viewer_id?: true
    candidate_id?: true
    viewed_at?: true
    resume_viewed?: true
    resume_viewed_at?: true
    _all?: true
  }

  export type Profile_viewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile_views to aggregate.
     */
    where?: profile_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_views to fetch.
     */
    orderBy?: profile_viewsOrderByWithRelationInput | profile_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profile_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profile_views
    **/
    _count?: true | Profile_viewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profile_viewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profile_viewsMaxAggregateInputType
  }

  export type GetProfile_viewsAggregateType<T extends Profile_viewsAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile_views]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile_views[P]>
      : GetScalarType<T[P], AggregateProfile_views[P]>
  }




  export type profile_viewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profile_viewsWhereInput
    orderBy?: profile_viewsOrderByWithAggregationInput | profile_viewsOrderByWithAggregationInput[]
    by: Profile_viewsScalarFieldEnum[] | Profile_viewsScalarFieldEnum
    having?: profile_viewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profile_viewsCountAggregateInputType | true
    _min?: Profile_viewsMinAggregateInputType
    _max?: Profile_viewsMaxAggregateInputType
  }

  export type Profile_viewsGroupByOutputType = {
    id: string
    viewer_id: string | null
    candidate_id: string
    viewed_at: Date
    resume_viewed: boolean
    resume_viewed_at: Date | null
    _count: Profile_viewsCountAggregateOutputType | null
    _min: Profile_viewsMinAggregateOutputType | null
    _max: Profile_viewsMaxAggregateOutputType | null
  }

  type GetProfile_viewsGroupByPayload<T extends profile_viewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profile_viewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profile_viewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profile_viewsGroupByOutputType[P]>
            : GetScalarType<T[P], Profile_viewsGroupByOutputType[P]>
        }
      >
    >


  export type profile_viewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewer_id?: boolean
    candidate_id?: boolean
    viewed_at?: boolean
    resume_viewed?: boolean
    resume_viewed_at?: boolean
    viewer?: boolean | profile_views$viewerArgs<ExtArgs>
    candidate?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile_views"]>

  export type profile_viewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewer_id?: boolean
    candidate_id?: boolean
    viewed_at?: boolean
    resume_viewed?: boolean
    resume_viewed_at?: boolean
    viewer?: boolean | profile_views$viewerArgs<ExtArgs>
    candidate?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile_views"]>

  export type profile_viewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewer_id?: boolean
    candidate_id?: boolean
    viewed_at?: boolean
    resume_viewed?: boolean
    resume_viewed_at?: boolean
    viewer?: boolean | profile_views$viewerArgs<ExtArgs>
    candidate?: boolean | candidatesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile_views"]>

  export type profile_viewsSelectScalar = {
    id?: boolean
    viewer_id?: boolean
    candidate_id?: boolean
    viewed_at?: boolean
    resume_viewed?: boolean
    resume_viewed_at?: boolean
  }

  export type profile_viewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewer_id" | "candidate_id" | "viewed_at" | "resume_viewed" | "resume_viewed_at", ExtArgs["result"]["profile_views"]>
  export type profile_viewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viewer?: boolean | profile_views$viewerArgs<ExtArgs>
    candidate?: boolean | candidatesDefaultArgs<ExtArgs>
  }
  export type profile_viewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viewer?: boolean | profile_views$viewerArgs<ExtArgs>
    candidate?: boolean | candidatesDefaultArgs<ExtArgs>
  }
  export type profile_viewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viewer?: boolean | profile_views$viewerArgs<ExtArgs>
    candidate?: boolean | candidatesDefaultArgs<ExtArgs>
  }

  export type $profile_viewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profile_views"
    objects: {
      viewer: Prisma.$usersPayload<ExtArgs> | null
      candidate: Prisma.$candidatesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      viewer_id: string | null
      candidate_id: string
      viewed_at: Date
      resume_viewed: boolean
      resume_viewed_at: Date | null
    }, ExtArgs["result"]["profile_views"]>
    composites: {}
  }

  type profile_viewsGetPayload<S extends boolean | null | undefined | profile_viewsDefaultArgs> = $Result.GetResult<Prisma.$profile_viewsPayload, S>

  type profile_viewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profile_viewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profile_viewsCountAggregateInputType | true
    }

  export interface profile_viewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profile_views'], meta: { name: 'profile_views' } }
    /**
     * Find zero or one Profile_views that matches the filter.
     * @param {profile_viewsFindUniqueArgs} args - Arguments to find a Profile_views
     * @example
     * // Get one Profile_views
     * const profile_views = await prisma.profile_views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profile_viewsFindUniqueArgs>(args: SelectSubset<T, profile_viewsFindUniqueArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile_views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profile_viewsFindUniqueOrThrowArgs} args - Arguments to find a Profile_views
     * @example
     * // Get one Profile_views
     * const profile_views = await prisma.profile_views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profile_viewsFindUniqueOrThrowArgs>(args: SelectSubset<T, profile_viewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile_views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_viewsFindFirstArgs} args - Arguments to find a Profile_views
     * @example
     * // Get one Profile_views
     * const profile_views = await prisma.profile_views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profile_viewsFindFirstArgs>(args?: SelectSubset<T, profile_viewsFindFirstArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile_views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_viewsFindFirstOrThrowArgs} args - Arguments to find a Profile_views
     * @example
     * // Get one Profile_views
     * const profile_views = await prisma.profile_views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profile_viewsFindFirstOrThrowArgs>(args?: SelectSubset<T, profile_viewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profile_views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_viewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profile_views
     * const profile_views = await prisma.profile_views.findMany()
     * 
     * // Get first 10 Profile_views
     * const profile_views = await prisma.profile_views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profile_viewsWithIdOnly = await prisma.profile_views.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profile_viewsFindManyArgs>(args?: SelectSubset<T, profile_viewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile_views.
     * @param {profile_viewsCreateArgs} args - Arguments to create a Profile_views.
     * @example
     * // Create one Profile_views
     * const Profile_views = await prisma.profile_views.create({
     *   data: {
     *     // ... data to create a Profile_views
     *   }
     * })
     * 
     */
    create<T extends profile_viewsCreateArgs>(args: SelectSubset<T, profile_viewsCreateArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profile_views.
     * @param {profile_viewsCreateManyArgs} args - Arguments to create many Profile_views.
     * @example
     * // Create many Profile_views
     * const profile_views = await prisma.profile_views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profile_viewsCreateManyArgs>(args?: SelectSubset<T, profile_viewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profile_views and returns the data saved in the database.
     * @param {profile_viewsCreateManyAndReturnArgs} args - Arguments to create many Profile_views.
     * @example
     * // Create many Profile_views
     * const profile_views = await prisma.profile_views.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profile_views and only return the `id`
     * const profile_viewsWithIdOnly = await prisma.profile_views.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profile_viewsCreateManyAndReturnArgs>(args?: SelectSubset<T, profile_viewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile_views.
     * @param {profile_viewsDeleteArgs} args - Arguments to delete one Profile_views.
     * @example
     * // Delete one Profile_views
     * const Profile_views = await prisma.profile_views.delete({
     *   where: {
     *     // ... filter to delete one Profile_views
     *   }
     * })
     * 
     */
    delete<T extends profile_viewsDeleteArgs>(args: SelectSubset<T, profile_viewsDeleteArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile_views.
     * @param {profile_viewsUpdateArgs} args - Arguments to update one Profile_views.
     * @example
     * // Update one Profile_views
     * const profile_views = await prisma.profile_views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profile_viewsUpdateArgs>(args: SelectSubset<T, profile_viewsUpdateArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profile_views.
     * @param {profile_viewsDeleteManyArgs} args - Arguments to filter Profile_views to delete.
     * @example
     * // Delete a few Profile_views
     * const { count } = await prisma.profile_views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profile_viewsDeleteManyArgs>(args?: SelectSubset<T, profile_viewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profile_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_viewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profile_views
     * const profile_views = await prisma.profile_views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profile_viewsUpdateManyArgs>(args: SelectSubset<T, profile_viewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profile_views and returns the data updated in the database.
     * @param {profile_viewsUpdateManyAndReturnArgs} args - Arguments to update many Profile_views.
     * @example
     * // Update many Profile_views
     * const profile_views = await prisma.profile_views.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profile_views and only return the `id`
     * const profile_viewsWithIdOnly = await prisma.profile_views.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profile_viewsUpdateManyAndReturnArgs>(args: SelectSubset<T, profile_viewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile_views.
     * @param {profile_viewsUpsertArgs} args - Arguments to update or create a Profile_views.
     * @example
     * // Update or create a Profile_views
     * const profile_views = await prisma.profile_views.upsert({
     *   create: {
     *     // ... data to create a Profile_views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile_views we want to update
     *   }
     * })
     */
    upsert<T extends profile_viewsUpsertArgs>(args: SelectSubset<T, profile_viewsUpsertArgs<ExtArgs>>): Prisma__profile_viewsClient<$Result.GetResult<Prisma.$profile_viewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profile_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_viewsCountArgs} args - Arguments to filter Profile_views to count.
     * @example
     * // Count the number of Profile_views
     * const count = await prisma.profile_views.count({
     *   where: {
     *     // ... the filter for the Profile_views we want to count
     *   }
     * })
    **/
    count<T extends profile_viewsCountArgs>(
      args?: Subset<T, profile_viewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profile_viewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profile_viewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Profile_viewsAggregateArgs>(args: Subset<T, Profile_viewsAggregateArgs>): Prisma.PrismaPromise<GetProfile_viewsAggregateType<T>>

    /**
     * Group by Profile_views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_viewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profile_viewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profile_viewsGroupByArgs['orderBy'] }
        : { orderBy?: profile_viewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profile_viewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfile_viewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profile_views model
   */
  readonly fields: profile_viewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile_views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profile_viewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viewer<T extends profile_views$viewerArgs<ExtArgs> = {}>(args?: Subset<T, profile_views$viewerArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    candidate<T extends candidatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, candidatesDefaultArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profile_views model
   */
  interface profile_viewsFieldRefs {
    readonly id: FieldRef<"profile_views", 'String'>
    readonly viewer_id: FieldRef<"profile_views", 'String'>
    readonly candidate_id: FieldRef<"profile_views", 'String'>
    readonly viewed_at: FieldRef<"profile_views", 'DateTime'>
    readonly resume_viewed: FieldRef<"profile_views", 'Boolean'>
    readonly resume_viewed_at: FieldRef<"profile_views", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * profile_views findUnique
   */
  export type profile_viewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * Filter, which profile_views to fetch.
     */
    where: profile_viewsWhereUniqueInput
  }

  /**
   * profile_views findUniqueOrThrow
   */
  export type profile_viewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * Filter, which profile_views to fetch.
     */
    where: profile_viewsWhereUniqueInput
  }

  /**
   * profile_views findFirst
   */
  export type profile_viewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * Filter, which profile_views to fetch.
     */
    where?: profile_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_views to fetch.
     */
    orderBy?: profile_viewsOrderByWithRelationInput | profile_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profile_views.
     */
    cursor?: profile_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profile_views.
     */
    distinct?: Profile_viewsScalarFieldEnum | Profile_viewsScalarFieldEnum[]
  }

  /**
   * profile_views findFirstOrThrow
   */
  export type profile_viewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * Filter, which profile_views to fetch.
     */
    where?: profile_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_views to fetch.
     */
    orderBy?: profile_viewsOrderByWithRelationInput | profile_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profile_views.
     */
    cursor?: profile_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profile_views.
     */
    distinct?: Profile_viewsScalarFieldEnum | Profile_viewsScalarFieldEnum[]
  }

  /**
   * profile_views findMany
   */
  export type profile_viewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * Filter, which profile_views to fetch.
     */
    where?: profile_viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_views to fetch.
     */
    orderBy?: profile_viewsOrderByWithRelationInput | profile_viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profile_views.
     */
    cursor?: profile_viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_views.
     */
    skip?: number
    distinct?: Profile_viewsScalarFieldEnum | Profile_viewsScalarFieldEnum[]
  }

  /**
   * profile_views create
   */
  export type profile_viewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * The data needed to create a profile_views.
     */
    data: XOR<profile_viewsCreateInput, profile_viewsUncheckedCreateInput>
  }

  /**
   * profile_views createMany
   */
  export type profile_viewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profile_views.
     */
    data: profile_viewsCreateManyInput | profile_viewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profile_views createManyAndReturn
   */
  export type profile_viewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * The data used to create many profile_views.
     */
    data: profile_viewsCreateManyInput | profile_viewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profile_views update
   */
  export type profile_viewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * The data needed to update a profile_views.
     */
    data: XOR<profile_viewsUpdateInput, profile_viewsUncheckedUpdateInput>
    /**
     * Choose, which profile_views to update.
     */
    where: profile_viewsWhereUniqueInput
  }

  /**
   * profile_views updateMany
   */
  export type profile_viewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profile_views.
     */
    data: XOR<profile_viewsUpdateManyMutationInput, profile_viewsUncheckedUpdateManyInput>
    /**
     * Filter which profile_views to update
     */
    where?: profile_viewsWhereInput
    /**
     * Limit how many profile_views to update.
     */
    limit?: number
  }

  /**
   * profile_views updateManyAndReturn
   */
  export type profile_viewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * The data used to update profile_views.
     */
    data: XOR<profile_viewsUpdateManyMutationInput, profile_viewsUncheckedUpdateManyInput>
    /**
     * Filter which profile_views to update
     */
    where?: profile_viewsWhereInput
    /**
     * Limit how many profile_views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profile_views upsert
   */
  export type profile_viewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * The filter to search for the profile_views to update in case it exists.
     */
    where: profile_viewsWhereUniqueInput
    /**
     * In case the profile_views found by the `where` argument doesn't exist, create a new profile_views with this data.
     */
    create: XOR<profile_viewsCreateInput, profile_viewsUncheckedCreateInput>
    /**
     * In case the profile_views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profile_viewsUpdateInput, profile_viewsUncheckedUpdateInput>
  }

  /**
   * profile_views delete
   */
  export type profile_viewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
    /**
     * Filter which profile_views to delete.
     */
    where: profile_viewsWhereUniqueInput
  }

  /**
   * profile_views deleteMany
   */
  export type profile_viewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile_views to delete
     */
    where?: profile_viewsWhereInput
    /**
     * Limit how many profile_views to delete.
     */
    limit?: number
  }

  /**
   * profile_views.viewer
   */
  export type profile_views$viewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * profile_views without action
   */
  export type profile_viewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile_views
     */
    select?: profile_viewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile_views
     */
    omit?: profile_viewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profile_viewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CandidatesScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    location: 'location',
    resume_url: 'resume_url',
    source_portal: 'source_portal',
    portal_unique_id: 'portal_unique_id',
    portal_date: 'portal_date',
    qualification: 'qualification',
    college_name: 'college_name',
    top_skills: 'top_skills',
    skills_raw: 'skills_raw',
    total_experience: 'total_experience',
    relevant_experience: 'relevant_experience',
    experience_years: 'experience_years',
    current_company: 'current_company',
    current_designation: 'current_designation',
    companies_raw: 'companies_raw',
    apply_date: 'apply_date',
    calling_date: 'calling_date',
    current_ctc: 'current_ctc',
    expected_ctc: 'expected_ctc',
    feedback: 'feedback',
    remark: 'remark',
    jd_brief: 'jd_brief',
    ctc_feedback: 'ctc_feedback',
    notice_period: 'notice_period',
    preferred_roles: 'preferred_roles',
    preferred_locations: 'preferred_locations',
    employment_type: 'employment_type',
    year_of_birth: 'year_of_birth',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CandidatesScalarFieldEnum = (typeof CandidatesScalarFieldEnum)[keyof typeof CandidatesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Profile_viewsScalarFieldEnum: {
    id: 'id',
    viewer_id: 'viewer_id',
    candidate_id: 'candidate_id',
    viewed_at: 'viewed_at',
    resume_viewed: 'resume_viewed',
    resume_viewed_at: 'resume_viewed_at'
  };

  export type Profile_viewsScalarFieldEnum = (typeof Profile_viewsScalarFieldEnum)[keyof typeof Profile_viewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type candidatesWhereInput = {
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    id?: UuidFilter<"candidates"> | string
    full_name?: StringFilter<"candidates"> | string
    email?: StringNullableFilter<"candidates"> | string | null
    phone?: StringNullableFilter<"candidates"> | string | null
    gender?: StringNullableFilter<"candidates"> | string | null
    location?: StringNullableFilter<"candidates"> | string | null
    resume_url?: StringNullableFilter<"candidates"> | string | null
    source_portal?: StringNullableFilter<"candidates"> | string | null
    portal_unique_id?: StringNullableFilter<"candidates"> | string | null
    portal_date?: DateTimeNullableFilter<"candidates"> | Date | string | null
    qualification?: StringNullableFilter<"candidates"> | string | null
    college_name?: StringNullableFilter<"candidates"> | string | null
    top_skills?: StringNullableFilter<"candidates"> | string | null
    skills_raw?: StringNullableFilter<"candidates"> | string | null
    total_experience?: DecimalNullableFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: DecimalNullableFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    experience_years?: DecimalNullableFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    current_company?: StringNullableFilter<"candidates"> | string | null
    current_designation?: StringNullableFilter<"candidates"> | string | null
    companies_raw?: StringNullableFilter<"candidates"> | string | null
    apply_date?: DateTimeNullableFilter<"candidates"> | Date | string | null
    calling_date?: DateTimeNullableFilter<"candidates"> | Date | string | null
    current_ctc?: StringNullableFilter<"candidates"> | string | null
    expected_ctc?: StringNullableFilter<"candidates"> | string | null
    feedback?: StringNullableFilter<"candidates"> | string | null
    remark?: StringNullableFilter<"candidates"> | string | null
    jd_brief?: StringNullableFilter<"candidates"> | string | null
    ctc_feedback?: StringNullableFilter<"candidates"> | string | null
    notice_period?: StringNullableFilter<"candidates"> | string | null
    preferred_roles?: StringNullableListFilter<"candidates">
    preferred_locations?: StringNullableListFilter<"candidates">
    employment_type?: StringNullableFilter<"candidates"> | string | null
    year_of_birth?: IntNullableFilter<"candidates"> | number | null
    created_at?: DateTimeNullableFilter<"candidates"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"candidates"> | Date | string | null
    profile_views?: Profile_viewsListRelationFilter
  }

  export type candidatesOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    resume_url?: SortOrderInput | SortOrder
    source_portal?: SortOrderInput | SortOrder
    portal_unique_id?: SortOrderInput | SortOrder
    portal_date?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    college_name?: SortOrderInput | SortOrder
    top_skills?: SortOrderInput | SortOrder
    skills_raw?: SortOrderInput | SortOrder
    total_experience?: SortOrderInput | SortOrder
    relevant_experience?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    current_company?: SortOrderInput | SortOrder
    current_designation?: SortOrderInput | SortOrder
    companies_raw?: SortOrderInput | SortOrder
    apply_date?: SortOrderInput | SortOrder
    calling_date?: SortOrderInput | SortOrder
    current_ctc?: SortOrderInput | SortOrder
    expected_ctc?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    jd_brief?: SortOrderInput | SortOrder
    ctc_feedback?: SortOrderInput | SortOrder
    notice_period?: SortOrderInput | SortOrder
    preferred_roles?: SortOrder
    preferred_locations?: SortOrder
    employment_type?: SortOrderInput | SortOrder
    year_of_birth?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    profile_views?: profile_viewsOrderByRelationAggregateInput
  }

  export type candidatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    full_name?: StringFilter<"candidates"> | string
    email?: StringNullableFilter<"candidates"> | string | null
    phone?: StringNullableFilter<"candidates"> | string | null
    gender?: StringNullableFilter<"candidates"> | string | null
    location?: StringNullableFilter<"candidates"> | string | null
    resume_url?: StringNullableFilter<"candidates"> | string | null
    source_portal?: StringNullableFilter<"candidates"> | string | null
    portal_unique_id?: StringNullableFilter<"candidates"> | string | null
    portal_date?: DateTimeNullableFilter<"candidates"> | Date | string | null
    qualification?: StringNullableFilter<"candidates"> | string | null
    college_name?: StringNullableFilter<"candidates"> | string | null
    top_skills?: StringNullableFilter<"candidates"> | string | null
    skills_raw?: StringNullableFilter<"candidates"> | string | null
    total_experience?: DecimalNullableFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: DecimalNullableFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    experience_years?: DecimalNullableFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    current_company?: StringNullableFilter<"candidates"> | string | null
    current_designation?: StringNullableFilter<"candidates"> | string | null
    companies_raw?: StringNullableFilter<"candidates"> | string | null
    apply_date?: DateTimeNullableFilter<"candidates"> | Date | string | null
    calling_date?: DateTimeNullableFilter<"candidates"> | Date | string | null
    current_ctc?: StringNullableFilter<"candidates"> | string | null
    expected_ctc?: StringNullableFilter<"candidates"> | string | null
    feedback?: StringNullableFilter<"candidates"> | string | null
    remark?: StringNullableFilter<"candidates"> | string | null
    jd_brief?: StringNullableFilter<"candidates"> | string | null
    ctc_feedback?: StringNullableFilter<"candidates"> | string | null
    notice_period?: StringNullableFilter<"candidates"> | string | null
    preferred_roles?: StringNullableListFilter<"candidates">
    preferred_locations?: StringNullableListFilter<"candidates">
    employment_type?: StringNullableFilter<"candidates"> | string | null
    year_of_birth?: IntNullableFilter<"candidates"> | number | null
    created_at?: DateTimeNullableFilter<"candidates"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"candidates"> | Date | string | null
    profile_views?: Profile_viewsListRelationFilter
  }, "id">

  export type candidatesOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    resume_url?: SortOrderInput | SortOrder
    source_portal?: SortOrderInput | SortOrder
    portal_unique_id?: SortOrderInput | SortOrder
    portal_date?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    college_name?: SortOrderInput | SortOrder
    top_skills?: SortOrderInput | SortOrder
    skills_raw?: SortOrderInput | SortOrder
    total_experience?: SortOrderInput | SortOrder
    relevant_experience?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    current_company?: SortOrderInput | SortOrder
    current_designation?: SortOrderInput | SortOrder
    companies_raw?: SortOrderInput | SortOrder
    apply_date?: SortOrderInput | SortOrder
    calling_date?: SortOrderInput | SortOrder
    current_ctc?: SortOrderInput | SortOrder
    expected_ctc?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    jd_brief?: SortOrderInput | SortOrder
    ctc_feedback?: SortOrderInput | SortOrder
    notice_period?: SortOrderInput | SortOrder
    preferred_roles?: SortOrder
    preferred_locations?: SortOrder
    employment_type?: SortOrderInput | SortOrder
    year_of_birth?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: candidatesCountOrderByAggregateInput
    _avg?: candidatesAvgOrderByAggregateInput
    _max?: candidatesMaxOrderByAggregateInput
    _min?: candidatesMinOrderByAggregateInput
    _sum?: candidatesSumOrderByAggregateInput
  }

  export type candidatesScalarWhereWithAggregatesInput = {
    AND?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    OR?: candidatesScalarWhereWithAggregatesInput[]
    NOT?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"candidates"> | string
    full_name?: StringWithAggregatesFilter<"candidates"> | string
    email?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    phone?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    gender?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    location?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    resume_url?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    source_portal?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    portal_unique_id?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    portal_date?: DateTimeNullableWithAggregatesFilter<"candidates"> | Date | string | null
    qualification?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    college_name?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    top_skills?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    skills_raw?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    total_experience?: DecimalNullableWithAggregatesFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: DecimalNullableWithAggregatesFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    experience_years?: DecimalNullableWithAggregatesFilter<"candidates"> | Decimal | DecimalJsLike | number | string | null
    current_company?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    current_designation?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    companies_raw?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    apply_date?: DateTimeNullableWithAggregatesFilter<"candidates"> | Date | string | null
    calling_date?: DateTimeNullableWithAggregatesFilter<"candidates"> | Date | string | null
    current_ctc?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    expected_ctc?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    remark?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    jd_brief?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    ctc_feedback?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    notice_period?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    preferred_roles?: StringNullableListFilter<"candidates">
    preferred_locations?: StringNullableListFilter<"candidates">
    employment_type?: StringNullableWithAggregatesFilter<"candidates"> | string | null
    year_of_birth?: IntNullableWithAggregatesFilter<"candidates"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"candidates"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"candidates"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    profile_views?: Profile_viewsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    profile_views?: profile_viewsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    profile_views?: Profile_viewsListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    full_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type profile_viewsWhereInput = {
    AND?: profile_viewsWhereInput | profile_viewsWhereInput[]
    OR?: profile_viewsWhereInput[]
    NOT?: profile_viewsWhereInput | profile_viewsWhereInput[]
    id?: UuidFilter<"profile_views"> | string
    viewer_id?: UuidNullableFilter<"profile_views"> | string | null
    candidate_id?: UuidFilter<"profile_views"> | string
    viewed_at?: DateTimeFilter<"profile_views"> | Date | string
    resume_viewed?: BoolFilter<"profile_views"> | boolean
    resume_viewed_at?: DateTimeNullableFilter<"profile_views"> | Date | string | null
    viewer?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    candidate?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
  }

  export type profile_viewsOrderByWithRelationInput = {
    id?: SortOrder
    viewer_id?: SortOrderInput | SortOrder
    candidate_id?: SortOrder
    viewed_at?: SortOrder
    resume_viewed?: SortOrder
    resume_viewed_at?: SortOrderInput | SortOrder
    viewer?: usersOrderByWithRelationInput
    candidate?: candidatesOrderByWithRelationInput
  }

  export type profile_viewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: profile_viewsWhereInput | profile_viewsWhereInput[]
    OR?: profile_viewsWhereInput[]
    NOT?: profile_viewsWhereInput | profile_viewsWhereInput[]
    viewer_id?: UuidNullableFilter<"profile_views"> | string | null
    candidate_id?: UuidFilter<"profile_views"> | string
    viewed_at?: DateTimeFilter<"profile_views"> | Date | string
    resume_viewed?: BoolFilter<"profile_views"> | boolean
    resume_viewed_at?: DateTimeNullableFilter<"profile_views"> | Date | string | null
    viewer?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    candidate?: XOR<CandidatesScalarRelationFilter, candidatesWhereInput>
  }, "id">

  export type profile_viewsOrderByWithAggregationInput = {
    id?: SortOrder
    viewer_id?: SortOrderInput | SortOrder
    candidate_id?: SortOrder
    viewed_at?: SortOrder
    resume_viewed?: SortOrder
    resume_viewed_at?: SortOrderInput | SortOrder
    _count?: profile_viewsCountOrderByAggregateInput
    _max?: profile_viewsMaxOrderByAggregateInput
    _min?: profile_viewsMinOrderByAggregateInput
  }

  export type profile_viewsScalarWhereWithAggregatesInput = {
    AND?: profile_viewsScalarWhereWithAggregatesInput | profile_viewsScalarWhereWithAggregatesInput[]
    OR?: profile_viewsScalarWhereWithAggregatesInput[]
    NOT?: profile_viewsScalarWhereWithAggregatesInput | profile_viewsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"profile_views"> | string
    viewer_id?: UuidNullableWithAggregatesFilter<"profile_views"> | string | null
    candidate_id?: UuidWithAggregatesFilter<"profile_views"> | string
    viewed_at?: DateTimeWithAggregatesFilter<"profile_views"> | Date | string
    resume_viewed?: BoolWithAggregatesFilter<"profile_views"> | boolean
    resume_viewed_at?: DateTimeNullableWithAggregatesFilter<"profile_views"> | Date | string | null
  }

  export type candidatesCreateInput = {
    id?: string
    full_name: string
    email?: string | null
    phone?: string | null
    gender?: string | null
    location?: string | null
    resume_url?: string | null
    source_portal?: string | null
    portal_unique_id?: string | null
    portal_date?: Date | string | null
    qualification?: string | null
    college_name?: string | null
    top_skills?: string | null
    skills_raw?: string | null
    total_experience?: Decimal | DecimalJsLike | number | string | null
    relevant_experience?: Decimal | DecimalJsLike | number | string | null
    experience_years?: Decimal | DecimalJsLike | number | string | null
    current_company?: string | null
    current_designation?: string | null
    companies_raw?: string | null
    apply_date?: Date | string | null
    calling_date?: Date | string | null
    current_ctc?: string | null
    expected_ctc?: string | null
    feedback?: string | null
    remark?: string | null
    jd_brief?: string | null
    ctc_feedback?: string | null
    notice_period?: string | null
    preferred_roles?: candidatesCreatepreferred_rolesInput | string[]
    preferred_locations?: candidatesCreatepreferred_locationsInput | string[]
    employment_type?: string | null
    year_of_birth?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profile_views?: profile_viewsCreateNestedManyWithoutCandidateInput
  }

  export type candidatesUncheckedCreateInput = {
    id?: string
    full_name: string
    email?: string | null
    phone?: string | null
    gender?: string | null
    location?: string | null
    resume_url?: string | null
    source_portal?: string | null
    portal_unique_id?: string | null
    portal_date?: Date | string | null
    qualification?: string | null
    college_name?: string | null
    top_skills?: string | null
    skills_raw?: string | null
    total_experience?: Decimal | DecimalJsLike | number | string | null
    relevant_experience?: Decimal | DecimalJsLike | number | string | null
    experience_years?: Decimal | DecimalJsLike | number | string | null
    current_company?: string | null
    current_designation?: string | null
    companies_raw?: string | null
    apply_date?: Date | string | null
    calling_date?: Date | string | null
    current_ctc?: string | null
    expected_ctc?: string | null
    feedback?: string | null
    remark?: string | null
    jd_brief?: string | null
    ctc_feedback?: string | null
    notice_period?: string | null
    preferred_roles?: candidatesCreatepreferred_rolesInput | string[]
    preferred_locations?: candidatesCreatepreferred_locationsInput | string[]
    employment_type?: string | null
    year_of_birth?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profile_views?: profile_viewsUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type candidatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    source_portal?: NullableStringFieldUpdateOperationsInput | string | null
    portal_unique_id?: NullableStringFieldUpdateOperationsInput | string | null
    portal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    college_name?: NullableStringFieldUpdateOperationsInput | string | null
    top_skills?: NullableStringFieldUpdateOperationsInput | string | null
    skills_raw?: NullableStringFieldUpdateOperationsInput | string | null
    total_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    experience_years?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    current_company?: NullableStringFieldUpdateOperationsInput | string | null
    current_designation?: NullableStringFieldUpdateOperationsInput | string | null
    companies_raw?: NullableStringFieldUpdateOperationsInput | string | null
    apply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calling_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    expected_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    jd_brief?: NullableStringFieldUpdateOperationsInput | string | null
    ctc_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    notice_period?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_roles?: candidatesUpdatepreferred_rolesInput | string[]
    preferred_locations?: candidatesUpdatepreferred_locationsInput | string[]
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_birth?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_views?: profile_viewsUpdateManyWithoutCandidateNestedInput
  }

  export type candidatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    source_portal?: NullableStringFieldUpdateOperationsInput | string | null
    portal_unique_id?: NullableStringFieldUpdateOperationsInput | string | null
    portal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    college_name?: NullableStringFieldUpdateOperationsInput | string | null
    top_skills?: NullableStringFieldUpdateOperationsInput | string | null
    skills_raw?: NullableStringFieldUpdateOperationsInput | string | null
    total_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    experience_years?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    current_company?: NullableStringFieldUpdateOperationsInput | string | null
    current_designation?: NullableStringFieldUpdateOperationsInput | string | null
    companies_raw?: NullableStringFieldUpdateOperationsInput | string | null
    apply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calling_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    expected_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    jd_brief?: NullableStringFieldUpdateOperationsInput | string | null
    ctc_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    notice_period?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_roles?: candidatesUpdatepreferred_rolesInput | string[]
    preferred_locations?: candidatesUpdatepreferred_locationsInput | string[]
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_birth?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_views?: profile_viewsUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type candidatesCreateManyInput = {
    id?: string
    full_name: string
    email?: string | null
    phone?: string | null
    gender?: string | null
    location?: string | null
    resume_url?: string | null
    source_portal?: string | null
    portal_unique_id?: string | null
    portal_date?: Date | string | null
    qualification?: string | null
    college_name?: string | null
    top_skills?: string | null
    skills_raw?: string | null
    total_experience?: Decimal | DecimalJsLike | number | string | null
    relevant_experience?: Decimal | DecimalJsLike | number | string | null
    experience_years?: Decimal | DecimalJsLike | number | string | null
    current_company?: string | null
    current_designation?: string | null
    companies_raw?: string | null
    apply_date?: Date | string | null
    calling_date?: Date | string | null
    current_ctc?: string | null
    expected_ctc?: string | null
    feedback?: string | null
    remark?: string | null
    jd_brief?: string | null
    ctc_feedback?: string | null
    notice_period?: string | null
    preferred_roles?: candidatesCreatepreferred_rolesInput | string[]
    preferred_locations?: candidatesCreatepreferred_locationsInput | string[]
    employment_type?: string | null
    year_of_birth?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type candidatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    source_portal?: NullableStringFieldUpdateOperationsInput | string | null
    portal_unique_id?: NullableStringFieldUpdateOperationsInput | string | null
    portal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    college_name?: NullableStringFieldUpdateOperationsInput | string | null
    top_skills?: NullableStringFieldUpdateOperationsInput | string | null
    skills_raw?: NullableStringFieldUpdateOperationsInput | string | null
    total_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    experience_years?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    current_company?: NullableStringFieldUpdateOperationsInput | string | null
    current_designation?: NullableStringFieldUpdateOperationsInput | string | null
    companies_raw?: NullableStringFieldUpdateOperationsInput | string | null
    apply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calling_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    expected_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    jd_brief?: NullableStringFieldUpdateOperationsInput | string | null
    ctc_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    notice_period?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_roles?: candidatesUpdatepreferred_rolesInput | string[]
    preferred_locations?: candidatesUpdatepreferred_locationsInput | string[]
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_birth?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type candidatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    source_portal?: NullableStringFieldUpdateOperationsInput | string | null
    portal_unique_id?: NullableStringFieldUpdateOperationsInput | string | null
    portal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    college_name?: NullableStringFieldUpdateOperationsInput | string | null
    top_skills?: NullableStringFieldUpdateOperationsInput | string | null
    skills_raw?: NullableStringFieldUpdateOperationsInput | string | null
    total_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    experience_years?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    current_company?: NullableStringFieldUpdateOperationsInput | string | null
    current_designation?: NullableStringFieldUpdateOperationsInput | string | null
    companies_raw?: NullableStringFieldUpdateOperationsInput | string | null
    apply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calling_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    expected_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    jd_brief?: NullableStringFieldUpdateOperationsInput | string | null
    ctc_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    notice_period?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_roles?: candidatesUpdatepreferred_rolesInput | string[]
    preferred_locations?: candidatesUpdatepreferred_locationsInput | string[]
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_birth?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    created_at?: Date | string
    profile_views?: profile_viewsCreateNestedManyWithoutViewerInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    created_at?: Date | string
    profile_views?: profile_viewsUncheckedCreateNestedManyWithoutViewerInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_views?: profile_viewsUpdateManyWithoutViewerNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_views?: profile_viewsUncheckedUpdateManyWithoutViewerNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    full_name: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profile_viewsCreateInput = {
    id?: string
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
    viewer?: usersCreateNestedOneWithoutProfile_viewsInput
    candidate: candidatesCreateNestedOneWithoutProfile_viewsInput
  }

  export type profile_viewsUncheckedCreateInput = {
    id?: string
    viewer_id?: string | null
    candidate_id: string
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
  }

  export type profile_viewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewer?: usersUpdateOneWithoutProfile_viewsNestedInput
    candidate?: candidatesUpdateOneRequiredWithoutProfile_viewsNestedInput
  }

  export type profile_viewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewer_id?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profile_viewsCreateManyInput = {
    id?: string
    viewer_id?: string | null
    candidate_id: string
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
  }

  export type profile_viewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profile_viewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewer_id?: NullableStringFieldUpdateOperationsInput | string | null
    candidate_id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Profile_viewsListRelationFilter = {
    every?: profile_viewsWhereInput
    some?: profile_viewsWhereInput
    none?: profile_viewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type profile_viewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type candidatesCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    resume_url?: SortOrder
    source_portal?: SortOrder
    portal_unique_id?: SortOrder
    portal_date?: SortOrder
    qualification?: SortOrder
    college_name?: SortOrder
    top_skills?: SortOrder
    skills_raw?: SortOrder
    total_experience?: SortOrder
    relevant_experience?: SortOrder
    experience_years?: SortOrder
    current_company?: SortOrder
    current_designation?: SortOrder
    companies_raw?: SortOrder
    apply_date?: SortOrder
    calling_date?: SortOrder
    current_ctc?: SortOrder
    expected_ctc?: SortOrder
    feedback?: SortOrder
    remark?: SortOrder
    jd_brief?: SortOrder
    ctc_feedback?: SortOrder
    notice_period?: SortOrder
    preferred_roles?: SortOrder
    preferred_locations?: SortOrder
    employment_type?: SortOrder
    year_of_birth?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type candidatesAvgOrderByAggregateInput = {
    total_experience?: SortOrder
    relevant_experience?: SortOrder
    experience_years?: SortOrder
    year_of_birth?: SortOrder
  }

  export type candidatesMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    resume_url?: SortOrder
    source_portal?: SortOrder
    portal_unique_id?: SortOrder
    portal_date?: SortOrder
    qualification?: SortOrder
    college_name?: SortOrder
    top_skills?: SortOrder
    skills_raw?: SortOrder
    total_experience?: SortOrder
    relevant_experience?: SortOrder
    experience_years?: SortOrder
    current_company?: SortOrder
    current_designation?: SortOrder
    companies_raw?: SortOrder
    apply_date?: SortOrder
    calling_date?: SortOrder
    current_ctc?: SortOrder
    expected_ctc?: SortOrder
    feedback?: SortOrder
    remark?: SortOrder
    jd_brief?: SortOrder
    ctc_feedback?: SortOrder
    notice_period?: SortOrder
    employment_type?: SortOrder
    year_of_birth?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type candidatesMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    location?: SortOrder
    resume_url?: SortOrder
    source_portal?: SortOrder
    portal_unique_id?: SortOrder
    portal_date?: SortOrder
    qualification?: SortOrder
    college_name?: SortOrder
    top_skills?: SortOrder
    skills_raw?: SortOrder
    total_experience?: SortOrder
    relevant_experience?: SortOrder
    experience_years?: SortOrder
    current_company?: SortOrder
    current_designation?: SortOrder
    companies_raw?: SortOrder
    apply_date?: SortOrder
    calling_date?: SortOrder
    current_ctc?: SortOrder
    expected_ctc?: SortOrder
    feedback?: SortOrder
    remark?: SortOrder
    jd_brief?: SortOrder
    ctc_feedback?: SortOrder
    notice_period?: SortOrder
    employment_type?: SortOrder
    year_of_birth?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type candidatesSumOrderByAggregateInput = {
    total_experience?: SortOrder
    relevant_experience?: SortOrder
    experience_years?: SortOrder
    year_of_birth?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type CandidatesScalarRelationFilter = {
    is?: candidatesWhereInput
    isNot?: candidatesWhereInput
  }

  export type profile_viewsCountOrderByAggregateInput = {
    id?: SortOrder
    viewer_id?: SortOrder
    candidate_id?: SortOrder
    viewed_at?: SortOrder
    resume_viewed?: SortOrder
    resume_viewed_at?: SortOrder
  }

  export type profile_viewsMaxOrderByAggregateInput = {
    id?: SortOrder
    viewer_id?: SortOrder
    candidate_id?: SortOrder
    viewed_at?: SortOrder
    resume_viewed?: SortOrder
    resume_viewed_at?: SortOrder
  }

  export type profile_viewsMinOrderByAggregateInput = {
    id?: SortOrder
    viewer_id?: SortOrder
    candidate_id?: SortOrder
    viewed_at?: SortOrder
    resume_viewed?: SortOrder
    resume_viewed_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type candidatesCreatepreferred_rolesInput = {
    set: string[]
  }

  export type candidatesCreatepreferred_locationsInput = {
    set: string[]
  }

  export type profile_viewsCreateNestedManyWithoutCandidateInput = {
    create?: XOR<profile_viewsCreateWithoutCandidateInput, profile_viewsUncheckedCreateWithoutCandidateInput> | profile_viewsCreateWithoutCandidateInput[] | profile_viewsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutCandidateInput | profile_viewsCreateOrConnectWithoutCandidateInput[]
    createMany?: profile_viewsCreateManyCandidateInputEnvelope
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
  }

  export type profile_viewsUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<profile_viewsCreateWithoutCandidateInput, profile_viewsUncheckedCreateWithoutCandidateInput> | profile_viewsCreateWithoutCandidateInput[] | profile_viewsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutCandidateInput | profile_viewsCreateOrConnectWithoutCandidateInput[]
    createMany?: profile_viewsCreateManyCandidateInputEnvelope
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type candidatesUpdatepreferred_rolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type candidatesUpdatepreferred_locationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profile_viewsUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<profile_viewsCreateWithoutCandidateInput, profile_viewsUncheckedCreateWithoutCandidateInput> | profile_viewsCreateWithoutCandidateInput[] | profile_viewsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutCandidateInput | profile_viewsCreateOrConnectWithoutCandidateInput[]
    upsert?: profile_viewsUpsertWithWhereUniqueWithoutCandidateInput | profile_viewsUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: profile_viewsCreateManyCandidateInputEnvelope
    set?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    disconnect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    delete?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    update?: profile_viewsUpdateWithWhereUniqueWithoutCandidateInput | profile_viewsUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: profile_viewsUpdateManyWithWhereWithoutCandidateInput | profile_viewsUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: profile_viewsScalarWhereInput | profile_viewsScalarWhereInput[]
  }

  export type profile_viewsUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<profile_viewsCreateWithoutCandidateInput, profile_viewsUncheckedCreateWithoutCandidateInput> | profile_viewsCreateWithoutCandidateInput[] | profile_viewsUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutCandidateInput | profile_viewsCreateOrConnectWithoutCandidateInput[]
    upsert?: profile_viewsUpsertWithWhereUniqueWithoutCandidateInput | profile_viewsUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: profile_viewsCreateManyCandidateInputEnvelope
    set?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    disconnect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    delete?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    update?: profile_viewsUpdateWithWhereUniqueWithoutCandidateInput | profile_viewsUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: profile_viewsUpdateManyWithWhereWithoutCandidateInput | profile_viewsUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: profile_viewsScalarWhereInput | profile_viewsScalarWhereInput[]
  }

  export type profile_viewsCreateNestedManyWithoutViewerInput = {
    create?: XOR<profile_viewsCreateWithoutViewerInput, profile_viewsUncheckedCreateWithoutViewerInput> | profile_viewsCreateWithoutViewerInput[] | profile_viewsUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutViewerInput | profile_viewsCreateOrConnectWithoutViewerInput[]
    createMany?: profile_viewsCreateManyViewerInputEnvelope
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
  }

  export type profile_viewsUncheckedCreateNestedManyWithoutViewerInput = {
    create?: XOR<profile_viewsCreateWithoutViewerInput, profile_viewsUncheckedCreateWithoutViewerInput> | profile_viewsCreateWithoutViewerInput[] | profile_viewsUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutViewerInput | profile_viewsCreateOrConnectWithoutViewerInput[]
    createMany?: profile_viewsCreateManyViewerInputEnvelope
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type profile_viewsUpdateManyWithoutViewerNestedInput = {
    create?: XOR<profile_viewsCreateWithoutViewerInput, profile_viewsUncheckedCreateWithoutViewerInput> | profile_viewsCreateWithoutViewerInput[] | profile_viewsUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutViewerInput | profile_viewsCreateOrConnectWithoutViewerInput[]
    upsert?: profile_viewsUpsertWithWhereUniqueWithoutViewerInput | profile_viewsUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: profile_viewsCreateManyViewerInputEnvelope
    set?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    disconnect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    delete?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    update?: profile_viewsUpdateWithWhereUniqueWithoutViewerInput | profile_viewsUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: profile_viewsUpdateManyWithWhereWithoutViewerInput | profile_viewsUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: profile_viewsScalarWhereInput | profile_viewsScalarWhereInput[]
  }

  export type profile_viewsUncheckedUpdateManyWithoutViewerNestedInput = {
    create?: XOR<profile_viewsCreateWithoutViewerInput, profile_viewsUncheckedCreateWithoutViewerInput> | profile_viewsCreateWithoutViewerInput[] | profile_viewsUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: profile_viewsCreateOrConnectWithoutViewerInput | profile_viewsCreateOrConnectWithoutViewerInput[]
    upsert?: profile_viewsUpsertWithWhereUniqueWithoutViewerInput | profile_viewsUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: profile_viewsCreateManyViewerInputEnvelope
    set?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    disconnect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    delete?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    connect?: profile_viewsWhereUniqueInput | profile_viewsWhereUniqueInput[]
    update?: profile_viewsUpdateWithWhereUniqueWithoutViewerInput | profile_viewsUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: profile_viewsUpdateManyWithWhereWithoutViewerInput | profile_viewsUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: profile_viewsScalarWhereInput | profile_viewsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutProfile_viewsInput = {
    create?: XOR<usersCreateWithoutProfile_viewsInput, usersUncheckedCreateWithoutProfile_viewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfile_viewsInput
    connect?: usersWhereUniqueInput
  }

  export type candidatesCreateNestedOneWithoutProfile_viewsInput = {
    create?: XOR<candidatesCreateWithoutProfile_viewsInput, candidatesUncheckedCreateWithoutProfile_viewsInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutProfile_viewsInput
    connect?: candidatesWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneWithoutProfile_viewsNestedInput = {
    create?: XOR<usersCreateWithoutProfile_viewsInput, usersUncheckedCreateWithoutProfile_viewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfile_viewsInput
    upsert?: usersUpsertWithoutProfile_viewsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProfile_viewsInput, usersUpdateWithoutProfile_viewsInput>, usersUncheckedUpdateWithoutProfile_viewsInput>
  }

  export type candidatesUpdateOneRequiredWithoutProfile_viewsNestedInput = {
    create?: XOR<candidatesCreateWithoutProfile_viewsInput, candidatesUncheckedCreateWithoutProfile_viewsInput>
    connectOrCreate?: candidatesCreateOrConnectWithoutProfile_viewsInput
    upsert?: candidatesUpsertWithoutProfile_viewsInput
    connect?: candidatesWhereUniqueInput
    update?: XOR<XOR<candidatesUpdateToOneWithWhereWithoutProfile_viewsInput, candidatesUpdateWithoutProfile_viewsInput>, candidatesUncheckedUpdateWithoutProfile_viewsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type profile_viewsCreateWithoutCandidateInput = {
    id?: string
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
    viewer?: usersCreateNestedOneWithoutProfile_viewsInput
  }

  export type profile_viewsUncheckedCreateWithoutCandidateInput = {
    id?: string
    viewer_id?: string | null
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
  }

  export type profile_viewsCreateOrConnectWithoutCandidateInput = {
    where: profile_viewsWhereUniqueInput
    create: XOR<profile_viewsCreateWithoutCandidateInput, profile_viewsUncheckedCreateWithoutCandidateInput>
  }

  export type profile_viewsCreateManyCandidateInputEnvelope = {
    data: profile_viewsCreateManyCandidateInput | profile_viewsCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type profile_viewsUpsertWithWhereUniqueWithoutCandidateInput = {
    where: profile_viewsWhereUniqueInput
    update: XOR<profile_viewsUpdateWithoutCandidateInput, profile_viewsUncheckedUpdateWithoutCandidateInput>
    create: XOR<profile_viewsCreateWithoutCandidateInput, profile_viewsUncheckedCreateWithoutCandidateInput>
  }

  export type profile_viewsUpdateWithWhereUniqueWithoutCandidateInput = {
    where: profile_viewsWhereUniqueInput
    data: XOR<profile_viewsUpdateWithoutCandidateInput, profile_viewsUncheckedUpdateWithoutCandidateInput>
  }

  export type profile_viewsUpdateManyWithWhereWithoutCandidateInput = {
    where: profile_viewsScalarWhereInput
    data: XOR<profile_viewsUpdateManyMutationInput, profile_viewsUncheckedUpdateManyWithoutCandidateInput>
  }

  export type profile_viewsScalarWhereInput = {
    AND?: profile_viewsScalarWhereInput | profile_viewsScalarWhereInput[]
    OR?: profile_viewsScalarWhereInput[]
    NOT?: profile_viewsScalarWhereInput | profile_viewsScalarWhereInput[]
    id?: UuidFilter<"profile_views"> | string
    viewer_id?: UuidNullableFilter<"profile_views"> | string | null
    candidate_id?: UuidFilter<"profile_views"> | string
    viewed_at?: DateTimeFilter<"profile_views"> | Date | string
    resume_viewed?: BoolFilter<"profile_views"> | boolean
    resume_viewed_at?: DateTimeNullableFilter<"profile_views"> | Date | string | null
  }

  export type profile_viewsCreateWithoutViewerInput = {
    id?: string
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
    candidate: candidatesCreateNestedOneWithoutProfile_viewsInput
  }

  export type profile_viewsUncheckedCreateWithoutViewerInput = {
    id?: string
    candidate_id: string
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
  }

  export type profile_viewsCreateOrConnectWithoutViewerInput = {
    where: profile_viewsWhereUniqueInput
    create: XOR<profile_viewsCreateWithoutViewerInput, profile_viewsUncheckedCreateWithoutViewerInput>
  }

  export type profile_viewsCreateManyViewerInputEnvelope = {
    data: profile_viewsCreateManyViewerInput | profile_viewsCreateManyViewerInput[]
    skipDuplicates?: boolean
  }

  export type profile_viewsUpsertWithWhereUniqueWithoutViewerInput = {
    where: profile_viewsWhereUniqueInput
    update: XOR<profile_viewsUpdateWithoutViewerInput, profile_viewsUncheckedUpdateWithoutViewerInput>
    create: XOR<profile_viewsCreateWithoutViewerInput, profile_viewsUncheckedCreateWithoutViewerInput>
  }

  export type profile_viewsUpdateWithWhereUniqueWithoutViewerInput = {
    where: profile_viewsWhereUniqueInput
    data: XOR<profile_viewsUpdateWithoutViewerInput, profile_viewsUncheckedUpdateWithoutViewerInput>
  }

  export type profile_viewsUpdateManyWithWhereWithoutViewerInput = {
    where: profile_viewsScalarWhereInput
    data: XOR<profile_viewsUpdateManyMutationInput, profile_viewsUncheckedUpdateManyWithoutViewerInput>
  }

  export type usersCreateWithoutProfile_viewsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type usersUncheckedCreateWithoutProfile_viewsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    created_at?: Date | string
  }

  export type usersCreateOrConnectWithoutProfile_viewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfile_viewsInput, usersUncheckedCreateWithoutProfile_viewsInput>
  }

  export type candidatesCreateWithoutProfile_viewsInput = {
    id?: string
    full_name: string
    email?: string | null
    phone?: string | null
    gender?: string | null
    location?: string | null
    resume_url?: string | null
    source_portal?: string | null
    portal_unique_id?: string | null
    portal_date?: Date | string | null
    qualification?: string | null
    college_name?: string | null
    top_skills?: string | null
    skills_raw?: string | null
    total_experience?: Decimal | DecimalJsLike | number | string | null
    relevant_experience?: Decimal | DecimalJsLike | number | string | null
    experience_years?: Decimal | DecimalJsLike | number | string | null
    current_company?: string | null
    current_designation?: string | null
    companies_raw?: string | null
    apply_date?: Date | string | null
    calling_date?: Date | string | null
    current_ctc?: string | null
    expected_ctc?: string | null
    feedback?: string | null
    remark?: string | null
    jd_brief?: string | null
    ctc_feedback?: string | null
    notice_period?: string | null
    preferred_roles?: candidatesCreatepreferred_rolesInput | string[]
    preferred_locations?: candidatesCreatepreferred_locationsInput | string[]
    employment_type?: string | null
    year_of_birth?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type candidatesUncheckedCreateWithoutProfile_viewsInput = {
    id?: string
    full_name: string
    email?: string | null
    phone?: string | null
    gender?: string | null
    location?: string | null
    resume_url?: string | null
    source_portal?: string | null
    portal_unique_id?: string | null
    portal_date?: Date | string | null
    qualification?: string | null
    college_name?: string | null
    top_skills?: string | null
    skills_raw?: string | null
    total_experience?: Decimal | DecimalJsLike | number | string | null
    relevant_experience?: Decimal | DecimalJsLike | number | string | null
    experience_years?: Decimal | DecimalJsLike | number | string | null
    current_company?: string | null
    current_designation?: string | null
    companies_raw?: string | null
    apply_date?: Date | string | null
    calling_date?: Date | string | null
    current_ctc?: string | null
    expected_ctc?: string | null
    feedback?: string | null
    remark?: string | null
    jd_brief?: string | null
    ctc_feedback?: string | null
    notice_period?: string | null
    preferred_roles?: candidatesCreatepreferred_rolesInput | string[]
    preferred_locations?: candidatesCreatepreferred_locationsInput | string[]
    employment_type?: string | null
    year_of_birth?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type candidatesCreateOrConnectWithoutProfile_viewsInput = {
    where: candidatesWhereUniqueInput
    create: XOR<candidatesCreateWithoutProfile_viewsInput, candidatesUncheckedCreateWithoutProfile_viewsInput>
  }

  export type usersUpsertWithoutProfile_viewsInput = {
    update: XOR<usersUpdateWithoutProfile_viewsInput, usersUncheckedUpdateWithoutProfile_viewsInput>
    create: XOR<usersCreateWithoutProfile_viewsInput, usersUncheckedCreateWithoutProfile_viewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProfile_viewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProfile_viewsInput, usersUncheckedUpdateWithoutProfile_viewsInput>
  }

  export type usersUpdateWithoutProfile_viewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutProfile_viewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type candidatesUpsertWithoutProfile_viewsInput = {
    update: XOR<candidatesUpdateWithoutProfile_viewsInput, candidatesUncheckedUpdateWithoutProfile_viewsInput>
    create: XOR<candidatesCreateWithoutProfile_viewsInput, candidatesUncheckedCreateWithoutProfile_viewsInput>
    where?: candidatesWhereInput
  }

  export type candidatesUpdateToOneWithWhereWithoutProfile_viewsInput = {
    where?: candidatesWhereInput
    data: XOR<candidatesUpdateWithoutProfile_viewsInput, candidatesUncheckedUpdateWithoutProfile_viewsInput>
  }

  export type candidatesUpdateWithoutProfile_viewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    source_portal?: NullableStringFieldUpdateOperationsInput | string | null
    portal_unique_id?: NullableStringFieldUpdateOperationsInput | string | null
    portal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    college_name?: NullableStringFieldUpdateOperationsInput | string | null
    top_skills?: NullableStringFieldUpdateOperationsInput | string | null
    skills_raw?: NullableStringFieldUpdateOperationsInput | string | null
    total_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    experience_years?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    current_company?: NullableStringFieldUpdateOperationsInput | string | null
    current_designation?: NullableStringFieldUpdateOperationsInput | string | null
    companies_raw?: NullableStringFieldUpdateOperationsInput | string | null
    apply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calling_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    expected_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    jd_brief?: NullableStringFieldUpdateOperationsInput | string | null
    ctc_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    notice_period?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_roles?: candidatesUpdatepreferred_rolesInput | string[]
    preferred_locations?: candidatesUpdatepreferred_locationsInput | string[]
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_birth?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type candidatesUncheckedUpdateWithoutProfile_viewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    source_portal?: NullableStringFieldUpdateOperationsInput | string | null
    portal_unique_id?: NullableStringFieldUpdateOperationsInput | string | null
    portal_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    college_name?: NullableStringFieldUpdateOperationsInput | string | null
    top_skills?: NullableStringFieldUpdateOperationsInput | string | null
    skills_raw?: NullableStringFieldUpdateOperationsInput | string | null
    total_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    relevant_experience?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    experience_years?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    current_company?: NullableStringFieldUpdateOperationsInput | string | null
    current_designation?: NullableStringFieldUpdateOperationsInput | string | null
    companies_raw?: NullableStringFieldUpdateOperationsInput | string | null
    apply_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calling_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    expected_ctc?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    jd_brief?: NullableStringFieldUpdateOperationsInput | string | null
    ctc_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    notice_period?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_roles?: candidatesUpdatepreferred_rolesInput | string[]
    preferred_locations?: candidatesUpdatepreferred_locationsInput | string[]
    employment_type?: NullableStringFieldUpdateOperationsInput | string | null
    year_of_birth?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profile_viewsCreateManyCandidateInput = {
    id?: string
    viewer_id?: string | null
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
  }

  export type profile_viewsUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewer?: usersUpdateOneWithoutProfile_viewsNestedInput
  }

  export type profile_viewsUncheckedUpdateWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewer_id?: NullableStringFieldUpdateOperationsInput | string | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profile_viewsUncheckedUpdateManyWithoutCandidateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewer_id?: NullableStringFieldUpdateOperationsInput | string | null
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profile_viewsCreateManyViewerInput = {
    id?: string
    candidate_id: string
    viewed_at?: Date | string
    resume_viewed?: boolean
    resume_viewed_at?: Date | string | null
  }

  export type profile_viewsUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidate?: candidatesUpdateOneRequiredWithoutProfile_viewsNestedInput
  }

  export type profile_viewsUncheckedUpdateWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profile_viewsUncheckedUpdateManyWithoutViewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate_id?: StringFieldUpdateOperationsInput | string
    viewed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resume_viewed?: BoolFieldUpdateOperationsInput | boolean
    resume_viewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}