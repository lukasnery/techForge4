abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): any;
}

class Election extends VoteSystem {

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): { candidate: string; votes: number }[] {
        return Object.entries(this.votes)
            .map(([candidate, votes]) => ({ candidate, votes }))
            .sort((a, b) => b.votes - a.votes);
    }
}
