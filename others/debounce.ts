function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Пример использования в компоненте
// const DebounceExample: React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>('');
//   const [debouncedValue, setDebouncedValue] = useState<string>('');

//   // Создаем debounced функцию
//   const debouncedSetDebouncedValue = debounce((value: string) => {
//     setDebouncedValue(value);
//   }, 500);

//   // Обрабатываем изменение input
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setInputValue(value);
//     debouncedSetDebouncedValue(value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       />
//       <p>Input Value: {inputValue}</p>
//       <p>Debounced Value: {debouncedValue}</p>
//     </div>
//   );
// };

// export default DebounceExample;
