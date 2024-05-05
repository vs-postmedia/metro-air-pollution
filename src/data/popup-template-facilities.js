function popupFacilitiesTemplate(data, org) {
    console.log(data)
    let list = '';

    // create a list of emissions
    JSON.parse(data).forEach(d => {
        let avg_released = d.total / 12;
        avg_released = avg_released.toFixed(1)
            .toLocaleString('en-US');
        avg_released = avg_released === '0.0' ? 'under 0.1' : avg_released;

        list += `
                <li>
                    <ul>
                        <p><span class="bold">${d.combined_contaminant}:</span> ${numberWithCommas(avg_released)} metric tonnes</p>
                    </ul>
                </li>
            `;
    });

    console.log()
    return `
        <div class="popup-container">
            <h2>${org}</h2>
            <p class="subhead">Average annual maximum emissions allowed from 2009-2021:</p>
            <ul class="popup-list">${list}</ul>
        </div>
    `;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default popupFacilitiesTemplate;
