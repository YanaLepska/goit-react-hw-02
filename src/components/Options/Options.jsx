
import css from './Options.module.css'

const Options = ({resetFeedbacks,updateFeedback, totalFeedback}) => {
    return (
        <div>
            <button onClick={() => updateFeedback('good')} className={css.btn}>Good</button>
            <button onClick={() => updateFeedback('neutral')} className={css.btn}>Neutral</button>
            <button onClick={() => updateFeedback('bad')} className={css.btn}>Bad</button>
            {totalFeedback > 0 ? (<button onClick={resetFeedbacks} className={css.btn}>Reset</button>):("")}
        </div>
    );
}

export default Options