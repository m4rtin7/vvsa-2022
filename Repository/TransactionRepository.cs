using backend.DatabaseModel;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Repository;

public class TransactionRepository : ITransactionRepository
{
    private List<Transaction> transactions = new List<Transaction>();
    private readonly whiyes5oContext context;

    public TransactionRepository(whiyes5oContext context)
    {
        this.context = context;
    }
    
    public Transaction GetTransaction(int id)
    {
        return context.Transactions.Include(p => p.User).Include(p => p.TransactionType).FirstOrDefault(tr => tr.Id == id);
    }

    public List<Transaction> GetAllTransactions()
    {
        return context.Transactions.Include(p => p.User).Include(p => p.TransactionType).ToList();
    }
}