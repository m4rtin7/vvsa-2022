using backend.DatabaseModel;
using WebApplication1.Repository;

namespace WebApplication1.Service;

public class TransactionService: ITransactionService
{
    private readonly ITransactionRepository transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        this.transactionRepository = transactionRepository;
    }
    public List<TransactionViewModel> GetAllTransactions()
    {
        var transactionModels = new List<TransactionViewModel>();
        transactionRepository.GetAllTransactions().ForEach(tr => transactionModels.Add(ToTransactionViewModel(tr)));
        
        return transactionModels;
    }

    public TransactionViewModel GetTransaction(int id)
    {
        return ToTransactionViewModel(transactionRepository.GetTransaction(id));
    }

    private TransactionViewModel ToTransactionViewModel(Transaction tr)
    {
        return new TransactionViewModel
        {
            Amount = tr.Amount,
            TransactionId = tr.Id,
            FullName = tr.User.Name,
            TransactionType = tr.TransactionType.Name,
            AccountNumber = tr.AccountNumber,
            BankCode = tr.BankCode,
            IssueDate = tr.IssueDate
        };
    }
}