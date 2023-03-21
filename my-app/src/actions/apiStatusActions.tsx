import * as types from "./actionTypes";



export interface beginApiCallType{
  type:  types.BEGIN_API_CALL_TYPE;
} 


export function beginApiCall():beginApiCallType {
  return { type: types.BEGIN_API_CALL };
}
