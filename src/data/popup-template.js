module.exports = (data_obj) => {
    let list = '';
    const data = data_obj.sumByContaminant;

    // we're iterating over an object (i know, i know <rolling_eyes>)
    for (const d in data) {
        list += `
                <li>
                    <ul>
                        <span class="bold">${d}:</span>
                        <p>Metric tonnes released:</span> ${data[d].total_released.toFixed(1)}</p>
                        <p>Total health cost:</span> $${data[d].total_impact_value.toFixed(0)}</p>
                        <p>Impact scale: ${data[d].total_impact_scale.toFixed(1)}</p>
                    </ul>
                </li>
            `;
    }
    // data.forEach(d => {
    //     // if (d.total === 0) return;
    //     list += `
    //             <li>
    //                 <p><span class="bold">${d.contaminant}:</span> $${Math.round(d.total_impact_value, 0)}</p>
    //                 <p>Impact scale: ${Math.round(d.total_impact_scale * 10) / 10}</p>
    //             </li>
    //         `;
    // });

    return `
        <div class="popup-container">
            <h2>${data.org}</h2>
            <p class="subhead">Totals values, 2009-2021</p>
            <ul class="popup-list">${list}</ul>
        </div>
    `;
}