export const initialState = {
  iceScore: {
    ease: 3,
    issueId: 7,
    confidence: 5,
    impact: 9
  }
};

export enum UpdateIceScoreTypes {
  UPDATE_ICE_SCORE_EASE = "UPDATE_ICE_SCORE_EASE",
  UPDATE_ICE_SCORE_CONFIDENCE = "UPDATE_ICE_SCORE_CONFIDENCE",
  UPDATE_ICE_SCORE_IMPACT = "UPDATE_ICE_SCORE_IMPACT"
}

export function rootReducer(
  state: any = initialState,
  action: IUpdateIceScoreTypes
) {
  switch (action.type) {
    case UpdateIceScoreTypes.UPDATE_ICE_SCORE_EASE:
      return {
        ...state,
        iceScore: {
          ...state.iceScore,
          ease: action.value
        }
      };
    case UpdateIceScoreTypes.UPDATE_ICE_SCORE_CONFIDENCE:
      return {
        ...state,
        iceScore: {
          ...state.iceScore,
          confidence: action.value
        }
      };
    case UpdateIceScoreTypes.UPDATE_ICE_SCORE_IMPACT:
      return {
        ...state,
        iceScore: {
          ...state.iceScore,
          impact: action.value
        }
      };
    default:
      return state;
  }
}

export interface IUpdateIceScoreTypes {
  type: UpdateIceScoreTypes;
  value: number;
}

export interface IceScore {
  issueId: number;
  ease: number;
  confidence: number;
  impact: number;
}
