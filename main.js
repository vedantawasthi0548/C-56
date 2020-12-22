var reasons = ["trees give oxygen", "trees provide shelter", "trees provide shade", "trees prevent soil erosion", "trees provide fruits"]
var images = ["https://images.unsplash.com/photo-1517670972079-a58c8d6c0af8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1469199667817-594accd1bdc1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1501889088093-90b27410d97e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"]
var i = 0;

function next() {
    document.getElementById("R1").innerHTML = reasons[i];
    document.getElementById("img1").src = images[i];
    i++;
}
