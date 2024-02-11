#include<stdio.h>
int mul(int a,int b)
{
    int res;
    res=(a*a)+(b*b)+2*(a*b);
    return res;
}
int main(){
    printf("%d\n",mul(2,3));
    printf("%d\n",mul(2,3));
}