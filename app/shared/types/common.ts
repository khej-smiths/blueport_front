export interface SelectOption<T extends OptionValue> {
  value: T;
  label: string;
}

export type OptionValue = string | number | readonly string[] | undefined;

export interface Pagination {
  pageNumber: number;
  limit: number;
}