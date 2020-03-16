import { UpdateIceScoreTypes, IUpdateIceScoreTypes } from "./rootReducer";

export interface IReduxUpdateIceScore extends IUpdateIceScoreTypes {
  type: UpdateIceScoreTypes;
  value: number;
}

export function updateIceScoreEase(iceScore: number): IReduxUpdateIceScore {
  return {
    type: UpdateIceScoreTypes.UPDATE_ICE_SCORE_EASE,
    value: iceScore
  };
}

export function updateIceScoreImpact(iceScore: number): IReduxUpdateIceScore {
  return {
    type: UpdateIceScoreTypes.UPDATE_ICE_SCORE_IMPACT,
    value: iceScore
  };
}

export function updateIceScoreConfidence(
  iceScore: number
): IReduxUpdateIceScore {
  return {
    type: UpdateIceScoreTypes.UPDATE_ICE_SCORE_CONFIDENCE,
    value: iceScore
  };
}
