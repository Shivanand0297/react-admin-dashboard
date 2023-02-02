import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./featured.scss"

const Featured = () => {
  return (
    <div className="featured" >
      <div class="top">
        <h1 class="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div class="bottom">
        <div class="progressBar">
          <CircularProgressbar value={66} text={`66%`} strokeWidth={3} styles={ buildStyles({
            pathColor: "#76b900",
            textColor: "#76b900"
          })} />
        </div>
        <p class="title">Total sales made today</p>
        <p class="amount">$ 1400</p>
        <p class="desc">Previous transactions processing, Last payment may not be included</p>
        <div class="summary">
          <div class="item">
            <div class="itemTitle">Target</div>
            <div class="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div class="resultAmount">$32.4k</div>
            </div>
          </div>
          <div class="item">
            <div class="itemTitle">Last Week</div>
            <div class="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div class="resultAmount">$32.4k</div>
            </div>
          </div>
          <div class="item">
            <div class="itemTitle">Last Month</div>
            <div class="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div class="resultAmount">$32.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured