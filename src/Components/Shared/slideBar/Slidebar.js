
import "./slideBar.scss"

import MultiRangeSlider from '../../Shared/range/MultiRangeSlider';

function SlideBar(props) {

    return (
        <>
            <section className="slidebar">
                <h4>Filters</h4>
                <div className='slidebar_container'>

                    <section className='filter priceFilter'>

                        <span>Price</span>

                        <MultiRangeSlider
                            min={0}
                            max={10000}
                            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                        />

                        <div>
                            <input type="radio" name="priceFilter" id="priceFilter1" />
                            <label for="priceFilter1">
                                0- 2500 <small>L.E</small>
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="priceFilter" id="priceFilter2" />
                            <label for="priceFilter2">
                                2500- 5000 <small>L.E</small>
                            </label>
                        </div>
                        <div>
                            <input type="radio" name="priceFilter" id="priceFilter3" />
                            <label for="priceFilter3">
                                5000- 1000 <small>L.E</small>
                            </label>
                        </div>

                    </section>
                    <section className='filter serviceFilter'>
                        {props.serviceFilter}
                    </section>
                </div>
            </section>


        </>

    )
}

export default SlideBar;