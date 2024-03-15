class Graph{
    constructor() {
        this.adjacency = {}
    }

    addVertex(vertex) {
        if (!this.adjacency[vertex]) {
            this.adjacency[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacency[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacency[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacency[vertex1].add(vertex2);
        this.adjacency[vertex2].add(vertex1);
    }

    print() {
        for (const vertex in this.adjacency) {
            console.log(vertex + " ->" + [...this.adjacency[vertex]].join(", "));
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacency[vertex1].delete(vertex2);
        this.adjacency[vertex2].delete(vertex1);
    }

    removeVertex(vertex1) {
        for (const vertex in this.adjacency) {
            this.removeEdge(vertex,vertex1)
        }
        delete this.adjacency[vertex1]
    }
}