function popupTemplate(data_obj) {
    let list = '';
    let org_list = '';
    const data = data_obj.sumByContaminant;

    console.log(data_obj)

    // get list of facilities
    data_obj.orgs.forEach(d => {
        org_list += `${d}, `;
    });

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
                        <p><span class="bold">${d}:</span> ${numberWithCommas(avg_released)} metric tonnes</p>
                    </ul>
                </li>
            `;
        // <p>Metric tonnes:</span> ${numberWithCommas(released)}</p>
    }

    return `
        <div class="popup-container">
            <h3>Average annual maximum emissions allowed from 2009-2021:</h3>
            <ul class="popup-list">${list}</ul>
            <p><span class="bold">Sources:</span> ${org_list.slice(0, -2)}</p>
        </div>
    `;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default popupTemplate;
