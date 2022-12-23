export interface RunResult {
    name: string;
    raw_time: number;
    class: SccaClass;
}

export interface SccaClass {
    name: string;
    pax: number;
}