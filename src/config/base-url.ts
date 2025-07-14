export const getBaseUrl = (): string => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://api.hvarlocalguide.com/api/v1"; // https://api.hvarlocalguide.com/api/v1

  if (!baseUrl) {
    console.warn(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables."
    );
    return "";
  }

  return baseUrl;
};

export const getWidgetUrl = (): string => {
  const baseUrl =
    process.env.NEXT_PUBLIC_WIDGET_URL || "http://172.252.13.71:8018/api/v1"; // https://api.hvarlocalguide.com/api/v1

  if (!baseUrl) {
    console.warn(
      "NEXT_PUBLIC_WIDGET_URL is not defined in environment variables."
    );
    return "";
  }

  return baseUrl;
};
