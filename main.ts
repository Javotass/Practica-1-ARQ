function AlgoritmoHanoi(n: number, origen: string, destino: string, auxiliar: string, disco: number = n): string[] {
    let movimientos: string[] = [];
    if (n === 1) {
        movimientos.push(`Mover disco ${disco} de ${origen} a ${destino}`);
    } else {
        //Si no utilizas el operador(...), se devolvería un array completo como un solo elemento en lugar 
        //de desglosarlo en sus movimientos individuales. Esto significa que, sin los tres puntos, estarías agregando arrays anidados 
        //dentro de movimientos
        movimientos.push(...AlgoritmoHanoi(n - 1, origen, auxiliar, destino, n - 1));
        
        movimientos.push(`Mover disco ${n} de ${origen} a ${destino}`);
        
        movimientos.push(...AlgoritmoHanoi(n - 1, auxiliar, destino, origen, n - 1));
    }
    return movimientos;
}

// Ejemplo para 3 discos
const movimientos = AlgoritmoHanoi(3, 'A', 'C', 'B');
movimientos.forEach((movimiento) => console.log(movimiento));