class Graph{
    constructor() {
        this.adjacency = {};
    }

    addVertex(vertex) {
        if (!this.adjacency[vertex]) {
            this.adjacency[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacency[vertex2]) {
            this.addVertex(vertex2);
        }
        if (!this.adjacency[vertex1]) {
            this.addVertex(vertex1);
        }
        this.adjacency[vertex1].add(vertex2);
        this.adjacency[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (this.adjacency[vertex2].has(vertex1))
    }

    removeEdge(vertex1, vertex2) {
        this.adjacency[vertex1].delete(vertex2);
        this.adjacency[vertex2].delete(vertex1);
    }

    print() {
        for (const vertex in this.adjacency) {
            console.log(vertex + " -> " + [...this.adjacency[vertex]].join(", "));
        }
    }

    removeVertex(vertex) {
        for (const vertex2 of this.adjacency[vertex]) {
            this.removeEdge(vertex2, vertex);
        }
        delete this.adjacency[vertex];
    }
}