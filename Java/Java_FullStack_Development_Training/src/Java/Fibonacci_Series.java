package Java;
import java.util.Scanner;
public class Fibonacci_Series {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int fterm=0;
		int sterm=1;
		for(int i=1;i<=n;++i) {
			System.out.print(fterm + ", ");
			int nextterm=fterm +sterm;
			fterm= sterm;
			sterm=nextterm;
		}
	}

}
