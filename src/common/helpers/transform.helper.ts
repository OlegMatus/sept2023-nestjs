export class TransformHelper {
  public static trim({ value }): string {
    return value ? value.trim() : value;
  }
  public static trimArray({ value }): string {
    return value ? value.map((item) => item.trim()) : value;
  }

  public static toLowerCase({ value }): string {
    return value ? value.toLowerCase() : value;
  }
  public static uniqueItems({ value }): string {
    return value ? Array.from(new Set(value)) : value;
  }
  public static toLowerCaseArray({ value }) {
    return value ? value.map((item) => item.toLowerCase()) : value;
  }
}
