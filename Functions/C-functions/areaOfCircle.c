#include<stdio.h>
void aoc(int r){
    const float PI=3.14;
    float res;
    res=PI*(r*r);
    printf("%f\n",res);
}
int main(){
    aoc(2);
    aoc(9);
    return 0;
}