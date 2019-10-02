#!/bin/bash
#echo "Instalando dependencias..."
#npm install
#npm install --save axios chart.js mathjs

echo "Removendo build antigo..."
rm -R relatorio

echo "Criando novo build..."
npm run build
ARQUIVOS=$(find dist -regex ".*\.\(html\|js\)")

echo "Corrigindo codificação para Webrun"
for arquivo in $ARQUIVOS 
do
    COD_ORIGEM=$(file -i $arquivo | grep -Po "charset=.*" | sed 's/charset=//g')
    echo "$arquivo - $COD_ORIGEM"
    iconv $arquivo -t ISO-8859-1 -o $arquivo
done

mv dist relatorio