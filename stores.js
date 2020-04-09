var mainGrid = [
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
    [1, 0, 1, 1],
    [1, 1, 1, 1],
];
//Get Direction of all 1
var ArrayX = new Array();
var z = 0;
for (var i = 0; i < mainGrid.length; i++) {
    var innerArrayLength = mainGrid[i].length;
    for (var j = 0; j < innerArrayLength; j++) {
        if (mainGrid[i][j] == 1) {
            ArrayX.push({ x: i, y: j });
        }
    }
}

var cluster = [];

for (let i = 0; i < ArrayX.length; i++) {
    findCluster(ArrayX[i])
}

console.log("Total number of clusters are : ", cluster.length)
cluster.forEach((cluster, i) => {
    console.log("Cluster ", i + 1, ": ", cluster)
});

function findCluster(area) {

    if (cluster.length === 0) {
        cluster = [...cluster, [area]];
        return
    }
    var flag = false;
    for (let i = 0; i < cluster.length; i++) {

        for (let j = 0; j < cluster[i].length; j++) {
            let temp = cluster[i][j];
            if (area.x === temp.x || area.y === temp.y) {

                if (Math.abs(area.x - temp.x) === 1 || Math.abs(area.y - temp.y) === 1) {
                    cluster[i] = [...cluster[i], area];
                    flag = true;
                    break;
                }
            }
        }
    }
    if (!flag) {
        cluster = [...cluster, [area]];
    }
}
