function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let inDegree = new Array(numCourses).fill(0);
    let graph = new Map<number, number[]>();

    for (const [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) {
            graph.set(prereq, []);
        }
        graph.get(prereq).push(course);
        inDegree[course] += 1;
    }

    const queue: number[] = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let taken = 0;
    while (queue.length) {
        let course = queue.shift();
        taken += 1;

        for (const next of graph.get(course) || []) {
            inDegree[next] -= 1;
            if (inDegree[next] === 0) queue.push(next);
        }
    }

    return taken === numCourses
};