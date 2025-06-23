export const getBaseUrl = (): string => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://api.hvarlocal.com/api/v1";

  if (!baseUrl) {
    console.warn(
      "NEXT_PUBLIC_BASE_URL is not defined in environment variables."
    );
    return "";
  }

  return baseUrl;
};
