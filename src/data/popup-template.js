module.exports = (data) => {
    // console.log(data.contaminants)
    let list = '';

    data.contaminants[0].forEach(d => {
        if (d.total === 0) return;
        list += `
                <li><p><span class="bold">${d.contaminant}:</span> ${d.total}</p></li>
            `;
    });

    return `
        <div class="popup-container">
            <h2>${data.org}</h2>
            <p class="subhead">Metric tonnes emitted, 2009-2021</p>
            <ul class="popup-list">${list}</ul>
        </div>
    `;
}