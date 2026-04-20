import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Считываем всю строку с числами
        String line = scanner.nextLine();
        
        // Разделяем строку по пробелам (один или несколько)
        String[] parts = line.trim().split("\\s+");
        
        long sum = 0;
        for (String part : parts) {
            // Преобразуем строку в целое число
            int number = Integer.parseInt(part);
            // Добавляем квадрат числа к сумме
            sum += (long) number * number;
        }
        
        // Выводим результат
        System.out.println(sum);
        
        scanner.close();
    }
}