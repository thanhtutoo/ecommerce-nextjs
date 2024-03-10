import * as mockRouter from "next-router-mock";

const useRouter = mockRouter.useRouter;

export const MockNextNavigation = {
  ...mockRouter,
  useRouter: () => ({
    ...useRouter(),
    push: jest.fn(), // Mock the push method
  }),
  usePathname: () => {
    const router = useRouter();
    return router.pathname;
  },
  useSearchParams: () => {
    const router = useRouter();
    const path = router.asPath.split("?")?.[1] ?? "";
    return new URLSearchParams(path);
  },
};

jest.mock("next/navigation", () => MockNextNavigation);
