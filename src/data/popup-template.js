function popupTemplate(data_obj) {
    let list = '';
    const data = data_obj.sumByContaminant;

    console.log( data_obj)

    // we're iterating over an object (i know, i know <rolling_eyes>)
    for (const d in data) {
        const released = data[d].total
                .toFixed(1)
                .toLocaleString('en-US');
        
        let avg_released = data[d].total / 12;
        avg_released = avg_released.toFixed(1)
            .toLocaleString('en-US');
        avg_released = avg_released === '0.0' ? 'under 0.1' : avg_released;

        list += `
                <li>
                    <ul>
                        <span class="bold">${d}:</span>
                        <p>Metric tonnes:</span> ${numberWithCommas(released)}</p>
                        <p>Avg. annual metric tonnes:</span> ${numberWithCommas(avg_released)}</p>
                    </ul>
                </li>
            `;
    }

    return `
        <div class="popup-container">
            <h2>${data_obj.orgs[0]}</h2>
            <p class="subhead">Total values, 2009-2021</p>
            <ul class="popup-list">${list}</ul>
        </div>
    `;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default popupTemplate;
