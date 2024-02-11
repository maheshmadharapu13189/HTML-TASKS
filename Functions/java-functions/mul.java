
public class mul{
    public static void main(String[] args) {
        fun1(2,4);
        fun1(8,5);
    }
    public static void fun1(int n1,int n2){
        int res;
        res=(n1*n2)+(n1*n2)+(2*(n1*n2));
        System.out.printf("%d\n",res);
    }
}