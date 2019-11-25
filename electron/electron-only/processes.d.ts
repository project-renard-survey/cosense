import { RegisterConfig, Process, Template, ExpectedInput, GraphConnection, Graph, Handler } from '../types';
declare const getProcesses: () => Promise<Process[]>;
declare const getProcess: (id: string) => Promise<Process>;
declare const setProcessProp: (id: string, key: string, value: any) => Promise<boolean>;
declare const getRegisterConfig: (formInputs: object, process: string, id: string, wsUrl: string) => RegisterConfig;
declare const newProcess: (formInputs: object, templateId: string, template: Template, graph: Graph, registerWsUrl: string) => Promise<string>;
declare const cloneProcess: (processId: string) => Promise<string>;
declare const handleOptionsData: Handler;
declare const mapInputToHandler: (expectedInput: ExpectedInput) => Handler;
declare const convertToGraphConnection: (process: string, port: string, data: any) => GraphConnection;
declare const runProcess: (processId: string, runtimeAddress: string, runtimeSecret: string) => Promise<void>;
export { getProcesses, getProcess, setProcessProp, newProcess, cloneProcess, runProcess, getRegisterConfig, convertToGraphConnection, handleOptionsData, mapInputToHandler };
