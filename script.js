const questions = [
    {
        question: "If a line makes angles α and β with positive directions of x and y axes respectively, then its slope is given by:",
        options: ["tan α", "cot α", "-tan α", "-cot α"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The slope of the line passing through points (3, -2) and (5, 4) is:",
        options: ["3", "2", "-3", "4"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The equation ax + by + c = 0 represents a straight line if:",
        options: ["a² + b² ≠ 0", "a² + b² = 0", "a = b = 0", "c = 0"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The angle between lines y = mx and y = nx is given by:",
        options: ["tan⁻¹((n-m)/(1+mn))", "tan⁻¹((n+m)/(1-mn))", "tan⁻¹((n-m)/(1-mn))", "tan⁻¹((n+m)/(1+mn))"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "If a line makes equal intercepts on the coordinate axes, then its equation is of the form:",
        options: ["x + y = a", "x - y = a", "x + y + a = 0", "x - y + a = 0"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The distance of point (2, 3) from the line 3x - 4y + 5 = 0 is:",
        options: ["(17/5)", "(13/5)", "(19/5)", "(23/5)"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Lines 2x + 3y = 5 and 4x + 6y = 11 are:",
        options: ["Parallel", "Perpendicular", "Intersecting", "Coincident"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The equation of line passing through (1, 2) and perpendicular to line y = 2x + 1 is:",
        options: ["x - 2y = -3", "2x - y = 0", "x + 2y = 5", "2x + y = 4"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The point of intersection of lines x + y = 5 and 2x - y = 3 is:",
        options: ["(3, 2)", "(2, 3)", "(4, 1)", "(1, 4)"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "Area of triangle formed by lines y = 0, x = 2 and y = x is:",
        options: ["2 sq units", "4 sq units", "1 sq unit", "3 sq units"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "If point (h, k) is equidistant from lines x + y = 0 and x - y = 0, then:",
        options: ["h = 0", "k = 0", "h = k", "h = -k"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The condition for lines ax + by + c = 0 and dx + ey + f = 0 to be perpendicular is:",
        options: ["ad + be = 0", "ad - be = 0", "ae + bd = 0", "ae - bd = 0"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The angle between lines 3x + y = 0 and x - 3y = 0 is:",
        options: ["60°", "45°", "30°", "90°"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "If a line passes through origin, its equation must lack:",
        options: ["Constant term", "x term", "y term", "Both x and y terms"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The equation of line with slope 2 and y-intercept 3 is:",
        options: ["y = 2x + 3", "y = 3x + 2", "2y = x + 3", "y = -2x + 3"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The equation of line passing through (1, -1) and parallel to line 2x - 3y = 6 is:",
        options: ["2x - 3y = 5", "2x - 3y = 1", "3x - 2y = 5", "3x - 2y = 1"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "If lines px + qy + r = 0 and ax + by + c = 0 are perpendicular, then:",
        options: ["ap + bq = 0", "ap - bq = 0", "aq + bp = 0", "aq - bp = 0"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The slope of line 3x - 4y + 7 = 0 is:",
        options: ["3/4", "4/3", "-3/4", "-4/3"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The distance between parallel lines 2x + 3y + 4 = 0 and 2x + 3y + 7 = 0 is:",
        options: ["1", "2", "3", "4"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through (2, 3) with slope -1 is:",
        options: ["x + y = 5", "x - y = -1", "x + y = -1", "x - y = 5"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "If a line makes angle of 60° with x-axis, its slope is:",
        options: ["√3", "1/√3", "-√3", "-1/√3"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "The point where line 3x - 4y = 12 intersects y-axis is:",
        options: ["(0, -3)", "(0, 3)", "(3, 0)", "(-3, 0)"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        question: "Lines 2x + 3y = 5 and 4x + 6y = 10 are:",
        options: ["Coincident", "Parallel", "Perpendicular", "Intersecting at one point"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The acute angle between lines y = x and y = -x is:",
        options: ["90°", "45°", "60°", "30°"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "If point (x, y) is equidistant from lines x + y = 0 and x - y = 0, then:",
        options: ["x = 0", "y = 0", "x = y", "x = -y"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line with x-intercept a and y-intercept b is:",
        options: ["x/a + y/b = 1", "ax + by = 1", "x/b + y/a = 1", "bx + ay = 1"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The angle between lines 2x + y = 0 and 2x - y = 0 is:",
        options: ["45°", "90°", "60°", "30°"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "If lines ax + by + c = 0 and dx + ey + f = 0 are parallel, then:",
        options: ["a/d = b/e", "a/e = b/d", "ad = be", "ae = bd"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The perpendicular distance from point (2, -1) to line x + y = 3 is:",
        options: ["2√2", "√2", "2", "1"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line passing through intersection of lines x + y = 4 and x - y = 2, and point (0, 1) is:",
        options: ["3x - y = -1", "x - 3y = -3", "3x + y = 3", "x + 3y = 3"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line passing through point of intersection of lines x - y + 2 = 0 and x + y - 4 = 0, and parallel to x-axis is:",
        options: ["y = 1", "y = 2", "y = 3", "y = 4"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "If the line joining points (a, 0) and (0, b) is perpendicular to line joining (c, 0) and (0, d), then:",
        options: ["ac + bd = 0", "ad + bc = 0", "ab + cd = 0", "ab = cd"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The area of triangle formed by lines y = mx, y = nx and x = 1 is:",
        options: ["|(m-n)|/2", "|m-n|", "|(m+n)|/2", "|m+n|"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "If a line makes equal angles with coordinate axes, its slope is:",
        options: ["±1", "0", "∞", "undefined"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line passing through (1, 2) and making angle of 45° with positive x-axis is:",
        options: ["y - 2 = x - 1", "y - 2 = -(x - 1)", "y + 2 = x + 1", "y + 2 = -(x + 1)"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through origin and perpendicular to line 3x + 4y = 5 is:",
        options: ["4x - 3y = 0", "3x - 4y = 0", "-4x + 3y = 0", "-3x + 4y = 0"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "If lines ax + by + c = 0 and dx + ey + f = 0 are coincident, then:",
        options: ["a/d = b/e = c/f", "a/d = b/e ≠ c/f", "a/d ≠ b/e = c/f", "a/d = c/f ≠ b/e"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The distance of point (h, k) from line ax + by + c = 0 is:",
        options: ["|ah + bk + c|/√(a² + b²)", "|ah + bk + c|/√(a² - b²)", "|ah - bk + c|/√(a² + b²)", "|ah + bk - c|/√(a² + b²)"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, -3) and perpendicular to vector i + 2j is:",
        options: ["x + 2y + 4 = 0", "x + 2y - 8 = 0", "2x + y + 1 = 0", "2x + y - 7 = 0"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The foot of perpendicular from point (2, 3) on line x + y = 5 is:",
        options: ["(1, 4)", "(4, 1)", "(2, 2)", "(3, 2)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "If point (x, y) is equidistant from lines 2x + y - 4 = 0 and x - 2y + 1 = 0, then:",
        options: ["4x - 5y + 7 = 0", "5x - 4y + 7 = 0", "4x + 5y + 7 = 0", "5x + 4y + 7 = 0"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, -2) and parallel to vector 2i - 3j is:",
        options: ["2x + 3y + 8 = 0", "3x + 2y + 1 = 0", "2x - 3y - 7 = 0", "3x - 2y + 1 = 0"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "If lines ax + by + c = 0 and dx + ey + f = 0 intersect at right angle, then:",
        options: ["ad + be = 0", "ad - be = 0", "ae + bd = 0", "ae - bd = 0"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 30° with positive x-axis is:",
        options: ["y - 3 = (1/√3)(x - 2)", "y - 3 = √3(x - 2)", "y - 3 = -(1/√3)(x - 2)", "y - 3 = -√3(x - 2)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and making equal angles with lines x + y = 0 and x - y = 0 is:",
        options: ["x = 1", "y = 2", "x + 2y = 5", "2x + y = 4"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, -1) and equally inclined to coordinate axes is:",
        options: ["x - y = 3", "x + y = 1", "x - y = -3", "x + y = 3"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (1, 2) and perpendicular to line joining points (3, 4) and (5, 0) is:",
        options: ["2x - y - 0 = 0", "x - 2y + 3 = 0", "2x + y - 4 = 0", "x + 2y - 5 = 0"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 60° with line 2x + y = 5 is:",
        options: ["x - √3y + 2√3 - 1 = 0", "√3x - y - 2√3 + 3 = 0", "x + √3y - 2√3 - 3 = 0", "√3x + y - 2√3 - 3 = 0"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, -1) and parallel to line joining points (2, 3) and (4, 7) is:",
        options: ["y + 1 = 2(x - 1)", "y + 1 = -2(x - 1)", "2y + 2 = x - 1", "2y + 2 = -(x - 1)"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, 3) and perpendicular to line ax + by + c = 0 is:",
        options: ["ax - by = 2a - 3b", "bx + ay = 2b + 3a", "-bx + ay = -2b + 3a", "bx - ay = 2b - 3a"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and making angle of 45° with line x + y = 4 is:",
        options: ["x - y = -1", "x + y = 3", "x - y = 1", "x + y = 5"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, -1) and equally inclined to lines x + y = 0 and x - y = 0 is:",
        options: ["x = 2", "y = -1", "x + y = 1", "x - y = 3"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (1, 2) and making angle of 60° with positive x-axis is:",
        options: ["y - 2 = √3(x - 1)", "y - 2 = -(√3)(x - 1)", "√3y - 2√3 = x - 1", "√3y - 2√3 = -(x - 1)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, 3) and parallel to line x cos α + y sin α = p is:",
        options: ["x cos α + y sin α = 2 cos α + 3 sin α", "x sin α + y cos α = 2 sin α + 3 cos α", "-x cos α + y sin α = -2 cos α + 3 sin α", "x cos α - y sin α = 2 cos α - 3 sin α"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, -1) and making angle of 30° with line y = x is:",
        options: ["y + 1 = (√3 - 1)(x - 1)", "y + 1 = (√3 + 1)(x - 1)", "y + 1 = -(√3 - 1)(x - 1)", "y + 1 = -(√3 + 1)(x - 1)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 45° with line 2x + y = 5 is:",
        options: ["x - y = -1", "x + y = 5", "x - y = 1", "x + y = 1"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and equally inclined to lines x + √3y = 0 and x - √3y = 0 is:",
        options: ["x = 1", "y = 2", "x + 2y = 5", "2x + y = 4"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, -1) and making angle of 60° with line x - y = 3 is:",
        options: ["y + 1 = √3(x - 2)", "y + 1 = -(√3)(x - 2)", "√3y + √3 = x - 2", "√3y + √3 = -(x - 2)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and perpendicular to line joining points (0, 0) and (3, 4) is:",
        options: ["3x + 4y = 11", "4x - 3y = -2", "3x - 4y = -5", "4x + 3y = 10"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 45° with line x + 2y = 7 is:",
        options: ["x - 3y = -7", "3x - y = 3", "x + 3y = 11", "3x + y = 9"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, -1) and parallel to line joining points (-1, 2) and (2, -4) is:",
        options: ["2x + 3y = -1", "3x + 2y = 1", "2x - 3y = 5", "3x - 2y = 5"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 30° with positive y-axis is:",
        options: ["y - 3 = √3(x - 2)", "y - 3 = (1/√3)(x - 2)", "√3y - 3√3 = x - 2", "(1/√3)y - 1 = x - 2"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and making equal angles with lines y = 0 and x = 0 is:",
        options: ["x - y = -1", "x + y = 3", "y - x = 1", "x + y = -1"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, -1) and making angle of 45° with line 3x + 4y = 12 is:",
        options: ["4x - 3y = 11", "3x + 4y = 5", "4x + 3y = 5", "3x - 4y = 11"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and perpendicular to line x cos α - y sin α = p is:",
        options: ["x sin α + y cos α = sin α + 2 cos α", "x cos α + y sin α = cos α + 2 sin α", "-x sin α + y cos α = -sin α + 2 cos α", "x sin α - y cos α = sin α - 2 cos α"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 60° with line x + y = 5 is:",
        options: ["x - √3y = 2 - 3√3", "√3x - y = 2√3 - 3", "x + √3y = 2 + 3√3", "√3x + y = 2√3 + 3"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, -1) and equally inclined to coordinate axes is:",
        options: ["x - y = 2", "x + y = 0", "x - y = 0", "x + y = 2"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 30° with line x - 2y = 4 is:",
        options: ["2x + y = 7", "x + 2y = 8", "2x - y = 1", "x - 2y = 0"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and parallel to line x cos 60° + y sin 60° = 2 is:",
        options: ["x/2 + y√3/2 = 2", "x√3/2 + y/2 = 3", "x/2 - y√3/2 = 0", "x√3/2 - y/2 = 1"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, -1) and making angle of 45° with line 2x - y = 5 is:",
        options: ["x + y = 1", "x - y = 3", "y + x = 3", "y - x = 1"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and equally inclined to lines y = x and y = -x is:",
        options: ["x = 1", "y = 2", "x + y = 3", "x - y = -1"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 60° with x-axis is:",
        options: ["y - 3 = √3(x - 2)", "y - 3 = -(√3)(x - 2)", "√3y - 3√3 = x - 2", "√3y - 3√3 = -(x - 2)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, -1) and perpendicular to line x cos 30° + y sin 30° = 2 is:",
        options: ["-x sin 30° + y cos 30° = -1", "x sin 30° + y cos 30° = 0", "-x cos 30° + y sin 30° = 1", "x cos 30° + y sin 30° = 2"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, 3) and making angle of 45° with y-axis is:",
        options: ["x - y = -1", "x + y = 5", "y - x = 1", "x + y = 1"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (1, 2) and making angle of 30° with line y = mx + c is:",
        options: ["y - 2 = (m + √3)/(1 - m√3)(x - 1)", "y - 2 = (m - √3)/(1 + m√3)(x - 1)", "y - 2 = (√3 - m)/(1 + m√3)(x - 1)", "y - 2 = (√3 + m)/(1 - m√3)(x - 1)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, -1) and equally inclined to lines 2x + y = 5 and 2x - y = 5 is:",
        options: ["x = 2", "y = -1", "2x = 3", "2y = -3"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 2) and making angle of 60° with line y = x + 1 is:",
        options: ["y - 2 = -2(x - 1)", "y - 2 = 2(x - 1)", "2y - 4 = -(x - 1)", "2y - 4 = x - 1"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (2, 3) and perpendicular to line joining points (1, -1) and (3, 5) is:",
        options: ["3x - 2y = 0", "2x - 3y = 0", "3x + 2y = 12", "2x + 3y = 12"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, -2) and making angle of 45° with line x - y = 1 is:",
        options: ["x + y = -1", "x - y = -1", "y + x = 1", "y - x = 1"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (3, 2) and equally inclined to lines x + 2y = 0 and x - 2y = 0 is:",
        options: ["x = 3", "y = 2", "2x = 6", "2y = 4"],
        correctAnswer: 0,
        difficulty: "medium"
    },
    {
        question: "The equation of line through point (2, -1) and making angle of 30° with line 2x + y = 0 is:",
        options: ["y + 1 = (2 - √3)/(2√3 + 1)(x - 2)", "y + 1 = (2 + √3)/(2√3 - 1)(x - 2)", "y + 1 = (√3 - 2)/(2√3 + 1)(x - 2)", "y + 1 = (√3 + 2)/(2√3 - 1)(x - 2)"],
        correctAnswer: 0,
        difficulty: "hard"
    },
    {
        question: "The equation of line through point (1, 3) and perpendicular to line x cos 45° + y sin 45° = 1 is:",
        options: ["x + y = 4", "x - y = -2", "y - x = 2", "y + x = -4"],
        correctAnswer: 0,
    },
]
let currentQuestion = 0;
let score = 0;
let timeLeft = 1800; // 30 minutes
let timer;
let answeredQuestions = new Array(questions.length).fill(false);

// Initialize Quiz
function initializeQuiz() {
    loadQuestion();
    startTimer();
    createQuestionGrid();
    updateProgress();
    
    // Mobile menu toggle
    document.getElementById('menuToggle')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.toggle('active');
    });

    // Remove welcome animation after delay
    setTimeout(() => {
        const welcomeAnimation = document.querySelector('.welcome-animation');
        if (welcomeAnimation) {
            welcomeAnimation.style.display = 'none';
        }
    }, 4000);
}

// Load Question
function loadQuestion() {
    const question = questions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsGrid = document.getElementById('optionsGrid');
    const currentQuestionNum = document.getElementById('currentQuestionNum');
    const difficultyBadge = document.getElementById('difficultyBadge');

    if (questionText && optionsGrid && currentQuestionNum && difficultyBadge) {
        questionText.textContent = question.question;
        currentQuestionNum.textContent = currentQuestion + 1;
        difficultyBadge.textContent = question.difficulty;

        optionsGrid.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.onclick = () => checkAnswer(index);
            button.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            optionsGrid.appendChild(button);
        });
    }

    updateNavigationButtons();
}

// Check Answer
function checkAnswer(selectedIndex) {
    if (answeredQuestions[currentQuestion]) return;

    const question = questions[currentQuestion];
    const options = document.getElementsByClassName('option');

    if (selectedIndex === question.correctAnswer) {
        options[selectedIndex].classList.add('correct');
        score++;
        showFeedback(true);
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correctAnswer].classList.add('correct');
        showFeedback(false);
    }

    answeredQuestions[currentQuestion] = true;
    updateScore();
    updateProgress();
    updateQuestionGrid();
    
    // Check if all questions are answered
    checkQuizCompletion();
}

// Check Quiz Completion
function checkQuizCompletion() {
    if (answeredQuestions.filter(Boolean).length === questions.length) {
        showResults();
    }
}

// Navigation Functions
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        updateProgress();
    }
}

// Timer Functions
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeLeftElement = document.getElementById('timeLeft');
    if (timeLeftElement) {
        timeLeftElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// UI Update Functions
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
    }
}

function updateScore() {
    const scoreElements = document.querySelectorAll('#score');
    scoreElements.forEach(element => {
        element.textContent = score;
    });
}

function showFeedback(isCorrect, message = null) {
    const feedbackModal = document.createElement('div');
    feedbackModal.className = `feedback-modal ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackModal.textContent = message || (isCorrect ? 'Correct!' : 'Incorrect!');
    
    document.body.appendChild(feedbackModal);
    
    setTimeout(() => {
        feedbackModal.remove();
    }, 2000);
}

function createQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    if (grid) {
        grid.innerHTML = '';
        questions.forEach((_, index) => {
            const button = document.createElement('button');
            button.className = 'question-dot';
            button.onclick = () => jumpToQuestion(index);
            grid.appendChild(button);
        });
        updateQuestionGrid();
    }
}

function updateQuestionGrid() {
    const dots = document.getElementsByClassName('question-dot');
    Array.from(dots).forEach((dot, index) => {
        dot.className = 'question-dot';
        if (index === currentQuestion) dot.classList.add('current');
        if (answeredQuestions[index]) dot.classList.add('answered');
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion();
    updateProgress();
    updateQuestionGrid();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = currentQuestion === questions.length - 1;
    }
}

function showResults() {
    clearInterval(timer);
    
    const resultsModal = document.getElementById('resultsModal');
    const finalScore = document.getElementById('finalScore');
    const accuracy = document.getElementById('accuracy');
    const timeTaken = document.getElementById('timeTaken');
    
    if (resultsModal && finalScore && accuracy && timeTaken) {
        const accuracyValue = ((score / questions.length) * 100).toFixed(1);
        const timeSpent = 1800 - timeLeft;
        
        finalScore.textContent = `${score}/${questions.length}`;
        accuracy.textContent = `${accuracyValue}%`;
        timeTaken.textContent = 
            `${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}`;
        
        resultsModal.classList.add('show');
        
        // Add restart button if not already present
        const restartBtn = document.querySelector('.restart-btn');
        if (!restartBtn) {
            const btn = document.createElement('button');
            btn.className = 'restart-btn';
            btn.innerHTML = '<i class="fas fa-redo"></i> Restart Quiz';
            btn.onclick = restartQuiz;
            resultsModal.appendChild(btn);
        }
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 1800;
    answeredQuestions = new Array(questions.length).fill(false);
    
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) {
        resultsModal.classList.remove('show');
    }
    
    // Reset all states
    updateQuestionGrid();
    updateProgress();
    updateScore();
    
    // Reset timer
    clearInterval(timer);
    startTimer();
    
    // Load first question
    loadQuestion();
    
    // Show welcome message for restart
    showFeedback(true, 'Quiz Restarted! Good Luck!');
}

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        previousQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        // Convert key press 1-4 to 0-3 index
        checkAnswer(parseInt(e.key) - 1);
    }
});

// Initialize when page loads
window.onload = initializeQuiz;
