import {
  IS_LOADING
} from "./actionTypes";

export function isLoadingActions(loading) {
  return {
    type: IS_LOADING,
    loading: loading,
  }
}