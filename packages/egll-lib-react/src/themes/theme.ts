export interface Theme {
  name: string;
  base: Status;
  hover: Status;
}

interface Status {
  color: string;
  background: string;
  border: string;
}