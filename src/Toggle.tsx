import * as React from "react";
import { connect } from "react-redux";
import {
  IReduxUpdateIceScore,
  updateIceScoreEase,
  updateIceScoreConfidence,
  updateIceScoreImpact
} from "./actions";
import { Dispatch, bindActionCreators } from "redux";

const Toggle: React.FC<ToggleProps> = ({
  iceScore,
  updateIceScoreConfidence,
  updateIceScoreEase,
  updateIceScoreImpact
}) => (
  <div>
    <div>
      <input
        type="range"
        min="1"
        max="10"
        onChange={e => {
          updateIceScoreEase(parseInt(e.target.value, 10));
        }}
        name="ease"
        value={iceScore.ease}
      />
      <p>{iceScore.ease}</p>
    </div>
    <div>
      <input
        type="range"
        min="1"
        max="10"
        onChange={e => {
          updateIceScoreConfidence(parseInt(e.target.value, 10));
        }}
        name="confidence"
        value={iceScore.confidence}
      />
      <p>{iceScore.confidence}</p>
    </div>
    <div>
      <input
        type="range"
        min="1"
        max="10"
        onChange={e => {
          updateIceScoreImpact(parseInt(e.target.value, 10));
        }}
        name="impact"
        value={iceScore.impact}
      />
      <p>{iceScore.impact}</p>
    </div>
    <p>{iceScore.impact * iceScore.ease * iceScore.confidence}</p>
  </div>
);

const mapStateToProps = (state: any) => ({
  iceScore: state.iceScore
});

const mapDispatchToProps = (dispatch: Dispatch<IReduxUpdateIceScore>) =>
  bindActionCreators(
    { updateIceScoreConfidence, updateIceScoreEase, updateIceScoreImpact },
    dispatch
  );

type ToggleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
