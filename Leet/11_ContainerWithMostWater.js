// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

var maxArea = function(height) {
    let lP = 0;
    let rP = height.length - 1;
    let maxArea = 0;
    
    while (lP < rP) {
        maxArea = Math.max(maxArea, Math.min(height[lP], height[rP]) * (rP - lP))
        if (height[lP] < height[rP]) {
            lP++
        } else {
            rP--
        }                   
    }
    
    return maxArea;
};