package com.PremireSystems.Portal.Service.MediaDisposalService;

import com.PremireSystems.Portal.Entity.MediaDisposal.MediaDisposalForm;
import com.PremireSystems.Portal.Entity.MediaDisposal.MediaDisposalFormHistory;
import com.PremireSystems.Portal.Repository.MediaDisposalForm.MediaDisposalFormHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MediaDisposalFormHistoryService {
    @Autowired
    private MediaDisposalFormHistoryRepository mediaDisposalFormHistoryRepository;

    public MediaDisposalFormHistory create(MediaDisposalFormHistory mediaDisposalFormHistory){
        return mediaDisposalFormHistoryRepository.save(mediaDisposalFormHistory);
    }

    public List<MediaDisposalFormHistory> getMediaDisposalFormHistory() {
        return mediaDisposalFormHistoryRepository.findAll();
    }
}
