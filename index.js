
    const config = ["Project Name", "Link", "Description"];
    const values = [
      ["gomoku game-online", "https://gomoku-client-qah8.onrender.com/src/home/index.html", "Cờ caro online"],
    ];
    // ====================================

    const tableWrap = document.getElementById('tableWrap');

    function createTable(configArr, rows) {
      if (!Array.isArray(configArr) || configArr.length === 0) {
        tableWrap.innerHTML = '<div class="empty">No config provided.</div>';
        return;
      }

      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const trHead = document.createElement('tr');

      configArr.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col;
        trHead.appendChild(th);
      });
      thead.appendChild(trHead);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');

      if (!Array.isArray(rows) || rows.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = configArr.length;
        td.className = 'empty';
        td.textContent = 'No rows yet.';
        tr.appendChild(td);
        tbody.appendChild(tr);
      } else {
        rows.forEach((row, rIdx) => {
          const tr = document.createElement('tr');
          for (let c = 0; c < configArr.length; c++) {
            const td = document.createElement('td');

            const cellValue = row[c] !== undefined && row[c] !== null ? row[c] : '';

            // Special rendering for LinkName (if column name contains 'link')
            const colName = configArr[c].toLowerCase();
            if (colName.includes('link') && cellValue) {
              const a = document.createElement('a');
              a.href = cellValue;
              a.target = '_blank';
              a.rel = 'noopener noreferrer';
              a.textContent = cellValue;
              td.appendChild(a);
            } else {
              td.textContent = cellValue;
            }

            tr.appendChild(td);
          }
          tbody.appendChild(tr);
        });
      }

      table.appendChild(tbody);
      tableWrap.innerHTML = '';
      tableWrap.appendChild(table);
    }

    // initial render
    createTable(config, values);
