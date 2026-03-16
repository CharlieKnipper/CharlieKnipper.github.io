document.addEventListener("DOMContentLoaded", init);

function init()
{
    loadActivities();
}

function loadActivities()
{
    fetch("./assets/content/activities.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("activityContainer");

            data.activities.forEach(activity => {
                container.innerHTML += `
                    <tr>
                        <th class="gradText">${activity.title}</td>
                        <td>${activity.desc}</td>
                        <td><a href="${activity.link}" class="gradText">[link]</a></td>
					</tr>
                `;
            })
        })
        .catch(error => console.error("Couldn't fetch JSON content: ", error));
}

function getRandomColor()
{
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function setBG()
{
    const colors = Array.from({length:5}, () => getRandomColor());
    const style = `linear-gradient(-45deg, ${colors.join(', ')})`;

    document.documentElement.style.setProperty("--bgColors", style);
}