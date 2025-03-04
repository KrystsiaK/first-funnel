import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
    const name = useSignal(''); // Локальная переменная для имени

    return (
        <div class="min-h-screen bg-gray-100 p-4">
            <h1 class="text-2xl font-bold text-center mb-4">Шаг 1</h1>
            <p class="text-gray-700 mb-4">Введите ваше имя:</p>
            <form class="max-w-md mx-auto">
                <input
                    type="text"
                    bind:value={name}
                    placeholder="Ваше имя"
                    class="w-full p-2 border rounded mb-4"
                />
                <a
                    href="/step2?name=<%name%>" // Используем новый синтаксис плейсхолдера
                    class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 block text-center"
                >
                    Далее
                </a>
            </form>
        </div>
    );
});
