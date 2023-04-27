class TaskResolver {
    constructor(fn) {
        this.reject = null;
        this.resolve = null;

        this.result = new Promise((resolve, _) => {
            this.resolve = resolve;
        });

        this.error = new Promise((resolve, reject) => {
            this.reject = resolve;
        })
    }
}

class AsyncQueueFactory {
    constructor() {
        this.queue = [];
        this.maxConcurrency = 2;
        this.currentConcurrency = 0;
    }

    enqueue(fn) {
        const taskResolver = new TaskResolver();

        const task = async () => {
            try {
                const result = await fn();
                taskResolver.resolve(result);
            } catch (err) {
                taskResolver.reject(err);
            } finally {
                this.currentConcurrency--;
                this.tryExecute();
            }
        }

        this.queue.push(task);
        this.tryExecute();

        return taskResolver;
    }

    async tryExecute() {
        if (this.queue.length === 0) {
            return;
        }

        if (this.currentConcurrency >= this.maxConcurrency) {
            return;
        }

        this.currentConcurrency++;

        const task = this.queue.shift();
        await task();
    }
}

const q = new AsyncQueueFactory();

const delay = (ms, throwError) => () => new Promise((resolve, reject) => setTimeout(() => {
    console.log(`Task Finished after ${ms}ms`);
    if (throwError) {
        reject();
        return;
    }

    resolve();
}, ms));

q.enqueue(delay(5000))
q.enqueue(delay(3000));
q.enqueue(delay(2500));
q.enqueue(delay(2000));
q.enqueue(delay(1000));
q.enqueue(delay(500));
q.enqueue(delay(500));
q.enqueue(delay(500));