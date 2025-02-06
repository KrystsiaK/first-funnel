import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
} from "@builder.io/qwik";

export interface CoreProps {
  isAdmin: boolean;
  goNext$: () => void;
  setAdmin$: (isAdmin: boolean) => void;
}

export const CoreContext = createContextId<CoreProps>("core-context");

export const PageWrapper = component$((props: CoreProps) => {
  // Предоставляем контекст для всех вложенных компонентов
  useContextProvider(CoreContext, props);
  return (
    <div class="min-h-screen">
      <Slot />
    </div>
  );
});
